export type Hub = {
  name: "Magboro" | "Maryland" | "Ikeja";
  label: string;
  osmQuery: string;
};

export const SITE = {
  brandName: "Sable Gas & Energy",
  description:
    "Premium LPG delivery & refills, handled with care. Order in seconds via WhatsApp, phone, or quick form. Serving Magboro, Maryland (Lagos) & Ikeja within 15km.",
  // IMPORTANT: Change this after you buy a domain or once Vercel gives you a production URL.
  url: "https://sable-gas-energy.vercel.app",
  whatsappE164: "+2348022238650",
  whatsappWaMe: "https://wa.me/2348022238650",
  phoneDisplay: "+234 802 223 8650",
  phoneTel: "tel:+2348022238650",
  deliveryHours: "9am–7pm, Monday–Saturday",
  coverageKm: 15,
  hubs: [
    { name: "Magboro", label: "Magboro", osmQuery: "Magboro, Ogun, Nigeria" },
    { name: "Maryland", label: "Maryland (Lagos)", osmQuery: "Maryland, Lagos, Nigeria" },
    { name: "Ikeja", label: "Ikeja", osmQuery: "Ikeja, Lagos, Nigeria" },
  ] as const satisfies readonly Hub[],
  nav: [
    { href: "/", label: "Home" },
    { href: "/order", label: "Order" },
    { href: "/service-area", label: "Service Area" },
    { href: "/safety", label: "Safety" },
    { href: "/faq", label: "FAQs" },
    { href: "/contact", label: "Contact" },
  ] as const,
  cylinderSuggestions: ["3kg", "6kg", "12.5kg", "25kg", "50kg", "Other"] as const,
  timeWindows: [
    "Anytime (9am–7pm)",
    "9am–11am",
    "11am–1pm",
    "1pm–3pm",
    "3pm–5pm",
    "5pm–7pm",
  ] as const,
};

export const FAQS = [
  {
    q: "How do I order gas the fastest?",
    a: "Tap “Order on WhatsApp” to send a prefilled message. For a cleaner summary, use the quick form and send the formatted message on WhatsApp in one tap.",
  },
  {
    q: "Which areas do you serve?",
    a: `We serve Magboro, Maryland (Lagos), and Ikeja — plus nearby locations within ${SITE.coverageKm}km of each hub center. If you’re unsure, send your address on WhatsApp and we’ll confirm.`,
  },
  {
    q: "What cylinder sizes do you support?",
    a: "All sizes are supported. If you’re not sure of your size, tell us what’s written on the cylinder or share a photo on WhatsApp.",
  },
  {
    q: "What are your delivery hours?",
    a: `Delivery window is ${SITE.deliveryHours}.`,
  },
  {
    q: "What if I smell gas?",
    a: "Ventilate immediately, avoid flames and electrical switches, and move to a safe area. See the Safety page for clear step-by-step guidance.",
  },
] as const;
