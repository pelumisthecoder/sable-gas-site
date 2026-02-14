import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { Card, SectionTitle } from "@/components/ui";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Privacy",
  description: "Privacy policy placeholder for Sable Gas & Energy.",
};

export default function PrivacyPage() {
  return (
    <Container className="py-12 md:py-16">
      <SectionTitle
        eyebrow="Legal"
        title="Privacy policy (placeholder)"
        description="This is a simple placeholder. Replace with your final policy before launch."
      />

      <div className="mt-8">
        <Card>
          <div className="prose prose-sm max-w-none text-muted">
            <p>
              {SITE.brandName} may collect basic information you provide when you contact us or place an order
              (such as name, phone number, address, and order details) to fulfill your request.
            </p>
            <p>
              We do not sell your personal data. We use it only to provide service, confirm delivery, and support you.
            </p>
            <p>
              Before launch, replace this placeholder with a proper privacy policy aligned to your operations.
            </p>
          </div>
        </Card>
      </div>
    </Container>
  );
}
