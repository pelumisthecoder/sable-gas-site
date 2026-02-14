import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { TrustBand } from "@/components/TrustBand";
import { ServiceCards } from "@/components/ServiceCards";
import { ButtonLink, Card, SectionTitle } from "@/components/ui";
import { SITE } from "@/lib/constants";
import { buildQuickWhatsAppLink } from "@/lib/order";
import { PhoneCall, MessageCircle, ClipboardList } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: SITE.description,
};

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 left-1/2 h-[520px] w-[920px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(180,83,9,0.16),transparent_60%)]" />
          <div className="absolute -top-6 left-1/2 h-[520px] w-[920px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(2,6,23,0.06),transparent_60%)]" />
        </div>

        <Container className="relative py-16 md:py-20">
          <Reveal>
            <div className="max-w-[820px]">
              <h1 className="text-balance text-4xl font-semibold tracking-[-0.04em] md:text-5xl">
                LPG delivery & refills, handled with care.
              </h1>
              <p className="mt-5 text-pretty text-base leading-relaxed text-muted md:text-lg">
                Order in seconds via WhatsApp, phone, or our quick form. Serving{" "}
                <span className="text-fg">Magboro</span>,{" "}
                <span className="text-fg">Maryland (Lagos)</span> &{" "}
                <span className="text-fg">Ikeja</span> — within {SITE.coverageKm}km.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <ButtonLink href="/order" className="px-5 py-3 text-base">
                  Order Gas
                </ButtonLink>
                <ButtonLink href={SITE.phoneTel} variant="outline" className="px-5 py-3 text-base">
                  Call now
                </ButtonLink>
                <ButtonLink href={buildQuickWhatsAppLink()} external variant="ghost" className="px-5 py-3 text-base">
                  WhatsApp
                </ButtonLink>
              </div>

              <div className="mt-5 text-sm text-muted">
                Delivery: <span className="text-fg">{SITE.deliveryHours}</span>
              </div>
            </div>
          </Reveal>

          <div className="mt-10">
            <Reveal delay={0.06}>
              <TrustBand />
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="border-t border-border">
        <Container className="py-14 md:py-16">
          <Reveal>
            <SectionTitle
              eyebrow="Ordering"
              title="Three ways to order — choose what’s fastest for you."
              description="WhatsApp for speed, call for clarity, or use the quick form to generate a clean WhatsApp summary in one tap."
            />
          </Reveal>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <Reveal delay={0.02}>
              <Card>
                <div className="flex items-center gap-3">
                  <MessageCircle className="h-5 w-5" aria-hidden />
                  <div className="text-sm font-semibold">WhatsApp Order</div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Best for fastest confirmation and easy location sharing.
                </p>
                <div className="mt-4">
                  <ButtonLink href={buildQuickWhatsAppLink()} external>
                    Order on WhatsApp
                  </ButtonLink>
                </div>
              </Card>
            </Reveal>

            <Reveal delay={0.04}>
              <Card>
                <div className="flex items-center gap-3">
                  <PhoneCall className="h-5 w-5" aria-hidden />
                  <div className="text-sm font-semibold">Call Now</div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Prefer to speak to someone? Call during delivery hours.
                </p>
                <div className="mt-4">
                  <ButtonLink href={SITE.phoneTel} variant="outline">
                    Call {SITE.phoneDisplay}
                  </ButtonLink>
                </div>
              </Card>
            </Reveal>

            <Reveal delay={0.06}>
              <Card>
                <div className="flex items-center gap-3">
                  <ClipboardList className="h-5 w-5" aria-hidden />
                  <div className="text-sm font-semibold">Quick Form</div>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Fill once, get a formatted WhatsApp message you can send in one tap.
                </p>
                <div className="mt-4">
                  <ButtonLink href="/order">Use the form</ButtonLink>
                </div>
              </Card>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="border-t border-border">
        <Container className="py-14 md:py-16">
          <Reveal>
            <SectionTitle
              eyebrow="Service area"
              title="Magboro, Maryland (Lagos), Ikeja — plus nearby within 15km."
              description="If you’re unsure, send your address on WhatsApp and we’ll confirm coverage quickly."
            />
          </Reveal>

          <div className="mt-8">
            <Reveal delay={0.04}>
              <ServiceCards />
            </Reveal>
          </div>

          <div className="mt-8">
            <ButtonLink href="/service-area" variant="outline">
              See full service area details
            </ButtonLink>
          </div>
        </Container>
      </section>

      <section className="border-t border-border">
        <Container className="py-14 md:py-16">
          <Reveal>
            <SectionTitle
              eyebrow="Safety"
              title="Safety guidance that’s calm, clear, and practical."
              description="Know what to do if you smell gas — and what not to do. Keep your home and business safe."
            />
          </Reveal>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <Reveal delay={0.03}>
              <Card>
                <div className="text-sm font-semibold">If you smell gas</div>
                <ol className="mt-3 list-decimal space-y-2 pl-5 text-sm text-muted">
                  <li>Ventilate: open doors and windows.</li>
                  <li>Avoid flames and smoking.</li>
                  <li>Do not switch appliances on/off.</li>
                  <li>Move outside if the smell is strong.</li>
                </ol>
                <div className="mt-4">
                  <ButtonLink href="/safety">Read full safety steps</ButtonLink>
                </div>
              </Card>
            </Reveal>

            <Reveal delay={0.06}>
              <Card>
                <div className="text-sm font-semibold">Need help quickly?</div>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  Send a message with your location and a short description. For emergencies, contact local emergency services.
                </p>
                <div className="mt-4 flex gap-2">
                  <ButtonLink href={buildQuickWhatsAppLink()} external>
                    WhatsApp
                  </ButtonLink>
                  <ButtonLink href={SITE.phoneTel} variant="outline">
                    Call
                  </ButtonLink>
                </div>
              </Card>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
