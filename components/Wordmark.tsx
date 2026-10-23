/** Typographic lockup of the brand's tent/shirt wordmark. Swap for the client's
 *  robot-head mark once the original artwork file is supplied. */
export default function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex flex-col whitespace-nowrap font-display leading-none ${className}`}>
      <span className="text-[17px] font-bold tracking-[0.04em] text-cyan">ROBOTIC ADVENTURES</span>
      <span className="mt-1 text-[10px] font-semibold tracking-[0.32em] text-muted">SIMULATED THRILLS</span>
    </span>
  );
}
