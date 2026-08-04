import DoorMark from "./DoorMark";

/**
 * Stand-in for real photography that hasn't arrived yet. Shaped and
 * styled like an actual photo tile (gradient, watermark, hover motion via
 * the `group` the parent should apply) rather than a dashed "missing
 * image" box, so the layout already looks like a photo gallery and real
 * photos can drop straight in later.
 */
export default function PhotoPlaceholder({
  className = "",
  label,
}: {
  className?: string;
  label?: string;
}) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-pine-100 via-pine-50 to-clay-100 transition-transform duration-500 group-hover:scale-[1.03] ${className}`}
    >
      <DoorMark className="h-16 w-12 text-pine-300/70" />
      {label && (
        <span className="absolute bottom-3 left-3 rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-pine-700 backdrop-blur">
          {label}
        </span>
      )}
    </div>
  );
}
