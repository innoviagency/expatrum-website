import {
  Heart,
  Shield,
  Scale,
  TrendingUp,
  Sunset,
  FileText,
  ArrowRight,
  Check,
  Plane,
  PiggyBank,
} from "lucide-react";
import { Link } from "react-router";
import { useLang } from "../context/LanguageContext";

const stepColors: Record<number, string> = {
  1: "#60A5FA",
  2: "#A78BFA",
  3: "#34D399",
  4: "#00D4AA",
  5: "#F59E0B",
};

export function Services() {
  const { t } = useLang();

  const services = [
    {
      icon: Heart,
      color: "#EF4444",
      bg: "rgba(239,68,68,0.1)",
      roadmapStep: 1,
      title: t("services.s1.title"),
      german: t("services.s1.german"),
      stepLabel: t("services.s1.stepLabel"),
      tagline: t("services.s1.tagline"),
      description: t("services.s1.desc"),
      features: [t("services.s1.f1"), t("services.s1.f2"), t("services.s1.f3"), t("services.s1.f4")],
      cta: t("services.s1.cta"),
    },
    {
      icon: Shield,
      color: "#A78BFA",
      bg: "rgba(167,139,250,0.1)",
      roadmapStep: 2,
      title: t("services.s2.title"),
      german: t("services.s2.german"),
      stepLabel: t("services.s2.stepLabel"),
      tagline: t("services.s2.tagline"),
      description: t("services.s2.desc"),
      features: [t("services.s2.f1"), t("services.s2.f2"), t("services.s2.f3"), t("services.s2.f4")],
      cta: t("services.s2.cta"),
    },
    {
      icon: FileText,
      color: "#F59E0B",
      bg: "rgba(245,158,11,0.1)",
      roadmapStep: 2,
      title: t("services.s3.title"),
      german: t("services.s3.german"),
      stepLabel: t("services.s3.stepLabel"),
      tagline: t("services.s3.tagline"),
      description: t("services.s3.desc"),
      features: [t("services.s3.f1"), t("services.s3.f2"), t("services.s3.f3"), t("services.s3.f4")],
      cta: t("services.s3.cta"),
    },
    {
      icon: Scale,
      color: "#60A5FA",
      bg: "rgba(96,165,250,0.1)",
      roadmapStep: 2,
      title: t("services.s4.title"),
      german: t("services.s4.german"),
      stepLabel: t("services.s4.stepLabel"),
      tagline: t("services.s4.tagline"),
      description: t("services.s4.desc"),
      features: [t("services.s4.f1"), t("services.s4.f2"), t("services.s4.f3"), t("services.s4.f4")],
      cta: t("services.s4.cta"),
    },
    {
      icon: PiggyBank,
      color: "#34D399",
      bg: "rgba(52,211,153,0.1)",
      roadmapStep: 3,
      title: t("services.s5.title"),
      german: t("services.s5.german"),
      stepLabel: t("services.s5.stepLabel"),
      tagline: t("services.s5.tagline"),
      description: t("services.s5.desc"),
      features: [t("services.s5.f1"), t("services.s5.f2"), t("services.s5.f3"), t("services.s5.f4")],
      cta: t("services.s5.cta"),
    },
    {
      icon: TrendingUp,
      color: "#00D4AA",
      bg: "rgba(0,212,170,0.1)",
      roadmapStep: 4,
      title: t("services.s6.title"),
      german: t("services.s6.german"),
      stepLabel: t("services.s6.stepLabel"),
      tagline: t("services.s6.tagline"),
      description: t("services.s6.desc"),
      features: [t("services.s6.f1"), t("services.s6.f2"), t("services.s6.f3"), t("services.s6.f4")],
      cta: t("services.s6.cta"),
    },
    {
      icon: Sunset,
      color: "#F97316",
      bg: "rgba(249,115,22,0.1)",
      roadmapStep: 5,
      title: t("services.s7.title"),
      german: t("services.s7.german"),
      stepLabel: t("services.s7.stepLabel"),
      tagline: t("services.s7.tagline"),
      description: t("services.s7.desc"),
      features: [t("services.s7.f1"), t("services.s7.f2"), t("services.s7.f3"), t("services.s7.f4")],
      cta: t("services.s7.cta"),
    },
  ];

  const roadmapSteps = [
    { n: 1, label: t("services.step1") },
    { n: 2, label: t("services.step2") },
    { n: 3, label: t("services.step3") },
    { n: 4, label: t("services.step4") },
    { n: 5, label: t("services.step5") },
  ];

  return (
    <div style={{ backgroundColor: "#F5F8FF" }}>
      {/* Hero */}
      <section
        className="pt-32 pb-16 text-center"
        style={{ backgroundColor: "#0B1F3A" }}
      >
        <div className="max-w-3xl mx-auto px-4">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{ backgroundColor: "rgba(0,212,170,0.1)", border: "1px solid rgba(0,212,170,0.2)" }}
          >
            <Plane size={13} style={{ color: "#00D4AA" }} />
            <span className="text-xs" style={{ color: "#00D4AA", fontWeight: 600 }}>
              {t("services.badge")}
            </span>
          </div>
          <h1
            style={{
              color: "#fff",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              lineHeight: 1.15,
            }}
          >
            {t("services.heroTitle")}
          </h1>
          <p
            className="mt-5"
            style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.1rem", lineHeight: 1.7 }}
          >
            {t("services.heroSubtitle")}
          </p>
        </div>
      </section>

      {/* Roadmap connection visual */}
      <section className="py-10" style={{ backgroundColor: "#0B1F3A" }}>
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-between overflow-x-auto gap-2 pb-2">
            {roadmapSteps.map((step, i) => (
              <div key={step.n} className="flex items-center gap-2 flex-shrink-0">
                <div className="flex flex-col items-center">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${stepColors[step.n]}20`, border: `1px solid ${stepColors[step.n]}40` }}
                  >
                    <span style={{ color: stepColors[step.n], fontWeight: 800, fontSize: "0.9rem" }}>
                      {step.n}
                    </span>
                  </div>
                  <span className="text-xs mt-1.5" style={{ color: "rgba(255,255,255,0.5)" }}>
                    {step.label}
                  </span>
                </div>
                {i < 4 && (
                  <div
                    className="h-px w-8 sm:w-16 flex-shrink-0"
                    style={{ backgroundColor: "rgba(255,255,255,0.1)", marginBottom: "16px" }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className="rounded-2xl p-7 flex flex-col transition-all group"
                  style={{
                    backgroundColor: "#fff",
                    border: "1px solid rgba(0,0,0,0.06)",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 30px rgba(0,0,0,0.1)";
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 12px rgba(0,0,0,0.04)";
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                  }}
                >
                  {/* Roadmap tag */}
                  <div className="flex items-center gap-2 mb-5">
                    <div
                      className="px-2.5 py-1 rounded-full text-xs"
                      style={{
                        backgroundColor: `${stepColors[s.roadmapStep]}15`,
                        color: stepColors[s.roadmapStep],
                        fontWeight: 600,
                      }}
                    >
                      {t("services.stepPrefix")} {s.roadmapStep}: {s.stepLabel}
                    </div>
                  </div>

                  {/* Icon + Title */}
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: s.bg }}
                    >
                      <Icon size={22} style={{ color: s.color }} />
                    </div>
                    <div>
                      <h3 style={{ color: "#0B1F3A", fontWeight: 800, fontSize: "1.05rem" }}>
                        {s.title}
                      </h3>
                      <p className="text-xs" style={{ color: "#94A3B8" }}>
                        {s.german}
                      </p>
                    </div>
                  </div>

                  <p
                    className="text-sm mb-1"
                    style={{ color: s.color, fontWeight: 600 }}
                  >
                    {s.tagline}
                  </p>
                  <p
                    className="text-sm mb-5"
                    style={{ color: "#64748B", lineHeight: 1.65 }}
                  >
                    {s.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6 flex-1">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5">
                        <Check size={14} style={{ color: s.color, flexShrink: 0 }} />
                        <span className="text-sm" style={{ color: "#374151" }}>
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/services"
                    className="flex items-center justify-between px-4 py-3 rounded-xl transition-all"
                    style={{
                      backgroundColor: `${s.color}12`,
                      color: s.color,
                      fontWeight: 600,
                      fontSize: "0.9rem",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.backgroundColor = s.color;
                      (e.currentTarget as HTMLAnchorElement).style.color = "#fff";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.backgroundColor = `${s.color}12`;
                      (e.currentTarget as HTMLAnchorElement).style.color = s.color;
                    }}
                  >
                    {s.cta}
                    <ArrowRight size={16} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section
        className="py-20"
        style={{ backgroundColor: "#0B1F3A" }}
      >
        <div className="max-w-3xl mx-auto text-center px-4">
          <h2
            style={{
              color: "#fff",
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              fontWeight: 800,
            }}
          >
            {t("services.notSure")}
          </h2>
          <p className="mt-4 mb-8" style={{ color: "rgba(255,255,255,0.55)", fontSize: "1.05rem" }}>
            {t("services.ctaDesc")}
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl"
            style={{ backgroundColor: "#00D4AA", color: "#0B1F3A", fontWeight: 700 }}
          >
            {t("services.ctaButton")} <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
