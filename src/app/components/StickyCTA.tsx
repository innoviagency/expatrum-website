import { useState, useEffect } from "react";
import { CalendarDays, X } from "lucide-react";
import { useLang } from "../context/LanguageContext";

interface StickyCTAProps {
  onOpenContact: () => void;
}

export function StickyCTA({ onOpenContact }: StickyCTAProps) {
  const { t } = useLang();
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!dismissed) setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dismissed]);

  if (dismissed || !visible) return null;

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3.5 rounded-2xl shadow-2xl transition-all cursor-pointer"
      style={{
        backgroundColor: "#00D4AA",
        boxShadow: "0 8px 32px rgba(0,212,170,0.35)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-2px)";
        e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,212,170,0.45)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,212,170,0.35)";
      }}
    >
      <div onClick={onOpenContact} className="flex items-center gap-3 flex-1">
        <CalendarDays size={20} style={{ color: "#0B1F3A" }} />
        <span style={{ color: "#0B1F3A", fontWeight: 700, fontSize: "0.9rem" }}>
          {t("sticky.cta")}
        </span>
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          setDismissed(true);
        }}
        className="ml-1 opacity-60 hover:opacity-100 transition-opacity"
        style={{ color: "#0B1F3A" }}
      >
        <X size={16} />
      </button>
    </div>
  );
}
