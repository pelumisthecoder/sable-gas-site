import { SITE } from "@/lib/constants";
import { buildQuickWhatsAppLink } from "@/lib/order";
import { Card, ButtonLink } from "./ui";
import { MapPin } from "lucide-react";

export function ServiceCards() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {SITE.hubs.map((hub) => (
        <Card key={hub.name}>
          <div className="flex items-center gap-3">
            <MapPin className="h-5 w-5" aria-hidden />
            <div>
              <div className="text-sm font-semibold">{hub.label}</div>
              <div className="mt-1 text-xs text-muted">
                Within {SITE.coverageKm}km of hub center
              </div>
            </div>
          </div>

          <p className="mt-3 text-sm leading-relaxed text-muted">
            If you’re unsure, send your address on WhatsApp and we’ll confirm quickly.
          </p>

          <div className="mt-4 flex flex-col gap-2">
            <ButtonLink href={buildQuickWhatsAppLink(hub.label)} external>
              Order for {hub.name}
            </ButtonLink>
            <ButtonLink href="/service-area" variant="outline">
              View details
            </ButtonLink>
          </div>
        </Card>
      ))}
    </div>
  );
}
