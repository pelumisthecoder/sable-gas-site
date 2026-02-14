import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { ButtonLink, Card, SectionTitle } from "@/components/ui";
import { SITE } from "@/lib/constants";
import { buildQuickWhatsAppLink } from "@/lib/order";

export const metadata: Metadata = {
  title: "Service Area",
  description: "Magboro, Maryland (Lagos), Ikeja — and nearby locations within 15km.",
};

export default function ServiceAreaPage() {
  return (
    <Container className="py-12 md:py-16">
      <SectionTitle
        eyebrow="Service area"
        title="Magboro, Maryland (Lagos), Ikeja — within 15km of each hub center."
        description="We cover nearby neighborhoods within 15km of these hubs. If you’re unsure, send your address on WhatsApp and we’ll confirm quickly."
      />

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {SITE.hubs.map((hub) => (
          <Card key={hub.name}>
            <div className="text-sm font-semibold">{hub.label}</div>
            <p className="mt-2 text-sm text-muted">
              Coverage rule: within {SITE.coverageKm}km of {hub.label} center.
            </p>
            <div className="mt-4">
              <ButtonLink href={buildQuickWhatsAppLink(hub.label)} external>
                Confirm & order via WhatsApp
              </ButtonLink>
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <Card>
          <div className="text-sm font-semibold">Quick coverage check</div>
          <p className="mt-2 text-sm leading-relaxed text-muted">
            If you’re not sure whether you fall within {SITE.coverageKm}km, send:
            <br />• your full address <br />• a nearby landmark <br />• your preferred hub
          </p>
          <div className="mt-4 flex flex-col gap-2 sm:flex-row">
            <ButtonLink href={buildQuickWhatsAppLink()} external>
              Send address on WhatsApp
            </ButtonLink>
            <ButtonLink href={SITE.phoneTel} variant="outline">
              Call
            </ButtonLink>
          </div>
        </Card>

        <Card>
          <div className="text-sm font-semibold">Map (OpenStreetMap)</div>
          <p className="mt-2 text-sm text-muted">
            Use the map to explore the general area, then send your address for confirmation.
          </p>
          <div className="mt-4 overflow-hidden rounded-2xl border border-border">
            <iframe
              title="Service area map"
              className="h-[320px] w-full"
              src="https://www.openstreetmap.org/export/embed.html?bbox=3.150%2C6.350%2C3.650%2C6.750&layer=mapnik"
              loading="lazy"
            />
          </div>
          <p className="mt-3 text-xs text-muted">
            Note: This map is for general guidance. Exact coverage is confirmed via WhatsApp.
          </p>
        </Card>
      </div>
    </Container>
  );
}
