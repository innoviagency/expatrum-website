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

const services = [
  {
    icon: Heart,
    color: "#EF4444",
    bg: "rgba(239,68,68,0.1)",
    title: "Health Insurance",
    german: "Krankenversicherung",
    roadmapStep: 1,
    stepLabel: "Arrival Setup",
    tagline: "Your first and most critical step in Germany.",
    description:
      "We compare public (GKV) and private (PKV) health insurance options based on your income, age, and employment status. Most expats overpay — we find you the right plan.",
    features: [
      "GKV vs PKV comparison",
      "International coverage options",
      "Family coverage analysis",
      "Switching support",
    ],
    cta: "Get Health Coverage",
  },
  {
    icon: Shield,
    color: "#A78BFA",
    bg: "rgba(167,139,250,0.1)",
    title: "Liability Insurance",
    german: "Haftpflichtversicherung",
    roadmapStep: 2,
    stepLabel: "Protection",
    tagline: "Mandatory for responsible living in Germany.",
    description:
      "Haftpflicht is considered essential by most Germans — and for good reason. A single accident can cost millions. We find you the best coverage at the lowest rate.",
    features: [
      "Personal liability up to €50M",
      "Covers accidents abroad",
      "Pet owner liability",
      "From €3/month",
    ],
    cta: "Get Protected",
  },
  {
    icon: FileText,
    color: "#F59E0B",
    bg: "rgba(245,158,11,0.1)",
    title: "Disability Insurance",
    german: "Berufsunfähigkeitsversicherung",
    roadmapStep: 2,
    stepLabel: "Protection",
    tagline: "Your income protection — often overlooked, always critical.",
    description:
      "BU insurance replaces your income if you can no longer work due to illness or injury. As an expat, your German state pension benefits may be minimal. BU fills this critical gap.",
    features: [
      "Income replacement up to 80%",
      "Mental health coverage included",
      "Inflation-proof adjustments",
      "Customized for expat situations",
    ],
    cta: "Protect Your Income",
  },
  {
    icon: Scale,
    color: "#60A5FA",
    bg: "rgba(96,165,250,0.1)",
    title: "Legal Protection",
    german: "Rechtsschutzversicherung",
    roadmapStep: 2,
    stepLabel: "Protection",
    tagline: "Navigate German law without financial fear.",
    description:
      "German legal disputes — even minor ones — can cost thousands. Rechtsschutz covers legal costs for employment disputes, rental conflicts, and more. Essential for expats.",
    features: [
      "Employment law coverage",
      "Tenant rights protection",
      "Traffic law defense",
      "Annual legal hotline access",
    ],
    cta: "Get Legal Cover",
  },
  {
    icon: PiggyBank,
    color: "#34D399",
    bg: "rgba(52,211,153,0.1)",
    title: "Tax Optimization",
    german: "Steueroptimierung",
    roadmapStep: 3,
    stepLabel: "Wealth Foundation",
    tagline: "Most expats overpay taxes by €2,000–€8,000 annually.",
    description:
      "From choosing the right Steuerklasse to maximizing deductible expenses, we build a tax strategy tailored for your expat situation — including cross-border considerations.",
    features: [
      "Steuerklasse optimization",
      "Deductible expense review",
      "Double taxation treaty advice",
      "Annual tax return support",
    ],
    cta: "Optimize My Taxes",
  },
  {
    icon: TrendingUp,
    color: "#00D4AA",
    bg: "rgba(0,212,170,0.1)",
    title: "ETF Portfolio",
    german: "ETF-Anlageportfolio",
    roadmapStep: 4,
    stepLabel: "Investment Strategy",
    tagline: "Passive investing. Maximum growth. Minimum effort.",
    description:
      "We design a diversified ETF portfolio matched to your risk profile, time horizon, and financial goals. Set up a monthly Sparplan and let compound interest do the work.",
    features: [
      "Risk profile assessment",
      "Diversified global allocation",
      "Low-cost broker setup",
      "Monthly Sparplan structure",
    ],
    cta: "Start Investing",
  },
  {
    icon: Sunset,
    color: "#F97316",
    bg: "rgba(249,115,22,0.1)",
    title: "Retirement Planning",
    german: "Altersvorsorge",
    roadmapStep: 5,
    stepLabel: "Retirement Planning",
    tagline: "Build the retirement you deserve — starting today.",
    description:
      "Germany's state pension alone won't be enough. We combine Riester, Rürup, and private ETF strategies to build a comprehensive Altersvorsorge plan for your expat life.",
    features: [
      "Riester Rente evaluation",
      "Rürup pension for self-employed",
      "Private pension supplements",
      "Expat-specific exit strategies",
    ],
    cta: "Plan My Retirement",
  },
];

const stepColors: Record<number, string> = {
  1: "#60A5FA",
  2: "#A78BFA",
  3: "#34D399",
  4: "#00D4AA",
  5: "#F59E0B",
};

export function Services() {
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
              Complete Financial Services for Expats
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
            Everything You Need to Thrive Financially in Germany
          </h1>
          <p
            className="mt-5"
            style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.1rem", lineHeight: 1.7 }}
          >
            Each service maps directly to your Expat Financial Roadmap — so you
            always know where you are and what comes next.
          </p>
        </div>
      </section>

      {/* Roadmap connection visual */}
      <section className="py-10" style={{ backgroundColor: "#0B1F3A" }}>
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-between overflow-x-auto gap-2 pb-2">
            {[
              { n: 1, label: "Arrival" },
              { n: 2, label: "Protection" },
              { n: 3, label: "Foundation" },
              { n: 4, label: "Investment" },
              { n: 5, label: "Retirement" },
            ].map((step, i) => (
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
                    (e.currentTarget as HTMLDivElement).style.boxShadow = `0 8px 30px rgba(0,0,0,0.1)`;
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
                      Step {s.roadmapStep}: {s.stepLabel}
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
            Not sure where to start?
          </h2>
          <p className="mt-4 mb-8" style={{ color: "rgba(255,255,255,0.55)", fontSize: "1.05rem" }}>
            Book a free 30-minute consultation and we'll map out exactly what you need.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl"
            style={{ backgroundColor: "#00D4AA", color: "#0B1F3A", fontWeight: 700 }}
          >
            Book Free Consultation <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}
