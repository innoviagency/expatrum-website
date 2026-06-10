import { Link } from "react-router";
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram, Facebook } from "lucide-react";
import { useLang } from "../context/LanguageContext";
import svgPaths from "../../imports/svg-bwyjzvc88u";

export function Footer() {
  const { t } = useLang();

  return (
    <footer style={{ backgroundColor: "#060F1E" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div
                className="rounded-[10px] w-8 h-8 flex items-center justify-center bg-[#ffffff]"
              >
                <svg className="w-[23px] h-[22px]" fill="none" viewBox="0 0 23 22">
                  <g clipPath="url(#clip0_49_1451_footer)">
                    <path d={svgPaths.p8df1260} stroke="#060F1E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <path d={svgPaths.p3d1c4a40} stroke="#060F1E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <path d={svgPaths.p1b66b1c0} stroke="#060F1E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                    <path d={svgPaths.p231fe880} stroke="#060F1E" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </g>
                  <defs>
                    <clipPath id="clip0_49_1451_footer">
                      <rect fill="white" height="22" width="23" />
                    </clipPath>
                  </defs>
                </svg>
              </div>
              <span
                style={{ color: "#fff", fontWeight: 700, fontSize: "1.2rem" }}
              >Expat<span style={{ color: "#fff" }}>rum</span></span>
            </div>
            <p className="text-sm mb-6" style={{ color: "rgba(255,255,255,0.5)" }}>
              {t("footer.tagline")}
            </p>
            <div className="flex gap-3">
              {[
                { icon: Linkedin, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Instagram, href: "https://www.instagram.com/expatrum/" },
                { icon: Facebook, href: "#" },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.05)",
                    color: "rgba(255,255,255,0.5)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "rgba(0,212,170,0.15)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "#00D4AA";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "rgba(255,255,255,0.05)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.5)";
                  }}
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-4" style={{ color: "#fff", fontWeight: 600 }}>
              {t("footer.services")}
            </h4>
            <ul className="space-y-2.5">
              {[
                t("footer.healthInsurance"),
                t("footer.retirementPlanning"),
                t("footer.etfPortfolio"),
                t("footer.buInsurance"),
                t("footer.taxOptimization"),
                t("footer.legalProtection"),
              ].map((item) => (
                <li key={item}>
                  <Link
                    to="/services"
                    className="text-sm transition-colors"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLAnchorElement).style.color = "#00D4AA")
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLAnchorElement).style.color =
                        "rgba(255,255,255,0.5)")
                    }
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-4" style={{ color: "#fff", fontWeight: 600 }}>
              {t("footer.resources")}
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: t("footer.insightsHub"), to: "/insights" },
                { label: t("footer.expatEvents"), to: "/events" },
                { label: t("footer.etfGuide"), to: "/insights" },
                { label: t("footer.taxCalculator"), to: "/insights" },
                { label: t("footer.financialGlossary"), to: "/insights" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    className="text-sm transition-colors"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                    onMouseEnter={(e) =>
                      ((e.target as HTMLAnchorElement).style.color = "#00D4AA")
                    }
                    onMouseLeave={(e) =>
                      ((e.target as HTMLAnchorElement).style.color =
                        "rgba(255,255,255,0.5)")
                    }
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            {/* Divider */}
            <div
              className="my-4"
              style={{ borderTop: "1px solid rgba(255,255,255,0.1)" }}
            />
            {/* Careers Link */}
            <Link
              to="/careers"
              className="text-sm transition-colors block"
              style={{ color: "rgba(255,255,255,0.8)", fontWeight: 600 }}
              onMouseEnter={(e) =>
                ((e.target as HTMLAnchorElement).style.color = "#00D4AA")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLAnchorElement).style.color =
                  "rgba(255,255,255,0.8)")
              }
            >
              {t("footer.careersLink")}
            </Link>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4" style={{ color: "#fff", fontWeight: 600 }}>
              {t("footer.contact")}
            </h4>
            <ul className="space-y-3">
              {[
                { icon: Mail, text: "info@expatrum.com" },
                { icon: Phone, text: "+49 177 6068273" },
                { icon: MapPin, text: "Mediapark, Köln, Germany" },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-2.5">
                  <Icon size={15} style={{ color: "#00D4AA" }} />
                  <span
                    className="text-sm"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}
        >
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
            {t("footer.copyright")}
          </p>
          <div className="flex gap-4">
            {[
              { label: t("footer.careers"), to: "/careers" },
              { label: t("footer.privacy"), to: "#" },
              { label: t("footer.terms"), to: "#" },
              { label: t("footer.imprint"), to: "#" },
            ].map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="text-xs"
                style={{ color: "rgba(255,255,255,0.3)" }}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
