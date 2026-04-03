import { ImageResponse } from "next/og";

export const alt = "Erick Suehiro portfolio preview";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          position: "relative",
          background:
            "radial-gradient(circle at top left, #163329 0%, #0a0f0d 40%, #050806 100%)",
          color: "#f5f5f5",
          overflow: "hidden",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            opacity: 0.2,
          }}
        />

        <div
          style={{
            position: "absolute",
            top: -120,
            right: -80,
            width: 420,
            height: 420,
            borderRadius: 9999,
            background: "rgba(4, 211, 97, 0.22)",
            filter: "blur(12px)",
          }}
        />

        <div
          style={{
            position: "absolute",
            bottom: -160,
            left: -80,
            width: 520,
            height: 320,
            borderRadius: 9999,
            background: "rgba(168, 85, 247, 0.18)",
            filter: "blur(18px)",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            padding: "56px 64px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              fontSize: 28,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.72)",
            }}
          >
            <div
              style={{
                width: 14,
                height: 14,
                borderRadius: 9999,
                background: "#04D361",
                boxShadow: "0 0 30px rgba(4, 211, 97, 0.7)",
              }}
            />
            Software Engineer
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 20,
              maxWidth: 880,
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: 104,
                fontWeight: 800,
                lineHeight: 0.9,
                letterSpacing: "-0.08em",
              }}
            >
              <span>ERICK</span>
              <span style={{ color: "#04D361" }}>SUEHIRO</span>
            </div>

            <div
              style={{
                fontSize: 34,
                lineHeight: 1.35,
                color: "rgba(255,255,255,0.82)",
                maxWidth: 900,
              }}
            >
              Portfolio com projetos, experiência e ferramentas web focadas em
              performance, produto e código limpo.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            <div
              style={{
                display: "flex",
                gap: 14,
                fontSize: 24,
                color: "rgba(255,255,255,0.78)",
              }}
            >
              <span>Full Stack</span>
              <span style={{ color: "#04D361" }}>•</span>
              <span>Frontend</span>
              <span style={{ color: "#04D361" }}>•</span>
              <span>Backend</span>
            </div>

            <div
              style={{
                fontSize: 28,
                fontWeight: 700,
                color: "#04D361",
              }}
            >
              ericksuehiro.dev
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
