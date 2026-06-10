import { AlertTriangle, CheckCircle2, TrendingUp, Euro } from "lucide-react";
import { useLang } from "../../context/LanguageContext";

const DOCTOR_IMG =
  "https://images.unsplash.com/photo-1758691463582-11aea602cd4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxwcm9mZXNzaW9uYWwlMjBkb2N0b3IlMjBtYWxlJTIwcG9ydHJhaXQlMjBjb25maWRlbnR8ZW58MXx8fHwxNzc3MDMyNTQ2fDA&ixlib=rb-4.1.0&q=80&w=1080";

const problems = [
  "Overpaying €6,200/year in taxes",
  "No retirement strategy",
  "No BU (disability) coverage",
  "Unoptimized savings — low-yield account",
];

const solutions = [
  "Tax optimization via Riester + deductions",
  "ETF portfolio (MSCI World + EM split)",
  "BU + Haftpflicht insurance bundle",
  "Monthly Sparplan: €800/month",
];

const results = [
  { label: "Saved annually in taxes", value: "€6,200", icon: Euro, color: "#00D4AA" },
  { label: "Projected 10-yr portfolio", value: "€142k", icon: TrendingUp, color: "#60A5FA" },
  { label: "Total insurance covered", value: "€2M+", icon: CheckCircle2, color: "#A78BFA" },
  { label: "Time to implement", value: "6 weeks", icon: CheckCircle2, color: "#F59E0B" },
];

export function CaseStudy() {
  const { t } = useLang();

  return (
    <section className="py-24" style={{ backgroundColor: "#F5F8FF" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5"
            style={{ backgroundColor: "rgba(167,139,250,0.1)", border: "1px solid rgba(167,139,250,0.25)" }}
          >
            <span className="text-xs" style={{ color: "#A78BFA", fontWeight: 600 }}>
              Client Success Story
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
            {t("case.title")}
          </h2>
          <p
            className="mt-4 max-w-xl mx-auto"
            style={{ color: "#64748B", fontSize: "1.05rem", lineHeight: 1.7 }}
          >
            {t("case.subtitle")}
          </p>
        </div>

        {/* Profile + Story */}
        <div className="grid lg:grid-cols-3 gap-8 mb-10">
          {/* Profile card */}
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              backgroundColor: "#fff",
              border: "1px solid rgba(0,0,0,0.06)",
              boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
            }}
          >
            <div className="relative h-52 overflow-hidden">
              <img src={DOCTOR_IMG} alt="Ahmed" className="w-full h-full object-cover object-top" />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(11,31,58,0.8) 0%, transparent 60%)" }}
              />
              <div className="absolute bottom-4 left-4">
                <div style={{ color: "#fff", fontWeight: 800, fontSize: "1.1rem" }}>Ahmed K.</div>
                <div style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.85rem" }}>Cardiologist · Berlin</div>
              </div>
            </div>
            <div className="p-5">
              <div
                className="text-sm px-3 py-2 rounded-lg mb-4"
                style={{ backgroundColor: "#F0FFF4", color: "#065F46" }}
              >
                💬 <em>"Expatrum gave me a plan I actually understood — and could act on."</em>
              </div>
              <div className="space-y-2">
                {[
                  { k: "Origin", v: "Egypt" },
                  { k: "Income", v: "€95,000/year" },
                  { k: "In Germany", v: "3 years" },
                  { k: "Family", v: "Married, 1 child" },
                ].map(({ k, v }) => (
                  <div key={k} className="flex justify-between text-sm">
                    <span style={{ color: "#94A3B8" }}>{k}</span>
                    <span style={{ color: "#0B1F3A", fontWeight: 600 }}>{v}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Before / After */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
            {/* Before */}
            <div
              className="rounded-2xl p-6"
              style={{
                backgroundColor: "#fff",
                border: "1px solid rgba(239,68,68,0.2)",
                boxShadow: "0 4px 20px rgba(239,68,68,0.05)",
              }}
            >
              <div className="flex items-center gap-2.5 mb-5">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: "rgba(239,68,68,0.1)" }}
                >
                  <AlertTriangle size={18} style={{ color: "#EF4444" }} />
                </div>
                <div>
                  <div style={{ color: "#EF4444", fontWeight: 700, fontSize: "0.85rem" }}>BEFORE</div>
                  <div style={{ color: "#0B1F3A", fontWeight: 600 }}>Ahmed's Situation</div>
                </div>
              </div>
              <p className="text-sm mb-5" style={{ color: "#64748B", lineHeight: 1.6 }}>
                Moved to Germany with a high income but <strong>no structured financial plan.</strong> Filing taxes manually, no insurance review, and savings sitting in a regular account.
              </p>
              <ul className="space-y-2.5">
                {problems.map((p) => (
                  <li key={p} className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: "rgba(239,68,68,0.1)" }}>
                      <span style={{ color: "#EF4444", fontSize: "0.6rem", fontWeight: 800 }}>✕</span>
                    </div>
                    <span className="text-sm" style={{ color: "#374151" }}>{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* After */}
            <div
              className="rounded-2xl p-6"
              style={{
                backgroundColor: "#fff",
                border: "1px solid rgba(0,212,170,0.2)",
                boxShadow: "0 4px 20px rgba(0,212,170,0.05)",
              }}
            >
              <div className="flex items-center gap-2.5 mb-5">
                <div
                  className="w-9 h-9 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: "rgba(0,212,170,0.1)" }}
                >
                  <CheckCircle2 size={18} style={{ color: "#00D4AA" }} />
                </div>
                <div>
                  <div style={{ color: "#00D4AA", fontWeight: 700, fontSize: "0.85rem" }}>AFTER</div>
                  <div style={{ color: "#0B1F3A", fontWeight: 600 }}>6 Months Later</div>
                </div>
              </div>
              <p className="text-sm mb-5" style={{ color: "#64748B", lineHeight: 1.6 }}>
                A <strong>complete financial system</strong> tailored to his expat situation — optimized, protected, and growing on autopilot.
              </p>
              <ul className="space-y-2.5">
                {solutions.map((s) => (
                  <li key={s} className="flex items-start gap-2.5">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: "rgba(0,212,170,0.15)" }}>
                      <span style={{ color: "#00D4AA", fontSize: "0.6rem", fontWeight: 800 }}>✓</span>
                    </div>
                    <span className="text-sm" style={{ color: "#374151" }}>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Results bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {results.map(({ label, value, icon: Icon, color }) => (
            <div
              key={label}
              className="rounded-2xl p-6 text-center"
              style={{
                backgroundColor: "#fff",
                border: "1px solid rgba(0,0,0,0.06)",
                boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
              }}
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-3"
                style={{ backgroundColor: `${color}15` }}
              >
                <Icon size={22} style={{ color }} />
              </div>
              <div style={{ color: "#0B1F3A", fontWeight: 800, fontSize: "1.6rem" }}>
                {value}
              </div>
              <div className="text-sm mt-1" style={{ color: "#94A3B8" }}>
                {label}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-sm mb-4" style={{ color: "#94A3B8" }}>
            Your results will depend on your unique situation.
          </p>
          <a
            href="/services"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl transition-all"
            style={{
              backgroundColor: "#0B1F3A",
              color: "#fff",
              fontWeight: 600,
            }}
          >
            Get Your Personal Story Started →
          </a>
        </div>
      </div>
    </section>
  );
}
