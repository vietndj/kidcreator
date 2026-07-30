import React, { useState, useEffect } from "react";
import { useContent } from "../content";
import { useTheme } from "../theme";
import { FadeIn, ScrollTypewriter, CtaButton, AppYTEmbed, MediaSection } from "../components/ui";

export function HeroSection() {
  const c = useContent();
  const t = useTheme();
  const [heroReady, setHeroReady] = useState(false);
  useEffect(() => { const timer = setTimeout(() => setHeroReady(true), 80); return () => clearTimeout(timer); }, []);

  return (
    <>
      <section style={{ position: "relative", textAlign: "center", padding: "64px 20px 0", maxWidth: 960, margin: "0 auto" }}>
        <div aria-hidden style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: `linear-gradient(${t.accent}08 1px, transparent 1px), linear-gradient(90deg, ${t.accent}08 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black 40%, transparent 100%)",
        }} />
        <div style={{ opacity: heroReady ? 1 : 0, transform: heroReady ? "translateY(0)" : "translateY(16px)", transition: "opacity 0.7s ease, transform 0.7s ease" }}>


          <div style={{
            display: "inline-block", border: `1px solid ${t.accent}44`,
            borderRadius: 100, padding: "7px 18px", marginBottom: 36,
            fontFamily: t.fontMono, fontSize: 13, letterSpacing: "0.15em",
            color: "var(--cl-accent)", textTransform: "uppercase",
          }}>
            {c.heroBadge}
          </div>
          <h1 className="cl-hero__h1">
            {c.heroHeadline1 && (
              <span className="cl-hero__eyebrow-span">
                {c.heroHeadline1}
              </span>
            )}
            <span className="cl-hero__main-span" style={{ textTransform: "none", fontSize: "clamp(28px, 4.2vw, 54px)", lineHeight: 1.15, fontWeight: 500, letterSpacing: "-0.018em" }}>
              <ScrollTypewriter text={c.heroHeadline2 || ""} highlightText="mượt đến vô lý" speed={5} />
            </span>
          </h1>

          {(c as any).heroPoem && (c as any).heroPoem.length > 0 && (
            <div style={{
              margin: "8px auto 36px",
              maxWidth: 480,
              background: "rgba(255, 255, 255, 0.01)",
              border: `1px dashed ${t.accent}33`,
              borderRadius: 16,
              padding: "22px 30px",
              position: "relative",
              backdropFilter: "blur(8px)",
              boxShadow: `0 8px 32px -8px rgba(0,0,0,0.5), inset 0 1px 1px rgba(255,255,255,0.05)`,
            }}>
              <span style={{ position: "absolute", top: 4, left: 16, fontSize: 36, fontFamily: "Georgia, serif", color: `${t.accent}33`, lineHeight: 1, userSelect: "none" }}>“</span>
              <div style={{
                fontFamily: t.fontDisplay, fontSize: "clamp(17px, 2.4vw, 21px)", fontStyle: "italic",
                fontWeight: 600, color: "var(--cl-accent)", lineHeight: 1.6, textAlign: "center",
                display: "flex", flexDirection: "column", gap: 6, position: "relative", zIndex: 2,
              }}>
                {(c as any).heroPoem.map((line: string, i: number) => (
                  <span key={i}>{line}</span>
                ))}
              </div>
              <span style={{ position: "absolute", bottom: -16, right: 16, fontSize: 36, fontFamily: "Georgia, serif", color: `${t.accent}33`, lineHeight: 1, userSelect: "none" }}>”</span>
            </div>
          )}

          {(c as any).heroVideoYoutubeId && (
            <div style={{
              maxWidth: 460, width: "100%", margin: "48px auto 72px",
              background: "#08080a", border: "10px solid #141416", borderRadius: 48,
              padding: 0, boxShadow: `0 32px 80px -16px rgba(0,0,0,0.9), 0 0 40px -10px ${t.accent}22`,
              position: "relative", overflow: "hidden",
            }}>
              <div style={{
                position: "absolute", top: 14, left: "50%", transform: "translateX(-50%)",
                width: 90, height: 20, background: "#000", borderRadius: 10, zIndex: 10, border: "1.5px solid #222228",
              }} />
              <div style={{ position: "relative", paddingBottom: "177.78%", height: 0, overflow: "hidden", borderRadius: 38, background: "#000" }}>
                <iframe
                  src={`https://www.youtube.com/embed/${(c as any).heroVideoYoutubeId}?rel=0&modestbranding=1&showinfo=0`}
                  title="Giới thiệu sản phẩm GIBI AI Studio"
                  style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          )}

          <div className="cl-hero__cta-wrap">
            <CtaButton label={`${c.heroCta} — ${c.price} VNĐ`} />
            <p className="cl-hero__sub-price">
              {c.heroSubPrice ?? `Giá gốc: ${c.value} VNĐ — Tiết kiệm 80% hôm nay`}
            </p>
          </div>
        </div>
      </section>
      <MediaSection blockId="hero" />

      {/* 1B: Triết lý */}
      <section style={{ 
        position: "relative", padding: "100px 24px", maxWidth: 800, margin: "0 auto", 
        textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
      }}>
        <div aria-hidden style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          backgroundImage: `linear-gradient(${t.accent}04 1px, transparent 1px), linear-gradient(90deg, ${t.accent}04 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 60% 50% at 50% 50%, black 40%, transparent 100%)",
        }} />
        <FadeIn>
          <div className="cl-label">
            <span style={{ opacity: 0.4 }}>// </span>Triết lý quay dựng
          </div>
          <h2 className="cl-sh" style={{ fontFamily: t.fontDisplay }}>
            <ScrollTypewriter text={c.heroAccentLine} speed={7} />
          </h2>
          <p style={{
            fontFamily: t.fontBody, fontSize: "clamp(16px, 1.8vw, 19px)", lineHeight: 1.9,
            color: "var(--cl-text-body, #b0b0b0)", maxWidth: "62ch", margin: "0 auto", textWrap: "balance",
          }}>
            {c.heroSub}
          </p>
        </FadeIn>
      </section>
    </>
  );
}
