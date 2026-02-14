"use client";

import { useMemo, useState } from "react";
import { SITE } from "@/lib/constants";
import type { OrderInput } from "@/lib/order";
import { buildOrderMessage, buildWhatsAppLink, validateOrder } from "@/lib/order";
import { Card, ButtonLink } from "@/components/ui";

type Stage = "form" | "confirm";

const initial: OrderInput = {
  fullName: "",
  phone: "",
  address: "",
  landmark: "",
  hub: "",
  cylinderSize: "",
  quantity: 1,
  preferredDate: "",
  preferredTimeWindow: SITE.timeWindows[0],
  notes: "",
};

export function OrderForm() {
  const [data, setData] = useState<OrderInput>(initial);
  const [errors, setErrors] = useState<Partial<Record<keyof OrderInput, string>>>({});
  const [stage, setStage] = useState<Stage>("form");

  const message = useMemo(() => buildOrderMessage(data), [data]);
  const whatsappLink = useMemo(() => buildWhatsAppLink(message), [message]);

  function update<K extends keyof OrderInput>(key: K, value: OrderInput[K]) {
    setData((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  }

  function submit() {
    const e = validateOrder(data);
    setErrors(e);
    if (Object.keys(e).length === 0) setStage("confirm");
  }

  function resetToEdit() {
    setStage("form");
  }

  function copyMessage() {
    navigator.clipboard.writeText(message).catch(() => {});
  }

  return (
    <div className="grid gap-4">
      {stage === "form" ? (
        <Card>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <label className="text-sm font-medium" htmlFor="fullName">
                Full name
              </label>
              <input
                id="fullName"
                className="h-11 rounded-xl border border-border bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-ring/60"
                value={data.fullName}
                onChange={(e) => update("fullName", e.target.value)}
                autoComplete="name"
              />
              {errors.fullName ? <p className="text-xs text-red-600">{errors.fullName}</p> : null}
            </div>

            <div className="grid gap-2">
              <label className="text-sm font-medium" htmlFor="phone">
                Phone number
              </label>
              <input
                id="phone"
                className="h-11 rounded-xl border border-border bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-ring/60"
                value={data.phone}
                onChange={(e) => update("phone", e.target.value)}
                inputMode="tel"
                autoComplete="tel"
                placeholder="+234..."
              />
              {errors.phone ? <p className="text-xs text-red-600">{errors.phone}</p> : null}
            </div>

            <div className="grid gap-2">
              <label className="text-sm font-medium" htmlFor="address">
                Delivery address
              </label>
              <input
                id="address"
                className="h-11 rounded-xl border border-border bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-ring/60"
                value={data.address}
                onChange={(e) => update("address", e.target.value)}
                autoComplete="street-address"
              />
              {errors.address ? <p className="text-xs text-red-600">{errors.address}</p> : null}
            </div>

            <div className="grid gap-2">
              <label className="text-sm font-medium" htmlFor="landmark">
                Nearest landmark
              </label>
              <input
                id="landmark"
                className="h-11 rounded-xl border border-border bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-ring/60"
                value={data.landmark}
                onChange={(e) => update("landmark", e.target.value)}
                placeholder="e.g., by the filling station / school / junction"
              />
              {errors.landmark ? <p className="text-xs text-red-600">{errors.landmark}</p> : null}
            </div>

            <div className="grid gap-2">
              <label className="text-sm font-medium" htmlFor="hub">
                City hub
              </label>
              <select
                id="hub"
                className="h-11 rounded-xl border border-border bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-ring/60"
                value={data.hub}
                onChange={(e) => update("hub", e.target.value as OrderInput["hub"])}
              >
                <option value="">Select…</option>
                {SITE.hubs.map((h) => (
                  <option key={h.name} value={h.name}>
                    {h.label}
                  </option>
                ))}
              </select>
              <p className="text-xs text-muted">
                Coverage: within {SITE.coverageKm}km of selected hub center. If unsure, send your address on WhatsApp.
              </p>
              {errors.hub ? <p className="text-xs text-red-600">{errors.hub}</p> : null}
            </div>

            <div className="grid gap-2">
              <label className="text-sm font-medium" htmlFor="cylinderSize">
                Cylinder size
              </label>
              <input
                id="cylinderSize"
                className="h-11 rounded-xl border border-border bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-ring/60"
                value={data.cylinderSize}
                onChange={(e) => update("cylinderSize", e.target.value)}
                placeholder="e.g., 12.5kg"
              />
              <div className="flex flex-wrap gap-2">
                {SITE.cylinderSuggestions.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => update("cylinderSize", s === "Other" ? "" : s)}
                    className="rounded-full border border-border bg-white px-3 py-1 text-xs text-fg hover:bg-white/70"
                  >
                    {s}
                  </button>
                ))}
              </div>
              {errors.cylinderSize ? <p className="text-xs text-red-600">{errors.cylinderSize}</p> : null}
            </div>

            <div className="grid gap-2">
              <label className="text-sm font-medium" htmlFor="quantity">
                Quantity
              </label>
              <input
                id="quantity"
                type="number"
                min={1}
                className="h-11 rounded-xl border border-border bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-ring/60"
                value={data.quantity}
                onChange={(e) => update("quantity", Number(e.target.value))}
              />
              {errors.quantity ? <p className="text-xs text-red-600">{errors.quantity}</p> : null}
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="grid gap-2">
                <label className="text-sm font-medium" htmlFor="preferredDate">
                  Preferred delivery date (optional)
                </label>
                <input
                  id="preferredDate"
                  type="date"
                  className="h-11 rounded-xl border border-border bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-ring/60"
                  value={data.preferredDate || ""}
                  onChange={(e) => update("preferredDate", e.target.value)}
                />
              </div>

              <div className="grid gap-2">
                <label className="text-sm font-medium" htmlFor="preferredTimeWindow">
                  Preferred time window
                </label>
                <select
                  id="preferredTimeWindow"
                  className="h-11 rounded-xl border border-border bg-white px-3 text-sm outline-none focus:ring-2 focus:ring-ring/60"
                  value={data.preferredTimeWindow || SITE.timeWindows[0]}
                  onChange={(e) => update("preferredTimeWindow", e.target.value)}
                >
                  {SITE.timeWindows.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
                <p className="text-xs text-muted">Delivery window: {SITE.deliveryHours}.</p>
              </div>
            </div>

            <div className="grid gap-2">
              <label className="text-sm font-medium" htmlFor="notes">
                Notes (optional)
              </label>
              <textarea
                id="notes"
                className="min-h-[96px] rounded-xl border border-border bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring/60"
                value={data.notes || ""}
                onChange={(e) => update("notes", e.target.value)}
                placeholder="Anything we should know? Gate access, special directions, etc."
              />
            </div>

            <div className="flex flex-col gap-2 sm:flex-row">
              <button
                type="button"
                onClick={submit}
                className="inline-flex items-center justify-center rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-soft transition active:scale-[0.99]"
              >
                Review & Send
              </button>

              <ButtonLink href={SITE.phoneTel} variant="outline" className="px-5 py-3">
                Call now
              </ButtonLink>
            </div>

            <p className="text-xs text-muted">
              This form does not submit to a server. It generates a WhatsApp message you can send in one tap.
            </p>
          </div>
        </Card>
      ) : (
        <Card>
          <div className="grid gap-4">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">Confirmation</div>
              <h2 className="mt-2 text-balance text-2xl font-semibold tracking-[-0.03em]">
                Ready to send your order.
              </h2>
              <p className="mt-2 text-sm text-muted">
                Tap “Send on WhatsApp” to message us with your order summary. If WhatsApp fails, use Call now.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-white p-4">
              <pre className="whitespace-pre-wrap text-sm leading-relaxed text-fg">{message}</pre>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-soft transition active:scale-[0.99]"
              >
                Send on WhatsApp
              </a>

              <button
                type="button"
                onClick={copyMessage}
                className="inline-flex items-center justify-center rounded-xl border border-border bg-white px-5 py-3 text-sm font-semibold text-fg shadow-sm transition active:scale-[0.99]"
              >
                Copy message
              </button>

              <a
                href={SITE.phoneTel}
                className="inline-flex items-center justify-center rounded-xl border border-border bg-white px-5 py-3 text-sm font-semibold text-fg shadow-sm transition active:scale-[0.99]"
              >
                Call now
              </a>

              <button
                type="button"
                onClick={resetToEdit}
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-muted hover:bg-white/70"
              >
                Edit
              </button>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}
