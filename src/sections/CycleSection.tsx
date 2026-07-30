import React from "react";
import { useContent } from "../content";
import { useTheme } from "../theme";
import { FadeIn, Label, Sec } from "../components/ui";

export function CycleSection() {
  const c = useContent();
  const t = useTheme();
  return (
    <Sec maxWidth={860}>
      <FadeIn>
        <div style={{ textAlign: "center", marginBottom: 54 }}>
          <Label>{c.cycleLabel}</Label>
          <h2 style={{ fontFamily: t.fontDisplay, fontSize: 48, fontWeight: 500, lineHeight: 1.15, letterSpacing: "-0.018em", color: "#fff", margin: "16px 0" }}>
            {c.cycleHeading}
          </h2>
          <p style={{ fontSize: 19, color: "var(--cl-text-muted, #888)", maxWidth: 720, margin: "0 auto", lineHeight: 1.75 }}>
            {c.cyclePara}
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={100}>
        <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 720, margin: "0 auto 48px" }}>
          {c.cycleItems.map((item, idx) => (
            <div key={idx} style={{
              background: `linear-gradient(135deg, ${t.accent}0a, transparent)`,
              border: `1px solid ${t.accent}33`,
              borderRadius: t.cardRadius,
              padding: "24px 28px",
              textAlign: "left",
              position: "relative",
              overflow: "hidden"
            }}>
              <h3 style={{ 
                fontFamily: t.fontBody, 
                fontSize: 19, 
                fontWeight: 500, 
                color: "#fff", 
                marginBottom: 8,
                letterSpacing: "-0.018em"
              }}>
                {item.fail}
              </h3>
              <p style={{ 
                fontSize: 16, 
                lineHeight: 1.75, 
                color: "#cbd5e1", 
                margin: 0,
                fontWeight: 400 
              }}>
                👉 {item.why}
              </p>
            </div>
          ))}
        </div>
      </FadeIn>
    </Sec>
  );
}
