import Link from "next/link";

export type Crumb = { label: string; href?: string };

export default function Breadcrumb({
  items,
  variant = "light",
}: {
  items: Crumb[];
  variant?: "light" | "dark";
}) {
  const mutedClass = variant === "dark" ? "text-sage-300" : "text-pine-500";
  const linkClass = variant === "dark" ? "hover:text-clay-300" : "hover:text-clay-600";
  const currentClass = variant === "dark" ? "text-sage-100" : "text-pine-800";

  return (
    <nav aria-label="Breadcrumb" className={`flex flex-wrap items-center gap-1.5 text-sm ${mutedClass}`}>
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-1.5">
          {i > 0 && <span aria-hidden="true">›</span>}
          {item.href ? (
            <Link href={item.href} className={linkClass}>
              {item.label}
            </Link>
          ) : (
            <span className={`font-medium ${currentClass}`}>{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
