import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "512px",
          height: "512px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#FCFCFA",
        }}
      >
        <div
          style={{
            width: "360px",
            height: "360px",
            borderRadius: "96px",
            background: "#FFFFFF",
            border: "1px solid #E2E8F0",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 18px 40px rgba(2,6,23,0.10)",
          }}
        >
          <div
            style={{
              width: "92px",
              height: "92px",
              borderRadius: "999px",
              background: "#B45309",
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
