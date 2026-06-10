import { useState } from "react";
import {
  Plane,
  Shield,
  PiggyBank,
  TrendingUp,
  Sunset,
  Check,
  ChevronDown,
} from "lucide-react";
import { useLang } from "../../context/LanguageContext";

const steps = [
  {
    id: 1,
    icon: Plane,
    color: "#60A5FA",
    bgColor: "rgba(96,165,250,0.12)",
    label: "Arrival Setup",
    sublabel: "Month 1–2",
    items: ["Public or private health insurance", "City registration (Anmeldung)", "Tax ID (Steueridentifikationsnummer)", "Bank account setup"],
    outcome: "Legally settled & insured",
  },
  {
    id: 2,
    icon: Shield,
    color: "#A78BFA",
    bgColor: "rgba(167,139,250,0.12)",
    label: "Protection",
    sublabel: "Month 2–4",
    items: ["Haftpflichtversicherung (liability)", "Berufsunfähigkeitsversicherung (BU)", "Hausrat (contents) insurance", "Legal protection (Rechtsschutz)"],
    outcome: "Fully protected against life's risks",
  },
  {
    id: 3,
    icon: PiggyBank,
    color: "#34D399",
    bgColor: "rgba(52,211,153,0.12)",
    label: "Wealth Foundation",
    sublabel: "Month 3–6",
    items: ["3–6 month emergency fund", "Tax optimization strategy", "German tax return filing", "Optimize Steuerklasse"],
    outcome: "Solid financial base established",
  },
  {
    id: 4,
    icon: TrendingUp,
    color: "#00D4AA",
    bgColor: "rgba(0,212,170,0.12)",
    label: "Investment Strategy",
    sublabel: "Month 6–12",
    items: ["ETF portfolio setup (e.g. MSCI World)", "Monthly savings plan (Sparplan)", "Risk profile assessment", "Broker account optimization"],
    outcome: "Long-term wealth building starts",
  },
  {
    id: 5,
    icon: Sunset,
    color: "#F59E0B",
    bgColor: "rgba(245,158,11,0.12)",
    label: "Retirement Planning",
    sublabel: "Ongoing",
    items: ["Altersvorsorge strategy", "Riester / Rürup evaluation", "State pension (Rentenversicherung)", "Private retirement supplements"],
    outcome: "Secure future — designed today",
  },
];

export function FinancialRoadmap() {
  const { t } = useLang();
  const [expandedStep, setExpandedStep] = useState<number | null>(1);

  const toggleStep = (stepId: number) => {
    setExpandedStep((prev) => (prev === stepId ? null : stepId));
  };

  return (
    <section id="roadmap" className="py-24" style={{ backgroundColor: "#F5F8FF" }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5"
            style={{ backgroundColor: "rgba(0,212,170,0.1)", border: "1px solid rgba(0,212,170,0.2)" }}
          >
            <span className="text-xs" style={{ color: "#00D4AA", fontWeight: 600 }}>
              Step-by-Step Framework
            </span>
          </div>
          <h2
            style={{
              color: "#0B1F3A",
              fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
              fontWeight: 800,
              lineHeight: 1.2,
            }}
          >
            {t("roadmap.title")}
          </h2>
          <p
            className="mt-4 max-w-xl mx-auto"
            style={{ color: "#64748B", fontSize: "1.05rem", lineHeight: 1.7 }}
          >
            {t("roadmap.subtitle")}
          </p>
        </div>

        {/* Accordion Steps */}
        <div className="flex flex-col gap-4">
          {steps.map((step) => {
            const Icon = step.icon;
            const isExpanded = expandedStep === step.id;
            return (
              <div
                key={step.id}
                id={`step-${step.id}`}
                className="rounded-xl transition-all"
                style={{
                  backgroundColor: "#fff",
                  border: isExpanded ? "2px solid " + step.color : "1px solid rgba(0,0,0,0.06)",
                  boxShadow: isExpanded ? "0 8px 30px rgba(0,0,0,0.08)" : "0 2px 8px rgba(0,0,0,0.04)",
                  scrollMarginTop: "100px",
                }}
              >
                {/* Step Header - Always Visible */}
                <button
                  onClick={(e) => {
                    toggleStep(step.id);
                    setTimeout(() => {
                      const element = document.getElementById(`step-${step.id}`);
                      if (element) {
                        element.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                          inline: "nearest"
                        });
                      }
                    }, 200);
                  }}
                  className="w-full flex items-center justify-between px-6 py-5 text-left transition-all"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        backgroundColor: step.bgColor,
                      }}
                    >
                      <Icon size={22} style={{ color: step.color }} />
                    </div>
                    <div className="flex-1">
                      <div
                        className="text-base"
                        style={{
                          color: "#0B1F3A",
                          fontWeight: 700,
                        }}
                      >
                        Step {step.id}: {step.label}
                      </div>
                      <div
                        className="text-sm mt-0.5"
                        style={{ color: "#94A3B8" }}
                      >
                        {step.sublabel}
                      </div>
                    </div>
                  </div>
                  <ChevronDown
                    size={20}
                    style={{
                      color: step.color,
                      transform: isExpanded ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.3s ease",
                    }}
                  />
                </button>

                {/* Expanded Content */}
                {isExpanded && (
                  <div className="px-6 pb-6 pt-2">
                    <div
                      className="h-px mb-6"
                      style={{ backgroundColor: "rgba(0,0,0,0.06)" }}
                    />

                    {/* Checklist */}
                    <div className="grid sm:grid-cols-2 gap-3 mb-6">
                      {step.items.map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-3 px-4 py-3 rounded-lg"
                          style={{ backgroundColor: "#F8FAFC" }}
                        >
                          <div
                            className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                            style={{ backgroundColor: step.color }}
                          >
                            <Check size={11} color="#fff" strokeWidth={3} />
                          </div>
                          <span className="text-sm" style={{ color: "#374151", lineHeight: 1.5 }}>
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Outcome banner */}
                    <div
                      className="flex items-center gap-3 px-5 py-4 rounded-lg"
                      style={{ backgroundColor: step.bgColor }}
                    >
                      <div
                        className="w-2 h-7 rounded-full"
                        style={{ backgroundColor: step.color }}
                      />
                      <div>
                        <div className="text-xs mb-0.5" style={{ color: step.color, fontWeight: 700 }}>
                          OUTCOME
                        </div>
                        <div style={{ color: "#0B1F3A", fontWeight: 600, fontSize: "0.95rem" }}>
                          {step.outcome}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
