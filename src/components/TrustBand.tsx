import { Card } from "./ui";
import { Shield, Clock, MapPin } from "lucide-react";

const items = [
  {
    icon: Shield,
    title: "Safety-first handling",
    desc: "Careful delivery, clear guidance, and calm communication.",
  },
  {
    icon: Clock,
    title: "Responsive support",
    desc: "Fast confirmation on WhatsApp and clear next steps.",
  },
  {
    icon: MapPin,
    title: "Local coverage",
    desc: "Magboro, Maryland (Lagos), Ikeja — within 15km of each hub.",
  },
] as const;

export function TrustBand() {
  return (
    <div className="grid gap-4 md:grid-cols-3">
      {items.map((it) => {
        const Icon = it.icon;
        return (
          <Card key={it.title} className="p-4">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-border bg-white">
                <Icon className="h-4 w-4" aria-hidden />
              </span>
              <div className="text-sm font-semibold">{it.title}</div>
            </div>
            <p className="mt-3 text-sm leading-relaxed text-muted">{it.desc}</p>
          </Card>
        );
      })}
    </div>
  );
}
