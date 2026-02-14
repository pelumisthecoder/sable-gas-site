import { SITE } from "@/lib/constants";
import { buildQuickWhatsAppLink } from "@/lib/order";

export function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-bg/90 backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-[1120px] items-center gap-3 px-5 py-3">
        <a
          href={buildQuickWhatsAppLink()}
          target="_blank"
          rel="noreferrer"
          className="flex-1 rounded-xl bg-accent px-4 py-3 text-center text-sm font-semibold text-accent-foreground shadow-soft transition active:scale-[0.99]"
        >
          Order on WhatsApp
        </a>
        <a
          href={SITE.phoneTel}
          className="rounded-xl border border-border bg-white px-4 py-3 text-sm font-semibold text-fg shadow-sm transition active:scale-[0.99]"
        >
          Call
        </a>
      </div>
      <div className="h-[env(safe-area-inset-bottom)]" />
    </div>
  );
}
