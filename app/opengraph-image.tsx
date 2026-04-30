import { ImageResponse } from "next/og";

export const alt = "Parv Saxena | Senior Frontend Engineer, AI-Powered Products";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background:
            "radial-gradient(circle at 50% 40%, #1f3a5f 0%, #1f1f1f 55%, #141414 100%)",
          fontFamily: "monospace",
          position: "relative",
        }}
      >
        <div
          style={{
            fontSize: 360,
            fontWeight: 700,
            letterSpacing: "-0.04em",
            color: "#4FA8E8",
            textShadow: "0 0 80px rgba(79, 168, 232, 0.45)",
            lineHeight: 1,
            display: "flex",
          }}
        >
          PS
        </div>
        <div
          style={{
            marginTop: 48,
            fontSize: 32,
            color: "#d4d4d4",
            letterSpacing: "0.02em",
            display: "flex",
          }}
        >
          Parv Saxena
        </div>
        <div
          style={{
            marginTop: 12,
            fontSize: 22,
            color: "#808080",
            letterSpacing: "0.02em",
            display: "flex",
          }}
        >
          Senior Frontend Engineer · AI-Powered Products
        </div>
      </div>
    ),
    { ...size },
  );
}
