/**
 * Large decorative doorway used as a hero/section background element —
 * an open door with warm light spilling through it. Purely CSS/SVG so it
 * doesn't depend on photography that isn't available yet.
 */
export default function DoorGraphic({ className = "" }: { className?: string }) {
  // An arched doorway silhouette: straight sides, rounded top — reads
  // clearly as a door rather than an abstract blob.
  const doorPath = "M50 460V210 A130 130 0 0 1 310 210 V460 Z";

  return (
    <svg
      viewBox="0 0 360 460"
      fill="none"
      className={className}
      aria-hidden="true"
      preserveAspectRatio="xMidYMin meet"
    >
      <defs>
        <linearGradient id="doorGlow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e67f52" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#c14a20" stopOpacity="0.15" />
        </linearGradient>
        <linearGradient id="doorFrame" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#efab87" />
          <stop offset="100%" stopColor="#c14a20" />
        </linearGradient>
      </defs>
      <path d={doorPath} fill="url(#doorGlow)" />
      <path d={doorPath} stroke="url(#doorFrame)" strokeWidth="5" />
      <circle cx="270" cy="345" r="5" fill="#e67f52" />
    </svg>
  );
}
