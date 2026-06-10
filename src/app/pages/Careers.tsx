import { Briefcase, Users, TrendingUp, Heart } from "lucide-react";
import { Link } from "react-router";
import { useLang } from "../context/LanguageContext";

export default function Careers() {
  const { t } = useLang();

  const values = [
    {
      icon: Users,
      title: t("careers.value1Title"),
      description: t("careers.value1Description"),
    },
    {
      icon: TrendingUp,
      title: t("careers.value2Title"),
      description: t("careers.value2Description"),
    },
    {
      icon: Heart,
      title: t("careers.value3Title"),
      description: t("careers.value3Description"),
    },
  ];

  return (
    <div style={{ backgroundColor: "#F5F8FF", minHeight: "100vh" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5"
            style={{ backgroundColor: "rgba(0,212,170,0.1)", border: "1px solid rgba(0,212,170,0.3)" }}
          >
            <Briefcase size={14} style={{ color: "#00D4AA" }} />
            <span className="text-xs" style={{ color: "#00D4AA", fontWeight: 600 }}>
              {t("careers.badge")}
            </span>
          </div>
          <h1
            style={{
              color: "#0B1F3A",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              lineHeight: 1.2,
              marginBottom: "1rem",
            }}
          >
            {t("careers.title")}
          </h1>
          <p
            className="max-w-2xl mx-auto"
            style={{ color: "#64748B", fontSize: "1.1rem", lineHeight: 1.6 }}
          >
            {t("careers.subtitle")}
          </p>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                className="rounded-2xl p-8 text-center"
                style={{
                  backgroundColor: "#fff",
                  border: "1px solid rgba(0,0,0,0.08)",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                }}
              >
                <div
                  className="w-16 h-16 rounded-2xl mx-auto mb-4 flex items-center justify-center"
                  style={{ backgroundColor: "rgba(0,212,170,0.1)" }}
                >
                  <Icon size={28} style={{ color: "#00D4AA" }} />
                </div>
                <h3
                  style={{
                    color: "#0B1F3A",
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    marginBottom: "0.75rem",
                  }}
                >
                  {value.title}
                </h3>
                <p style={{ color: "#64748B", fontSize: "0.95rem", lineHeight: 1.6 }}>
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Open Positions */}
        <div
          className="rounded-2xl p-8 mb-8"
          style={{
            backgroundColor: "#fff",
            border: "1px solid rgba(0,0,0,0.08)",
            boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
          }}
        >
          <h2
            style={{
              color: "#0B1F3A",
              fontSize: "1.75rem",
              fontWeight: 700,
              marginBottom: "1rem",
            }}
          >
            {t("careers.openPositions")}
          </h2>
          <p style={{ color: "#64748B", fontSize: "1rem", lineHeight: 1.6, marginBottom: "1.5rem" }}>
            {t("careers.noOpenings")}
          </p>
          <Link
            to="/careers/apply"
            className="inline-block px-6 py-3 rounded-xl transition-all"
            style={{
              backgroundColor: "#00D4AA",
              color: "#0B1F3A",
              fontWeight: 700,
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,212,170,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Apply Now
          </Link>
        </div>

        {/* CTA */}
        <div
          className="rounded-2xl p-8 text-center"
          style={{
            backgroundColor: "#fff",
            border: "1px solid rgba(0,212,170,0.3)",
            boxShadow: "0 4px 20px rgba(0,212,170,0.1)",
          }}
        >
          <h3
            style={{
              color: "#0B1F3A",
              fontSize: "1.5rem",
              fontWeight: 700,
              marginBottom: "0.75rem",
            }}
          >
            {t("careers.ctaTitle")}
          </h3>
          <p
            style={{
              color: "#64748B",
              fontSize: "1rem",
              marginBottom: "1.5rem",
            }}
          >
            {t("careers.ctaSubtitle")}
          </p>
          <Link
            to="/careers/apply"
            className="inline-block px-8 py-4 rounded-xl transition-all"
            style={{
              backgroundColor: "#00D4AA",
              color: "#0B1F3A",
              fontWeight: 700,
              fontSize: "1rem",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,212,170,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            {t("careers.ctaButton")}
          </Link>
        </div>
      </div>
    </div>
  );
}
