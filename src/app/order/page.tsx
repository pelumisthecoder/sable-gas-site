import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Card, SectionTitle, ButtonLink } from "@/components/ui";
import { SITE } from "@/lib/constants";
import { buildQuickWhatsAppLink } from "@/lib/order";
import { OrderForm } from "@/components/OrderForm";

export const metadata: Metadata = {
  title: "Order Gas",
  description: "Order LPG in seconds via WhatsApp, phone, or quick form.",
};

export default function OrderPage() {
  return (
    <Container className="py-12 md:py-16">
      <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-start">
        <div className="grid gap-4">
          <SectionTitle
            eyebrow="Order / Refill"
            title="Order gas in 1–2 clicks."
            description="Use the quick form to generate a clean WhatsApp message. Or order instantly via WhatsApp or phone."
          />
          <OrderForm />
        </div>

        <div className="grid gap-4 md:sticky md:top-20">
          <Card>
            <div className="text-sm font-semibold">Fast options</div>
            <p className="mt-2 text-sm text-muted">
              Prefer the fastest route? Use WhatsApp. Prefer to speak? Call during delivery hours.
            </p>

            <div className="mt-4 grid gap-2">
              <ButtonLink href={buildQuickWhatsAppLink()} external>
                Order on WhatsApp
              </ButtonLink>
              <ButtonLink href={SITE.phoneTel} variant="outline">
                Call {SITE.phoneDisplay}
              </ButtonLink>
            </div>

            <div className="mt-5 text-xs text-muted">
              Delivery: <span className="text-fg">{SITE.deliveryHours}</span>
              <br />
              Coverage: within {SITE.coverageKm}km of Magboro, Maryland (Lagos), Ikeja.
            </div>
          </Card>

          <Card>
            <div className="text-sm font-semibold">Need help confirming coverage?</div>
            <p className="mt-2 text-sm text-muted">
              If you’re unsure whether you’re within {SITE.coverageKm}km, send your address on WhatsApp and we’ll confirm.
            </p>
            <div className="mt-4">
              <ButtonLink href="/service-area" variant="outline">
                View service area
              </ButtonLink>
            </div>
          </Card>
        </div>
      </div>
    </Container>
  );
}
