import type { Metadata } from "next";
import { Container } from "@/components/Container";
import { SectionTitle } from "@/components/ui";
import { Accordion } from "@/components/Accordion";
import { FAQS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "FAQs",
  description: "Answers to common questions about ordering LPG delivery and refills.",
};

export default function FAQPage() {
  return (
    <Container className="py-12 md:py-16">
      <SectionTitle
        eyebrow="FAQs"
        title="Clear answers, in plain language."
        description="If you’re unsure about coverage, cylinder size, or what to do next—start here."
      />

      <div className="mt-8">
        <Accordion items={FAQS.map((f) => ({ q: f.q, a: f.a }))} />
      </div>
    </Container>
  );
}
