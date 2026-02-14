import Link from "next/link";
import { SITE } from "@/lib/constants";
import { Container } from "./Container";
import { ButtonLink } from "./ui";
import { buildQuickWhatsAppLink } from "@/lib/order";

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg">
      <Container className="py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="text-sm font-semibold">{SITE.brandName}</div>
            <p className="mt-3 text-sm leading-relaxed text-muted">
              LPG delivery & refills, handled with care. Serving Magboro, Maryland (Lagos) & Ikeja —
              within {SITE.coverageKm}km.
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold">Contact</div>
            <div className="mt-3 space-y-2 text-sm text-muted">
              <div>
                WhatsApp:{" "}
                <a className="text-fg underline decoration-border hover:decoration-fg" href={SITE.whatsappWaMe}>
                  {SITE.whatsappE164}
                </a>
              </div>
              <div>
                Phone:{" "}
                <a className="text-fg underline decoration-border hover:decoration-fg" href={SITE.phoneTel}>
                  {SITE.phoneDisplay}
                </a>
              </div>
              <div>Delivery: {SITE.deliveryHours}</div>
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold">Quick actions</div>
            <div className="mt-3 flex flex-col gap-2">
              <ButtonLink href={buildQuickWhatsAppLink()} external>
                Order on WhatsApp
              </ButtonLink>
              <ButtonLink href={SITE.phoneTel} variant="outline">
                Call now
              </ButtonLink>
              <div className="mt-3 flex items-center gap-4 text-xs text-muted">
                <Link className="hover:text-fg" href="/privacy">
                  Privacy
                </Link>
                <Link className="hover:text-fg" href="/terms">
                  Terms
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-xs text-muted">
          © {new Date().getFullYear()} {SITE.brandName}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
