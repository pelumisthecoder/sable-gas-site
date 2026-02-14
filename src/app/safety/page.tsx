import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { ButtonLink, Card, SectionTitle } from "@/components/ui";
import { SITE } from "@/lib/constants";
import { buildQuickWhatsAppLink } from "@/lib/order";

export const metadata: Metadata = {
  title: "Safety",
  description: "Simple, calm LPG safety guidance and what to do in an emergency.",
};

export default function SafetyPage() {
  return (
    <Container className="py-12 md:py-16">
      <SectionTitle
        eyebrow="Safety"
        title="Calm, practical LPG safety guidance."
        description="If you smell gas, stay calm and follow these steps. If it’s an emergency, contact local emergency services."
      />

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <Card>
          <div className="text-sm font-semibold">If you smell gas</div>
          <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-muted">
            <li>Ventilate immediately: open doors and windows.</li>
            <li>Do not light flames. Do not smoke.</li>
            <li>Do not switch appliances on/off (avoid sparks).</li>
            <li>If the smell is strong, move outside to fresh air.</li>
            <li>Contact support and follow instructions.</li>
          </ol>
        </Card>

        <Card>
          <div className="text-sm font-semibold">What NOT to do</div>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted">
            <li>Do not use matches, candles, or any open flame.</li>
            <li>Do not flip light switches or plug/unplug devices.</li>
            <li>Do not try to “test” for leaks with fire.</li>
            <li>Do not stay indoors if the smell is overwhelming.</li>
          </ul>
        </Card>
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <Card>
          <div className="text-sm font-semibold">Good daily safety habits</div>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-muted">
            <li>Keep cylinders upright and in a ventilated area.</li>
            <li>Check hoses/regulators for wear; replace if damaged.</li>
            <li>Keep children away from the cylinder area.</li>
            <li>Turn off the cylinder valve when not in use.</li>
          </ul>
          <p className="mt-4 text-xs text-muted">
            Disclaimer: This page provides general guidance. For emergencies, contact local emergency services.
          </p>
        </Card>

        <Card>
          <div className="text-sm font-semibold">Need help quickly?</div>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Send your location and a short description on WhatsApp, or call during delivery hours.
          </p>
          <div className="mt-4 flex flex-col gap-2 sm:flex-row">
            <ButtonLink href={buildQuickWhatsAppLink()} external>
              WhatsApp
            </ButtonLink>
            <ButtonLink href={SITE.phoneTel} variant="outline">
              Call {SITE.phoneDisplay}
            </ButtonLink>
          </div>
          <div className="mt-4 text-xs text-muted">Delivery: {SITE.deliveryHours}</div>
        </Card>
      </div>
    </Container>
  );
}
