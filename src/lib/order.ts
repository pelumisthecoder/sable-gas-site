import { SITE } from "./constants";

export type HubName = (typeof SITE.hubs)[number]["name"];

export type OrderInput = {
  fullName: string;
  phone: string;
  address: string;
  landmark: string;
  hub: HubName | "";
  cylinderSize: string;
  quantity: number;
  preferredDate?: string;
  preferredTimeWindow?: string;
  notes?: string;
};

export function buildOrderMessage(data: OrderInput) {
  const lines: string[] = [];
  lines.push(`Hello ${SITE.brandName}, I’d like to order/refill LPG.`);
  lines.push("");
  lines.push(`Name: ${data.fullName}`);
  lines.push(`Phone: ${data.phone}`);
  lines.push(`Delivery address: ${data.address}`);
  lines.push(`Nearest landmark: ${data.landmark}`);
  lines.push(`Hub: ${data.hub} (within ${SITE.coverageKm}km)`);
  lines.push(`Cylinder size: ${data.cylinderSize}`);
  lines.push(`Quantity: ${data.quantity}`);
  if (data.preferredDate) lines.push(`Preferred date: ${data.preferredDate}`);
  if (data.preferredTimeWindow) lines.push(`Preferred time: ${data.preferredTimeWindow}`);
  if (data.notes) lines.push(`Notes: ${data.notes}`);
  lines.push("");
  lines.push("Please confirm availability and ETA. Thank you.");
  return lines.join("\n");
}

export function buildWhatsAppLink(message: string) {
  const encoded = encodeURIComponent(message);
  return `${SITE.whatsappWaMe}?text=${encoded}`;
}

export function buildQuickWhatsAppLink(hub?: string) {
  const hubLine = hub ? `\nPreferred hub: ${hub}` : "";
  const msg = `Hello ${SITE.brandName}, I’d like to order/refill LPG.${hubLine}\n\nPlease share next steps and ETA.`;
  return buildWhatsAppLink(msg);
}

export function validateOrder(data: OrderInput) {
  const errors: Partial<Record<keyof OrderInput, string>> = {};
  if (!data.fullName.trim()) errors.fullName = "Please enter your full name.";
  if (!data.phone.trim()) errors.phone = "Please enter a phone number.";
  if (!data.address.trim()) errors.address = "Please enter a delivery address.";
  if (!data.landmark.trim()) errors.landmark = "Please add a nearby landmark (helps drivers).";
  if (!data.hub) errors.hub = "Please select a hub (Magboro / Maryland / Ikeja).";
  if (!data.cylinderSize.trim()) errors.cylinderSize = "Please enter a cylinder size.";
  if (!data.quantity || data.quantity < 1) errors.quantity = "Quantity must be at least 1.";
  return errors;
}
