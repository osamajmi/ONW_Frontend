import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "80px", background: "#0b0b0f", color: "white" }}>
        <div style={{ fontSize: 28, marginBottom: 24 }}>ON Next Web</div>
        <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.1 }}>Software Development Outsourcing in India</div>
        <div style={{ fontSize: 30, marginTop: 28, opacity: 0.8 }}>Practical 2026 Guide</div>
      </div>
    ),
    size
  );
}
