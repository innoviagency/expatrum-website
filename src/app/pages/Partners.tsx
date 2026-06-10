import { Building2, Shield, TrendingUp } from "lucide-react";
import { useLang } from "../context/LanguageContext";

const partners = {
  insurance: [
    { name: "Allianz", category: "Insurance" },
    { name: "Generali", category: "Insurance" },
    { name: "AXA", category: "Insurance" },
    { name: "Debeka", category: "Insurance" },
    { name: "HUK-Coburg", category: "Insurance" },
    { name: "ERGO", category: "Insurance" },
    { name: "R+V Versicherung", category: "Insurance" },
    { name: "Signal Iduna", category: "Insurance" },
    { name: "Württembergische", category: "Insurance" },
    { name: "Gothaer", category: "Insurance" },
  ],
  banks: [
    { name: "Deutsche Bank", category: "Bank" },
    { name: "Commerzbank", category: "Bank" },
    { name: "DZ Bank", category: "Bank" },
    { name: "KfW", category: "Bank" },
    { name: "ING", category: "Bank" },
    { name: "N26", category: "Bank" },
    { name: "Sparkasse", category: "Bank" },
    { name: "Volksbank", category: "Bank" },
    { name: "Targobank", category: "Bank" },
    { name: "Postbank", category: "Bank" },
  ],
};

export default function Partners() {
  const { t } = useLang();

  return (
    <div style={{ backgroundColor: "#F5F8FF", minHeight: "100vh" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5"
            style={{ backgroundColor: "rgba(0,212,170,0.1)", border: "1px solid rgba(0,212,170,0.3)" }}
          >
            <Building2 size={14} style={{ color: "#00D4AA" }} />
            <span className="text-xs" style={{ color: "#00D4AA", fontWeight: 600 }}>
              {t("partners.badge")}
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
            {t("partners.title")}
          </h1>
          <p
            className="max-w-2xl mx-auto"
            style={{ color: "#64748B", fontSize: "1.1rem", lineHeight: 1.6 }}
          >
            {t("partners.subtitle")}
          </p>
        </div>

        {/* Insurance Partners */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Shield size={24} style={{ color: "#00D4AA" }} />
            <h2 style={{ color: "#0B1F3A", fontSize: "1.5rem", fontWeight: 700 }}>
              {t("partners.insuranceTitle")}
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {partners.insurance.map((partner) => (
              <div
                key={partner.name}
                className="rounded-xl p-6 flex items-center justify-center transition-all"
                style={{
                  backgroundColor: "#fff",
                  border: "1px solid rgba(0,0,0,0.08)",
                  minHeight: "120px",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#fff";
                  e.currentTarget.style.borderColor = "rgba(0,212,170,0.4)";
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,212,170,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#fff";
                  e.currentTarget.style.borderColor = "rgba(0,0,0,0.08)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.05)";
                }}
              >
                <div className="text-center">
                  <div
                    style={{
                      color: "#0B1F3A",
                      fontWeight: 700,
                      fontSize: "1rem",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {partner.name}
                  </div>
                  <div
                    style={{
                      color: "#64748B",
                      fontSize: "0.7rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {partner.category}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Banking Partners */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <TrendingUp size={24} style={{ color: "#00D4AA" }} />
            <h2 style={{ color: "#0B1F3A", fontSize: "1.5rem", fontWeight: 700 }}>
              {t("partners.bankingTitle")}
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {partners.banks.map((partner) => (
              <div
                key={partner.name}
                className="rounded-xl p-6 flex items-center justify-center transition-all"
                style={{
                  backgroundColor: "#fff",
                  border: "1px solid rgba(0,0,0,0.08)",
                  minHeight: "120px",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#fff";
                  e.currentTarget.style.borderColor = "rgba(0,212,170,0.4)";
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,212,170,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#fff";
                  e.currentTarget.style.borderColor = "rgba(0,0,0,0.08)";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 1px 3px rgba(0,0,0,0.05)";
                }}
              >
                <div className="text-center">
                  <div
                    style={{
                      color: "#0B1F3A",
                      fontWeight: 700,
                      fontSize: "1rem",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {partner.name}
                  </div>
                  <div
                    style={{
                      color: "#64748B",
                      fontSize: "0.7rem",
                      textTransform: "uppercase",
                      letterSpacing: "0.05em",
                    }}
                  >
                    {partner.category}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div
          className="mt-16 rounded-2xl p-8 text-center"
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
            {t("partners.ctaTitle")}
          </h3>
          <p
            style={{
              color: "#64748B",
              fontSize: "1rem",
              marginBottom: "1.5rem",
            }}
          >
            {t("partners.ctaSubtitle")}
          </p>
          <a
            href="/services"
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
            {t("partners.ctaButton")}
          </a>
        </div>
      </div>
    </div>
  );
}
