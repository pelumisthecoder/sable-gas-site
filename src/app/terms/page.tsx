import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Card, SectionTitle } from "@/components/ui";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms of service placeholder for Sable Gas & Energy.",
};

export default function TermsPage() {
  return (
    <Container className="py-12 md:py-16">
      <SectionTitle
        eyebrow="Legal"
        title="Terms of service (placeholder)"
        description="This is a simple placeholder. Replace with your final terms before launch."
      />

      <div className="mt-8">
        <Card>
          <div className="prose prose-sm max-w-none text-muted">
            <p>
              {SITE.brandName} provides LPG delivery and refill coordination within advertised service
              areas and delivery hours. Orders are confirmed subject to availability and safe delivery
              access.
            </p>
            <p>
              Pricing, delivery timing, and fulfillment details are confirmed on WhatsApp or phone
              before dispatch.
            </p>
            <p>
              Before launch, replace this placeholder with final terms aligned to your operations.
            </p>
          </div>
        </Card>
      </div>
    </Container>
  );
}
