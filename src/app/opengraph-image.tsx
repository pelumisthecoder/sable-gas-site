import { ImageResponse } from "next/og";
import { SITE } from "@/lib/constants";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "72px",
          background: "linear-gradient(135deg, #FCFCFA 0%, #F8FAFC 55%, #FFF7ED 100%)",
          color: "#111827",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(circle at 30% 35%, rgba(180,83,9,0.18), transparent 55%)",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: "14px", zIndex: 1 }}>
          <div
            style={{
              width: "56px",
              height: "56px",
              borderRadius: "18px",
              background: "#FFFFFF",
              border: "1px solid #E2E8F0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 12px 28px rgba(2,6,23,0.08)",
            }}
          >
            <div
              style={{
                width: "16px",
                height: "16px",
                borderRadius: "999px",
                background: "#B45309",
              }}
            />
          </div>

          <div style={{ fontSize: "28px", fontWeight: 700, letterSpacing: "-0.03em" }}>
            {SITE.brandName}
          </div>
        </div>

        <div style={{ height: "18px" }} />

        <div style={{ fontSize: "56px", fontWeight: 700, letterSpacing: "-0.04em", zIndex: 1 }}>
          LPG delivery & refills,
          <br />
          handled with care.
        </div>

        <div style={{ height: "18px" }} />

        <div style={{ fontSize: "24px", color: "#475569", zIndex: 1 }}>
          Magboro · Maryland (Lagos) · Ikeja — within 15km · 9am–7pm Mon–Sat
        </div>
      </div>
    ),
    { ...size }
  );
}
