import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          boxShadow: "0 8px 25px rgba(139,69,19,0.7), inset 0 2px 6px rgba(255,255,255,0.15)",
          background: "linear-gradient(145deg, #0a0503 0%, #1f1209 25%, #3d2314 50%, #6b4423 75%, #8B4513 100%), linear-gradient(90deg, #B8860B, #FFD700, #B8860B)",
          position: "relative",
        }}
      >
        <div style={{
          position: "absolute",
          width: "92%",
          height: "92%",
          borderRadius: "50%",
          border: "2px solid #B8860B",
          boxShadow: "inset 0 0 10px rgba(184,134,11,0.3)",
        }} />
        <div style={{
          position: "absolute",
          width: "80%",
          height: "80%",
          borderRadius: "50%",
          border: "1px solid rgba(184,134,11,0.5)",
        }} />
        <div style={{
          position: "absolute",
          width: "68%",
          height: "68%",
          borderRadius: "50%",
          border: "1px solid rgba(184,134,11,0.3)",
        }} />
        <span style={{ fontSize: 17, filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.7))" }}>🍕</span>
      </div>
    ),
    {
      ...size,
    }
  );
}
