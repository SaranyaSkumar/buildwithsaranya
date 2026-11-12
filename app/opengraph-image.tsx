import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Saranya Sasi Kumar — Software Engineer & Applied AI";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ display: "flex", position: "relative", width: "100%", height: "100%", background: "#FAF9F5", color: "#292F2A", fontFamily: "Georgia, serif", padding: 88, alignItems: "center" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 30, width: 860 }}>
        <div style={{ fontFamily: "Arial, sans-serif", fontSize: 23, letterSpacing: 4, color: "#829884" }}>SOFTWARE ENGINEER · AUCKLAND, NZ</div>
        <div style={{ fontSize: 88, lineHeight: 1.03, letterSpacing: -3 }}>Saranya Sasi Kumar</div>
        <div style={{ fontFamily: "Arial, sans-serif", color: "#69736D", fontSize: 30, lineHeight: 1.4 }}>8+ years building software. Exploring what thoughtful engineering can do with AI.</div>
        <div style={{ fontFamily: "Arial, sans-serif", fontSize: 21, color: "#829884" }}>saranyasasikumar.com</div>
      </div>
      <div style={{ display: "flex", position: "absolute", right: -180, top: -80, width: 470, height: 470, borderRadius: 250, border: "55px solid #E6EEE4" }} />
      <div style={{ display: "flex", position: "absolute", right: 115, bottom: 80, width: 80, height: 80, borderRadius: 40, background: "#E8AD94" }} />
    </div>,
    size
  );
}
