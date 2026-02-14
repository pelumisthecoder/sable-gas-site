import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { ButtonLink, Card, SectionTitle } from "@/components/ui";
import { SITE } from "@/lib/constants";
import { buildQuickWhatsAppLink } from "@/lib/order";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Sable Gas & Energy via WhatsApp or phone. Delivery window 9am–7pm, Mon–Sat.",
};

export default function ContactPage() {
  return (
    <Container className="py-12 md:py-16">
      <SectionTitle
        eyebrow="Contact"
        title="Reach us quickly."
        description="WhatsApp is best for fastest ordering and easy location sharing. Phone is best for clarity."
      />

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <Card>
          <div className="text-sm font-semibold">WhatsApp</div>
          <p className="mt-2 text-sm text-muted">
            Send your address + landmark + cylinder size. We’ll confirm availability and ETA.
          </p>
          <div className="mt-4">
            <ButtonLink href={buildQuickWhatsAppLink()} external>
              Message on WhatsApp
            </ButtonLink>
          </div>
          <p className="mt-3 text-xs text-muted">WhatsApp: {SITE.whatsappE164}</p>
        </Card>

        <Card>
          <div className="text-sm font-semibold">Phone</div>
          <p className="mt-2 text-sm text-muted">
            Call during delivery hours for questions or urgent coordination.
          </p>
          <div className="mt-4">
            <ButtonLink href={SITE.phoneTel} variant="outline">
              Call {SITE.phoneDisplay}
            </ButtonLink>
          </div>
          <p className="mt-3 text-xs text-muted">Delivery: {SITE.deliveryHours}</p>
        </Card>
      </div>

      <div className="mt-4">
        <Card>
          <div className="text-sm font-semibold">Service hubs</div>
          <p className="mt-2 text-sm text-muted">
            Magboro, Maryland (Lagos), Ikeja — within {SITE.coverageKm}km of each hub center.
            If you’re unsure, send your address on WhatsApp and we’ll confirm.
          </p>
        </Card>
      </div>
    </Container>
  );
}
