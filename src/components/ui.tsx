import Link from "next/link";
import { cx } from "@/lib/utils";

export function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-white px-3 py-1 text-xs text-fg">
      {children}
    </span>
  );
}

export function Card({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cx("rounded-2xl border border-border bg-card p-5 shadow-soft", className)}>
      {children}
    </div>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={cx(align === "center" ? "text-center" : "text-left")}>
      {eyebrow ? (
        <div className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
          {eyebrow}
        </div>
      ) : null}
      <h2 className="mt-2 text-balance text-2xl font-semibold tracking-[-0.03em] md:text-3xl">
        {title}
      </h2>
      {description ? (
        <p
          className={cx(
            "mt-3 text-pretty text-sm leading-relaxed text-muted md:text-base",
            align === "center" ? "mx-auto max-w-[70ch]" : "max-w-[70ch]"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function ButtonLink({
  href,
  children,
  variant = "solid",
  className,
  external,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline" | "ghost";
  className?: string;
  external?: boolean;
}) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-4 py-2 text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 focus-visible:ring-offset-2 focus-visible:ring-offset-bg";
  const styles =
    variant === "solid"
      ? "bg-accent text-accent-foreground shadow-sm hover:shadow-soft"
      : variant === "outline"
        ? "border border-border bg-white text-fg hover:bg-white/70"
        : "text-fg hover:bg-white/70";
  const Comp = external ? "a" : Link;

  // @ts-ignore - allow <a> and <Link> shared props

  return (
    <Comp
      href={href}
      className={cx(base, styles, className)}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      {children}
    </Comp>
  );
}
