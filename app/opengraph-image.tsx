import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "T-Vintage GINZA | Pre-Owned Luxury Brand Bags in Ginza, Tokyo";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #1a1a18 0%, #252018 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "serif",
          position: "relative",
        }}
      >
        {/* Corner brackets */}
        <div style={{ position: "absolute", top: 32, left: 32, width: 56, height: 56, borderTop: "2px solid #B8972A", borderLeft: "2px solid #B8972A" }} />
        <div style={{ position: "absolute", top: 32, right: 32, width: 56, height: 56, borderTop: "2px solid #B8972A", borderRight: "2px solid #B8972A" }} />
        <div style={{ position: "absolute", bottom: 32, left: 32, width: 56, height: 56, borderBottom: "2px solid #B8972A", borderLeft: "2px solid #B8972A" }} />
        <div style={{ position: "absolute", bottom: 32, right: 32, width: 56, height: 56, borderBottom: "2px solid #B8972A", borderRight: "2px solid #B8972A" }} />

        {/* Top rule */}
        <div style={{ width: 72, height: 1, background: "#B8972A", marginBottom: 36, display: "flex" }} />

        {/* Brand */}
        <div style={{ color: "#B8972A", fontSize: 78, letterSpacing: "0.25em", fontWeight: 300, display: "flex", marginBottom: 4 }}>
          T-Vintage
        </div>
        <div style={{ color: "#B8972A", fontSize: 26, letterSpacing: "0.9em", marginBottom: 44, display: "flex" }}>
          GINZA
        </div>

        {/* Tagline */}
        <div style={{ color: "#E8E0D4", fontSize: 20, letterSpacing: "0.18em", marginBottom: 10, display: "flex" }}>
          PRE-OWNED LUXURY BRAND BAGS
        </div>
        <div style={{ color: "#9A8C7A", fontSize: 15, letterSpacing: "0.12em", marginBottom: 44, display: "flex" }}>
          GINZA, TOKYO · ENTRUPY CERTIFIED · FULL REFUND GUARANTEE
        </div>

        {/* Brand names */}
        <div style={{ color: "#6A5C4C", fontSize: 13, letterSpacing: "0.22em", display: "flex" }}>
          CHANEL · HERMES · LOUIS VUITTON · GUCCI · PRADA · DIOR · GOYARD
        </div>

        {/* Bottom rule */}
        <div style={{ width: 72, height: 1, background: "#B8972A", marginTop: 36, display: "flex" }} />

        {/* URL */}
        <div style={{ color: "#6A5C4C", fontSize: 14, letterSpacing: "0.12em", marginTop: 20, display: "flex" }}>
          t-family.tokyo
        </div>
      </div>
    ),
    { ...size }
  );
}
