import { useState } from "react";
import { TrendingUp, Info, ArrowRight } from "lucide-react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { useLang } from "../../context/LanguageContext";

const etfs = [
  {
    name: "MSCI World ETF",
    ticker: "IE00B4L5Y983",
    issuer: "iShares",
    risk: "Medium",
    riskScore: 3,
    return5y: "+82.4%",
    ter: "0.20%",
    bestFor: "Long-term growth",
    level: "beginner",
    color: "#00D4AA",
    data: [60, 65, 72, 68, 74, 80, 76, 82, 85, 90, 88, 95],
  },
  {
    name: "S&P 500 ETF",
    ticker: "IE00B3XXRP09",
    issuer: "Vanguard",
    risk: "Medium",
    riskScore: 3,
    return5y: "+98.7%",
    ter: "0.07%",
    bestFor: "Beginners, US focus",
    level: "beginner",
    color: "#60A5FA",
    data: [55, 60, 70, 65, 78, 85, 80, 90, 88, 95, 93, 100],
  },
  {
    name: "Emerging Markets ETF",
    ticker: "IE00B4L5YC18",
    issuer: "iShares",
    risk: "High",
    riskScore: 4,
    return5y: "+31.2%",
    ter: "0.18%",
    bestFor: "Diversification, higher risk",
    level: "advanced",
    color: "#A78BFA",
    data: [70, 65, 75, 60, 80, 72, 85, 78, 82, 75, 88, 80],
  },
  {
    name: "MSCI Europe ETF",
    ticker: "IE00B4K48X80",
    issuer: "iShares",
    risk: "Medium-Low",
    riskScore: 2,
    return5y: "+47.5%",
    ter: "0.12%",
    bestFor: "Conservative, EU focus",
    level: "beginner",
    color: "#34D399",
    data: [65, 68, 72, 70, 74, 76, 78, 80, 82, 80, 84, 86],
  },
  {
    name: "Global Clean Energy ETF",
    ticker: "IE00B1XNHC34",
    issuer: "iShares",
    risk: "High",
    riskScore: 5,
    return5y: "+18.9%",
    ter: "0.65%",
    bestFor: "Thematic investing, ESG",
    level: "advanced",
    color: "#F59E0B",
    data: [90, 85, 70, 65, 80, 72, 60, 75, 82, 68, 78, 72],
  },
];

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function getRiskDots(score: number, color: string) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          key={`${color}-${i}`}
          className="w-2 h-2 rounded-full"
          style={{ backgroundColor: i <= score ? color : "#E2E8F0" }}
        />
      ))}
    </div>
  );
}

