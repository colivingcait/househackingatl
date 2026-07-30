/**
 * The brand's visual signature: a simple open-doorway shape. Per the brand
 * brief, use once per page — not as a repeating pattern.
 */
export default function DoorMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 80"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M8 78V22C8 12.6 15.6 5 25 5h14c9.4 0 17 7.6 17 17v56"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <circle cx="40" cy="44" r="2.5" fill="currentColor" />
    </svg>
  );
}
