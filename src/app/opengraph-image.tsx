import { ImageResponse } from "next/og";

export const alt = "Erick Suehiro — software engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

// Same language as the site: warm near-black, one green accent, type doing the
// work. No glows, no grid. (Satori can't read the variable Geist files, so this
// uses next/og's built-in sans.)
export default function OpenGraphImage() {
  const ink = "#ecebe6";
  const faint = "rgba(236,235,230,0.45)";
  const line = "rgba(236,235,230,0.14)";

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0e0e0d",
          color: ink,
          padding: "64px 72px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 24,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: faint,
          }}
        >
          <span>Software engineer · Brazil</span>
          <span>ericksuehiro.dev</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 168,
              fontWeight: 700,
              lineHeight: 0.86,
              letterSpacing: "-0.065em",
            }}
          >
            Erick Suehiro
            <span style={{ color: "#04d361" }}>.</span>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: `2px solid ${line}`,
            paddingTop: 28,
            fontSize: 28,
            color: "rgba(236,235,230,0.72)",
          }}
        >
          <span style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <span style={{ width: 14, height: 14, borderRadius: 9999, background: "#04d361" }} />
            Developer at Santander
          </span>
          <span>K-GUESS · CareerUp · Grimório · AprendeAi</span>
        </div>
      </div>
    ),
    size,
  );
}
