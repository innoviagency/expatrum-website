import { useState } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useLang } from "../context/LanguageContext";
import type { Language } from "../context/LanguageContext";
import svgPaths from "../../imports/svg-bwyjzvc88u";

export function Header() {
  const { lang, setLang, t } = useLang();
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { label: t("nav.home"), to: "/" },
    { label: t("nav.services"), to: "/services" },
    { label: t("nav.insights"), to: "/insights" },
    { label: t("nav.events"), to: "/events" },
    { label: t("nav.partners"), to: "/partners" },
  ];

  const isActive = (to: string) =>
    to === "/" ? location.pathname === "/" : location.pathname.startsWith(to);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{ backgroundColor: "#0B1F3A" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div
              className="bg-[#00d4aa] rounded-[10px] w-8 h-8 flex items-center justify-center"
            >
              <svg className="w-[23px] h-[22px]" fill="none" viewBox="0 0 23 22">
                <g clipPath="url(#clip0_49_1451)">
                  <path d={svgPaths.p8df1260} stroke="#0B1F3A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d={svgPaths.p3d1c4a40} stroke="#0B1F3A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d={svgPaths.p1b66b1c0} stroke="#0B1F3A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d={svgPaths.p231fe880} stroke="#0B1F3A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </g>
                <defs>
                  <clipPath id="clip0_49_1451">
                    <rect fill="white" height="22" width="23" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <span
              className="text-white tracking-tight"
              style={{ fontWeight: 700, fontSize: "1.2rem" }}
            >
              Expat<span style={{ color: "#00D4AA" }}>rum</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="px-4 py-2 rounded-md transition-colors text-sm"
                style={{
                  color: isActive(link.to) ? "#00D4AA" : "rgba(255,255,255,0.8)",
                  backgroundColor: isActive(link.to)
                    ? "rgba(0,212,170,0.1)"
                    : "transparent",
                  fontWeight: isActive(link.to) ? 600 : 400,
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Toggle */}
            <div
              className="flex rounded-lg overflow-hidden border"
              style={{ borderColor: "rgba(255,255,255,0.15)" }}
            >
              {(["en", "de"] as Language[]).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className="px-3 py-1.5 text-xs transition-colors"
                  style={{
                    backgroundColor:
                      lang === l ? "#00D4AA" : "transparent",
                    color: lang === l ? "#0B1F3A" : "rgba(255,255,255,0.7)",
                    fontWeight: lang === l ? 700 : 400,
                  }}
                >
                  {l === "en" ? "🇬🇧 EN" : "🇩🇪 DE"}
                </button>
              ))}
            </div>

            {/* CTA */}
            
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          className="md:hidden border-t px-4 py-4 space-y-2"
          style={{
            backgroundColor: "#0B1F3A",
            borderColor: "rgba(255,255,255,0.1)",
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-2.5 rounded-lg text-sm"
              style={{
                color: isActive(link.to) ? "#00D4AA" : "rgba(255,255,255,0.8)",
                backgroundColor: isActive(link.to)
                  ? "rgba(0,212,170,0.1)"
                  : "transparent",
              }}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex gap-2 pt-2">
            {(["en", "de"] as Language[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className="flex-1 py-2 rounded-lg text-xs"
                style={{
                  backgroundColor: lang === l ? "#00D4AA" : "rgba(255,255,255,0.05)",
                  color: lang === l ? "#0B1F3A" : "rgba(255,255,255,0.7)",
                  fontWeight: lang === l ? 700 : 400,
                }}
              >
                {l === "en" ? "🇬🇧 EN" : "🇩🇪 DE"}
              </button>
            ))}
          </div>
          <Link
            to="/services"
            onClick={() => setMobileOpen(false)}
            className="block text-center px-4 py-3 rounded-lg text-sm"
            style={{
              backgroundColor: "#00D4AA",
              color: "#0B1F3A",
              fontWeight: 600,
            }}
          >
            {t("nav.cta")}
          </Link>
        </div>
      )}
    </header>
  );
}