export function ETFDashboard() {
  const { t } = useLang();
  const [view, setView] = useState<"beginner" | "advanced">("beginner");
  const [selectedETF, setSelectedETF] = useState(etfs[0]);

  const filtered = etfs.filter((e) =>
    view === "beginner" ? e.level === "beginner" : true
  );

  const chartData = months.map((m, i) => ({
    month: m,
    value: selectedETF.data[i],
    id: `${selectedETF.ticker}-${m}-${i}`,
  }));

  return (
    <section className="py-24" style={{ backgroundColor: "#0B1F3A" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5"
              style={{ backgroundColor: "rgba(0,212,170,0.1)", border: "1px solid rgba(0,212,170,0.2)" }}
            >
              <TrendingUp size={13} style={{ color: "#00D4AA" }} />
              <span className="text-xs" style={{ color: "#00D4AA", fontWeight: 600 }}>
                {t("etf.liveIntelligence")}
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
              {t("etf.title")}
            </h2>
            <p
              className="mt-3 max-w-xl"
              style={{ color: "rgba(255,255,255,0.5)", fontSize: "1rem" }}
            >
              {t("etf.subtitle")}
            </p>
          </div>

          {/* Toggle */}
          <div
            className="flex rounded-xl p-1 self-start md:self-auto"
            style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
          >
            {(["beginner", "advanced"] as const).map((v) => (
              <button
                key={v}
                onClick={() => setView(v)}
                className="px-5 py-2 rounded-lg text-sm transition-all capitalize"
                style={{
                  backgroundColor: view === v ? "#00D4AA" : "transparent",
                  color: view === v ? "#0B1F3A" : "rgba(255,255,255,0.5)",
                  fontWeight: view === v ? 700 : 400,
                }}
              >
                {v === "beginner" ? "🌱 Beginner" : "📊 Advanced"}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Table */}
          <div className="lg:col-span-3">
            <div
              className="rounded-2xl overflow-hidden"
              style={{ border: "1px solid rgba(255,255,255,0.08)" }}
            >
              {/* Table header */}
              <div
                className="grid grid-cols-5 px-5 py-3 text-xs"
                style={{
                  backgroundColor: "rgba(255,255,255,0.05)",
                  color: "rgba(255,255,255,0.4)",
                  fontWeight: 600,
                  letterSpacing: "0.05em",
                }}
              >
                <div className="col-span-2">{t("etf.fund")}</div>
                <div className="text-center">{t("etf.risk")}</div>
                <div className="text-center">{t("etf.return5y")}</div>
                <div className="text-center">{t("etf.ter")}</div>
              </div>

              {/* Rows */}
              {filtered.map((etf) => {
                const isSelected = etf.name === selectedETF.name;
                return (
                  <button
                    key={etf.name}
                    onClick={() => setSelectedETF(etf)}
                    className="w-full grid grid-cols-5 items-center px-5 py-4 text-left transition-all"
                    style={{
                      backgroundColor: isSelected
                        ? "rgba(0,212,170,0.06)"
                        : "transparent",
                      borderLeft: isSelected
                        ? `3px solid ${etf.color}`
                        : "3px solid transparent",
                      borderBottom: "1px solid rgba(255,255,255,0.05)",
                    }}
                  >
                    <div className="col-span-2 flex items-center gap-3">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ backgroundColor: `${etf.color}20` }}
                      >
                        <TrendingUp size={14} style={{ color: etf.color }} />
                      </div>
                      <div>
                        <div
                          className="text-sm"
                          style={{ color: "#fff", fontWeight: 600 }}
                        >
                          {etf.name}
                        </div>
                        <div
                          className="text-xs"
                          style={{ color: "rgba(255,255,255,0.35)" }}
                        >
                          {etf.issuer}
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center">
                      {getRiskDots(etf.riskScore, etf.color)}
                    </div>
                    <div
                      className="text-center text-sm"
                      style={{ color: etf.color, fontWeight: 700 }}
                    >
                      {etf.return5y}
                    </div>
                    <div
                      className="text-center text-sm"
                      style={{ color: "rgba(255,255,255,0.55)" }}
                    >
                      {etf.ter}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Info note */}
            <div
              className="mt-3 flex items-center gap-2 px-4 py-2.5 rounded-xl"
              style={{ backgroundColor: "rgba(255,255,255,0.03)" }}
            >
              <Info size={13} style={{ color: "rgba(255,255,255,0.3)" }} />
              <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
                {t("etf.disclaimer")}
              </p>
            </div>
          </div>

          {/* Chart + details */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            {/* Selected ETF details */}
            <div
              className="rounded-2xl p-5"
              style={{
                backgroundColor: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div className="flex items-center justify-between mb-4">
                <div>
                  <div
                    className="text-xs mb-1"
                    style={{ color: selectedETF.color, fontWeight: 600 }}
                  >
                    {t("etf.selectedFund")}
                  </div>
                  <div style={{ color: "#fff", fontWeight: 700 }}>
                    {selectedETF.name}
                  </div>
                </div>
                <div
                  className="px-3 py-1.5 rounded-lg text-xs"
                  style={{
                    backgroundColor: `${selectedETF.color}20`,
                    color: selectedETF.color,
                    fontWeight: 700,
                  }}
                >
                  {selectedETF.return5y} 5Y
                </div>
              </div>

              {/* Chart */}
              <div className="mb-4" style={{ width: "100%", height: "144px" }}>
                <ResponsiveContainer width="100%" height={144} key={selectedETF.ticker}>
                  <AreaChart data={chartData}>
                    <defs>
                      <linearGradient id={`etfGrad-${selectedETF.ticker}`} x1="0" y1="0" x2="0" y2="1">
                        <stop key={`stop-0-${selectedETF.ticker}`} offset="0%" stopColor={selectedETF.color} stopOpacity={0.3} />
                        <stop key={`stop-100-${selectedETF.ticker}`} offset="100%" stopColor={selectedETF.color} stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="month" tick={{ fill: "rgba(255,255,255,0.3)", fontSize: 10 }} axisLine={false} tickLine={false} key={`xaxis-${selectedETF.ticker}`} />
                    <YAxis hide key={`yaxis-${selectedETF.ticker}`} />
                    <Tooltip
                      contentStyle={{ backgroundColor: "#1a2f4a", border: "none", borderRadius: 8, color: "#fff", fontSize: 12 }}
                      labelStyle={{ color: "rgba(255,255,255,0.5)" }}
                      key={`tooltip-${selectedETF.ticker}`}
                    />
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke={selectedETF.color}
                      strokeWidth={2}
                      fill={`url(#etfGrad-${selectedETF.ticker})`}
                      key={`area-${selectedETF.ticker}`}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  { k: t("etf.terFees"), v: selectedETF.ter },
                  { k: t("etf.riskLevel"), v: selectedETF.risk },
                  { k: t("etf.bestFor"), v: selectedETF.bestFor },
                  { k: t("etf.isin"), v: selectedETF.ticker.slice(0, 12) + "…" },
                ].map(({ k, v }) => (
                  <div
                    key={k}
                    className="px-3 py-2.5 rounded-lg"
                    style={{ backgroundColor: "rgba(255,255,255,0.04)" }}
                  >
                    <div className="text-xs mb-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>
                      {k}
                    </div>
                    <div className="text-sm" style={{ color: "#fff", fontWeight: 600 }}>
                      {v}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <a
              href="/services"
              className="flex items-center justify-between px-5 py-4 rounded-2xl transition-all"
              style={{
                backgroundColor: "#00D4AA",
                boxShadow: "0 4px 20px rgba(0,212,170,0.3)",
              }}
            >
              <div>
                <div style={{ color: "#0B1F3A", fontWeight: 800, fontSize: "0.95rem" }}>
                  {t("etf.ctaTitle")}
                </div>
                <div style={{ color: "rgba(11,31,58,0.6)", fontSize: "0.8rem" }}>
                  {t("etf.ctaSubtitle")}
                </div>
              </div>
              <ArrowRight size={20} style={{ color: "#0B1F3A" }} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
