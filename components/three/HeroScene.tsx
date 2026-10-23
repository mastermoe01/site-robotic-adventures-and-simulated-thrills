"use client";

// The "Simulated Thrills" loop from the brand mark, engineered: a luminous cyan track with a
// loop-the-loop and a banked turn, steel ties along it, one glowing ride car, and the mark's
// faint circuit ring behind. Slow, pointer-parallaxed, tilting away as the page scrolls.

import { Canvas, useFrame } from "@react-three/fiber";
import { useReducedMotion } from "motion/react";
import { useEffect, useMemo, useRef } from "react";
import * as THREE from "three";

const CYAN = new THREE.Color("#48bcf5");
const GLOW = new THREE.Color("#c6f4fe");

function useTrackCurve() {
  return useMemo(
    () =>
      new THREE.CatmullRomCurve3(
        [
          [-3.2, -0.6, 1.0],
          [-1.7, -0.95, 1.55],
          [-0.2, -0.85, 1.65],
          [0.9, -0.35, 1.5],
          [1.15, 0.75, 1.3],
          [0.45, 1.45, 1.1],
          [-0.3, 0.95, 0.95],
          [0.15, -0.2, 0.85],
          [1.6, -0.65, 0.7],
          [3.0, -0.25, 0.0],
          [3.05, 0.25, -1.25],
          [1.5, 0.45, -1.85],
          [-1.0, 0.2, -1.85],
          [-3.0, -0.1, -1.2],
          [-3.7, -0.45, 0.1],
        ].map(([x, y, z]) => new THREE.Vector3(x, y, z)),
        true,
        "centripetal",
      ),
    [],
  );
}

function Ties({ curve }: { curve: THREE.CatmullRomCurve3 }) {
  const ref = useRef<THREE.InstancedMesh>(null);
  const count = 140;
  useEffect(() => {
    const m = ref.current;
    if (!m) return;
    const o = new THREE.Object3D();
    for (let i = 0; i < count; i++) {
      const t = i / count;
      o.position.copy(curve.getPointAt(t));
      o.lookAt(o.position.clone().add(curve.getTangentAt(t)));
      o.updateMatrix();
      m.setMatrixAt(i, o.matrix);
    }
    m.instanceMatrix.needsUpdate = true;
  }, [curve]);
  return (
    <instancedMesh ref={ref} args={[undefined, undefined, count]}>
      <boxGeometry args={[0.2, 0.025, 0.035]} />
      <meshStandardMaterial color="#34404f" metalness={0.8} roughness={0.35} />
    </instancedMesh>
  );
}

function Car({ curve, still }: { curve: THREE.CatmullRomCurve3; still: boolean }) {
  const car = useRef<THREE.Group>(null);
  const t = useRef(0.08);
  const place = () => {
    const g = car.current;
    if (!g) return;
    const p = curve.getPointAt(t.current);
    g.position.copy(p);
    g.lookAt(p.clone().add(curve.getTangentAt(t.current)));
  };
  useEffect(place);
  useFrame((_, dt) => {
    if (still) return;
    t.current = (t.current + Math.min(dt, 0.05) * 0.045) % 1;
    place();
  });
  return (
    <group ref={car}>
      <mesh position={[0, 0.07, 0]}>
        <boxGeometry args={[0.16, 0.1, 0.32]} />
        <meshStandardMaterial color={GLOW} emissive={GLOW} emissiveIntensity={2.2} toneMapped={false} />
      </mesh>
      <pointLight color={CYAN} intensity={2.5} distance={2.2} />
    </group>
  );
}

function CircuitRing({ still }: { still: boolean }) {
  const ref = useRef<THREE.Group>(null);
  const nodes = useMemo(
    () => Array.from({ length: 10 }, (_, i) => (i / 10) * Math.PI * 2 + (i % 3) * 0.17),
    [],
  );
  useFrame((_, dt) => {
    if (!still && ref.current) ref.current.rotation.z += Math.min(dt, 0.05) * 0.03;
  });
  return (
    <group ref={ref} position={[0, 0.2, -3.2]}>
      <mesh>
        <torusGeometry args={[3.3, 0.008, 8, 160]} />
        <meshBasicMaterial color={CYAN} transparent opacity={0.28} toneMapped={false} />
      </mesh>
      <mesh>
        <torusGeometry args={[3.55, 0.005, 8, 160, Math.PI * 1.3]} />
        <meshBasicMaterial color={CYAN} transparent opacity={0.16} toneMapped={false} />
      </mesh>
      {nodes.map((a) => (
        <mesh key={a} position={[Math.cos(a) * 3.3, Math.sin(a) * 3.3, 0]}>
          <sphereGeometry args={[0.035, 10, 10]} />
          <meshBasicMaterial color={GLOW} toneMapped={false} />
        </mesh>
      ))}
    </group>
  );
}

function Rig({ still }: { still: boolean }) {
  const curve = useTrackCurve();
  const group = useRef<THREE.Group>(null);
  const pointer = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  useFrame(() => {
    const g = group.current;
    if (!g || still) return;
    const scroll = Math.min(window.scrollY / window.innerHeight, 1);
    const ty = -0.35 + pointer.current.x * 0.12;
    const tx = 0.32 + pointer.current.y * 0.06 + scroll * 0.45;
    g.rotation.y += (ty - g.rotation.y) * 0.04;
    g.rotation.x += (tx - g.rotation.x) * 0.04;
    g.position.y = scroll * -0.8;
  });

  return (
    <group ref={group} rotation={[0.32, -0.35, 0]} position={[0.9, 0, 0]}>
      <mesh>
        <tubeGeometry args={[curve, 420, 0.04, 12, true]} />
        <meshStandardMaterial color={CYAN} emissive={CYAN} emissiveIntensity={1.6} toneMapped={false} />
      </mesh>
      <Ties curve={curve} />
      <Car curve={curve} still={still} />
      <CircuitRing still={still} />
    </group>
  );
}

export default function HeroScene() {
  const still = useReducedMotion() ?? false;

  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0.4, 7.2], fov: 40 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      frameloop={still ? "demand" : "always"}
      aria-hidden="true"
    >
      <ambientLight intensity={0.35} />
      <directionalLight position={[3, 5, 4]} intensity={1.1} color="#dff6ff" />
      <Rig still={still} />
    </Canvas>
  );
}
