import { cx } from "@/lib/utils";

export function Container({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={cx("mx-auto w-full max-w-[1120px] px-5 md:px-8", className)}>
      {children}
    </div>
  );
}
