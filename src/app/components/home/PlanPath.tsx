import {
  MessageSquare,
  BarChart2,
  Target,
  Rocket,
  RefreshCw,
} from "lucide-react";
import { useLang } from "../../context/LanguageContext";

export function PlanPath() {
  const { t } = useLang();

  const steps = [
    {
      icon: MessageSquare,
      label: t("path.step1Label"),
      color: "#60A5FA",
      bg: "rgba(96,165,250,0.12)",
      description: t("path.step1Description"),
      outcome: t("path.step1Outcome"),
    },
    {
      icon: BarChart2,
      label: t("path.step2Label"),
      color: "#A78BFA",
      bg: "rgba(167,139,250,0.12)",
      description: t("path.step2Description"),
      outcome: t("path.step2Outcome"),
    },
    {
      icon: Target,
      label: t("path.step3Label"),
      color: "#00D4AA",
      bg: "rgba(0,212,170,0.12)",
      description: t("path.step3Description"),
      outcome: t("path.step3Outcome"),
    },
    {
      icon: Rocket,
      label: t("path.step4Label"),
      color: "#F59E0B",
      bg: "rgba(245,158,11,0.12)",
      description: t("path.step4Description"),
      outcome: t("path.step4Outcome"),
    },
    {
      icon: RefreshCw,
      label: t("path.step5Label"),
      color: "#34D399",
      bg: "rgba(52,211,153,0.12)",
      description: t("path.step5Description"),
      outcome: t("path.step5Outcome"),
    },
  ];

  return (
    <section className="py-24" style={{ backgroundColor: "#0B1F3A" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5"
            style={{ backgroundColor: "rgba(0,212,170,0.1)", border: "1px solid rgba(0,212,170,0.2)" }}
          >
            <span className="text-xs" style={{ color: "#00D4AA", fontWeight: 600 }}>
              {t("path.process")}
            </span>
          </div>
          <h2
            style={{
              color: "#fff",
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              fontWeight: 800,
              lineHeight: 1.2,
            }}
          >
            {t("path.title")}
          </h2>
          <p
            className="mt-4 max-w-xl mx-auto"
            style={{ color: "rgba(255,255,255,0.55)", fontSize: "1.05rem", lineHeight: 1.7 }}
          >
            {t("path.subtitle")}
          </p>
        </div>

        {/* Flow */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div
            className="hidden lg:block absolute top-12 left-0 right-0 h-0.5"
            style={{
              background: "linear-gradient(90deg, rgba(0,212,170,0) 0%, rgba(0,212,170,0.3) 20%, rgba(0,212,170,0.3) 80%, rgba(0,212,170,0) 100%)",
              top: "2.75rem",
              boxShadow: "0 0 10px rgba(0,212,170,0.4)",
              animation: "flowLine 3s ease-in-out infinite",
              zIndex: 0,
            }}
          >
            <style>
              {`
                @keyframes flowLine {
                  0%, 100% {
                    opacity: 0.6;
                    box-shadow: 0 0 10px rgba(0,212,170,0.4);
                  }
                  50% {
                    opacity: 1;
                    box-shadow: 0 0 20px rgba(0,212,170,0.6);
                  }
                }
              `}
            </style>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative" style={{ zIndex: 1 }}>
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={step.label} className="relative flex flex-col" style={{ zIndex: 2 }}>
                  {/* Step number + Icon */}
                  <div className="flex flex-col items-center mb-5">
                    <div
                      className="relative w-14 h-14 rounded-2xl flex items-center justify-center mb-3"
                      style={{ backgroundColor: step.bg, border: `1px solid ${step.color}30`, zIndex: 2 }}
                    >
                      <Icon size={24} style={{ color: step.color }} />
                      <div
                        className="absolute -top-2 -right-2 w-5 h-5 rounded-full flex items-center justify-center"
                        style={{ backgroundColor: step.color }}
                      >
                        <span style={{ color: "#0B1F3A", fontSize: "0.6rem", fontWeight: 800 }}>
                          {index + 1}
                        </span>
                      </div>
                    </div>
                    <h3
                      className="text-center"
                      style={{ color: "#fff", fontWeight: 700, fontSize: "0.95rem" }}
                    >
                      {step.label}
                    </h3>
                  </div>

                  {/* Card */}
                  <div
                    className="flex-1 rounded-2xl p-5"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.07)",
                    }}
                  >
                    <p
                      className="text-sm mb-4"
                      style={{ color: "rgba(255,255,255,0.55)", lineHeight: 1.6 }}
                    >
                      {step.description}
                    </p>
                    <div
                      className="px-3 py-2 rounded-lg"
                      style={{ backgroundColor: step.bg }}
                    >
                      <p className="text-xs" style={{ color: step.color, fontWeight: 600 }}>
                        ↳ {step.outcome}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <a
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl transition-all"
            style={{
              backgroundColor: "#00D4AA",
              color: "#0B1F3A",
              fontWeight: 700,
              fontSize: "1rem",
              boxShadow: "0 4px 20px rgba(0,212,170,0.3)",
            }}
          >
            Start Your Financial Journey →
          </a>
        </div>
      </div>
    </section>
  );
}
