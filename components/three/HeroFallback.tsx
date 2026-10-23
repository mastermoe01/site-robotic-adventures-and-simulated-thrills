/** Static rendition of the hero track: shown while 3D loads, on phones, and without GPU WebGL. */
export default function HeroFallback() {
  return (
    <svg viewBox="0 0 800 520" className="h-full w-full" aria-hidden="true" preserveAspectRatio="xMidYMid meet">
      <defs>
        <filter id="hf-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="5" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <circle cx="430" cy="250" r="230" fill="none" stroke="#48bcf5" strokeOpacity="0.22" strokeWidth="1.5" />
      <path d="M 430 20 A 250 250 0 0 1 675 300" fill="none" stroke="#48bcf5" strokeOpacity="0.14" strokeWidth="1" />
      {[0, 40, 95, 150, 210, 260, 300].map((a) => {
        const r = (a * Math.PI) / 180;
        return <circle key={a} cx={430 + Math.cos(r) * 230} cy={250 + Math.sin(r) * 230} r="3.5" fill="#c6f4fe" />;
      })}
      <path
        d="M 40 380 C 180 430 300 440 400 400 C 520 350 540 200 470 160 C 400 120 360 220 420 300 C 470 360 600 380 700 330 C 790 280 760 200 640 190 C 480 175 260 200 120 260 C 50 290 10 350 40 380 Z"
        fill="none"
        stroke="#48bcf5"
        strokeWidth="5"
        strokeLinejoin="round"
        filter="url(#hf-glow)"
      />
      <rect x="292" y="414" width="26" height="14" rx="3" fill="#c6f4fe" transform="rotate(-8 305 421)" filter="url(#hf-glow)" />
    </svg>
  );
}
