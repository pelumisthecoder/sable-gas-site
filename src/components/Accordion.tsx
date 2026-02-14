"use client";

import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import { cx } from "@/lib/utils";

export function Accordion({
  items,
}: {
  items: Array<{ q: string; a: string }>;
}) {
  const baseId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="grid gap-2">
      {items.map((it, idx) => {
        const isOpen = openIndex === idx;
        const buttonId = `${baseId}-btn-${idx}`;
        const panelId = `${baseId}-panel-${idx}`;

        return (
          <div key={it.q} className="rounded-2xl border border-border bg-card shadow-soft">
            <button
              id={buttonId}
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenIndex(isOpen ? null : idx)}
            >
              <span className="text-sm font-semibold">{it.q}</span>
              <ChevronDown
                className={cx("h-5 w-5 text-muted transition", isOpen && "rotate-180")}
                aria-hidden
              />
            </button>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={cx("px-5 pb-4", !isOpen && "hidden")}
            >
              <p className="text-sm leading-relaxed text-muted">{it.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
