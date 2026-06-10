import { ArrowRight, Shield, TrendingUp, Globe } from "lucide-react";
import { Link } from "react-router";
import { useState } from "react";
import { useLang } from "../../context/LanguageContext";
import { ContactForm } from "../ContactForm";

const BERLIN_IMG =
  "https://images.unsplash.com/photo-1773399557375-17cae316f68b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHZXJtYW55JTIwQmVybGluJTIwY2l0eSUyMHNreWxpbmUlMjBtb2Rlcm58ZW58MXx8fHwxNzc2NjAzNDE0fDA&ixlib=rb-4.1.0&q=80&w=1080";

export function Hero() {
  const { t } = useLang();
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ backgroundColor: "#0B1F3A" }}
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={BERLIN_IMG}
          alt="Berlin skyline"
          className="w-full h-full object-cover"
          style={{ opacity: 0.15 }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, #0B1F3A 0%, rgba(11,31,58,0.8) 50%, rgba(0,100,80,0.2) 100%)",
          }}
        />
      </div>

      {/* Animated background grid */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,212,170,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,170,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8" style={{ backgroundColor: "rgba(0,212,170,0.1)", border: "1px solid rgba(0,212,170,0.25)" }}>
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: "#00D4AA" }} />
              <span className="text-xs" style={{ color: "#00D4AA", fontWeight: 600 }}>
                English-Speaking Expats in Germany
              </span>
            </div>

            <h1
              className="mb-6 font-[Inter]"
              style={{
                color: "#fff",
                fontSize: "40px",
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
              }}
            >
              {t("hero.headline")}
            </h1>

            <p
              className="mb-10 max-w-xl"
              style={{
                color: "rgba(255,255,255,0.65)",
                fontSize: "1.15rem",
                lineHeight: 1.7,
              }}
            >
              {t("hero.subheadline")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <button
                onClick={() => setIsContactFormOpen(true)}
                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl transition-all"
                style={{
                  backgroundColor: "#00D4AA",
                  color: "#0B1F3A",
                  fontWeight: 700,
                  fontSize: "1rem",
                  boxShadow: "0 4px 20px rgba(0,212,170,0.4)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,212,170,0.5)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,212,170,0.4)";
                }}
              >
                {t("hero.cta")}
                <ArrowRight size={18} />
              </button>
              <a
                href="#roadmap"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl transition-all"
                style={{
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "rgba(255,255,255,0.85)",
                  fontWeight: 500,
                  fontSize: "1rem",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(0,212,170,0.5)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#00D4AA";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.2)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.85)";
                }}
              >
                View My Roadmap
              </a>
            </div>

            <p className="text-sm" style={{ color: "rgba(255,255,255,0.35)" }}>
              {t("hero.subcta")}
            </p>
          </div>

          {/* Right — Stats Card */}
          <div className="flex flex-col gap-4">
            {/* Main stats card */}
            <div
              className="rounded-2xl p-6"
              style={{
                backgroundColor: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                backdropFilter: "blur(20px)",
              }}
            >
              <div className="flex items-center justify-between mb-6">
                <span className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                  Portfolio Overview
                </span>
                <span
                  className="px-2.5 py-1 rounded-full text-xs"
                  style={{ backgroundColor: "rgba(0,212,170,0.15)", color: "#00D4AA", fontWeight: 600 }}
                >
                  Live Preview
                </span>
              </div>
              <div className="space-y-4">
                {[
                  { label: "MSCI World ETF", value: "+12.4%", color: "#00D4AA" },
                  { label: "Altersvorsorge", value: "+8.1%", color: "#60A5FA" },
                  { label: "Emergency Fund", value: "3.2x", color: "#A78BFA" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between">
                    <span className="text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
                      {item.label}
                    </span>
                    <span style={{ color: item.color, fontWeight: 700, fontSize: "1.05rem" }}>
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
              {/* Mini chart line */}
              <div className="mt-5 pt-5" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
                <div className="flex items-end gap-1 h-12">
                  {[40, 55, 45, 60, 52, 70, 65, 80, 75, 90, 85, 100].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-sm transition-all"
                      style={{
                        height: `${h}%`,
                        backgroundColor:
                          i === 11 ? "#00D4AA" : "rgba(0,212,170,0.3)",
                      }}
                    />
                  ))}
                </div>
                <p className="text-xs mt-2" style={{ color: "rgba(255,255,255,0.3)" }}>
                  12-month simulated growth
                </p>
              </div>
            </div>

            {/* 3 small trust pills */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: Shield, label: "Protected", value: "100%" },
                { icon: TrendingUp, label: "Avg. Return", value: "9.2%" },
                { icon: Globe, label: "Countries", value: "47" },
              ].map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="rounded-xl p-4 text-center"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <Icon size={18} style={{ color: "#00D4AA", margin: "0 auto 6px" }} />
                  <div style={{ color: "#fff", fontWeight: 700, fontSize: "1.1rem" }}>
                    {value}
                  </div>
                  <div className="text-xs" style={{ color: "rgba(255,255,255,0.4)" }}>
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom trust strip */}
        <div
          className="mt-16 pt-8 grid grid-cols-2 md:grid-cols-4 gap-6"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          {[
            { label: t("trust.cost"), icon: "✓" },
            { label: t("trust.guidance"), icon: "✓" },
            { label: t("trust.expat"), icon: "✓" },
            { label: t("trust.clients"), icon: "★" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <span style={{ color: "#00D4AA", fontWeight: 700 }}>{item.icon}</span>
              <span className="text-sm" style={{ color: "rgba(255,255,255,0.6)" }}>
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <ContactForm isOpen={isContactFormOpen} onClose={() => setIsContactFormOpen(false)} />
    </section>
  );
}
