import { X } from "lucide-react";
import { useState } from "react";
import { useLang } from "../context/LanguageContext";
import { useScrollIntoView } from "../hooks/useScrollIntoView";

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactForm({ isOpen, onClose }: ContactFormProps) {
  const { t } = useLang();
  const scrollIntoView = useScrollIntoView();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    topic: "general",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xgordnka", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        body: JSON.stringify({ ...formData, _subject: "New Consultation Request — Expatrum" }),
      });

      if (response.ok) {
        setIsSubmitting(false);
        setIsSubmitted(true);

        // Reset form after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: "", email: "", phone: "", topic: "general", message: "" });
          onClose();
        }, 3000);
      } else {
        setIsSubmitting(false);
        alert("Failed to submit form. Please try again.");
      }
    } catch (error) {
      setIsSubmitting(false);
      alert("Failed to submit form. Please try again.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-4"
      style={{
        backgroundColor: "rgba(11, 31, 58, 0.85)",
        backdropFilter: "blur(8px)",
        animation: "fadeIn 0.3s ease",
      }}
      onClick={onClose}
    >
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes slideUp {
            from { transform: translateY(100%); }
            to { transform: translateY(0); }
          }
        `}
      </style>
      <div
        className="relative w-full sm:max-w-lg sm:rounded-2xl rounded-t-3xl max-h-[95vh] sm:max-h-[90vh] overflow-auto"
        style={{
          backgroundColor: "#ffffff",
          border: "1px solid rgba(0,0,0,0.1)",
          boxShadow: "0 -10px 60px rgba(0,0,0,0.3)",
          animation: "slideUp 0.4s ease",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drag indicator (mobile) */}
        <div className="sm:hidden flex justify-center pt-3 pb-2">
          <div
            className="w-10 h-1 rounded-full"
            style={{ backgroundColor: "rgba(0,0,0,0.2)" }}
          />
        </div>

        <div className="p-6 sm:p-8 pb-24 sm:pb-8">

        {isSubmitted ? (
          <div className="text-center py-8">
            <div
              className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
              style={{ backgroundColor: "rgba(0,212,170,0.15)" }}
            >
              <span style={{ color: "#00D4AA", fontSize: "2rem" }}>✓</span>
            </div>
            <h3 className="mb-2" style={{ color: "#0B1F3A", fontSize: "1.5rem", fontWeight: 700 }}>
              {t("contact.success")}
            </h3>
            <p style={{ color: "rgba(0,0,0,0.6)", fontSize: "1rem" }}>
              {t("contact.successMessage")}
            </p>
          </div>
        ) : (
          <>
            <h2 className="mb-2" style={{ color: "#0B1F3A", fontSize: "1.75rem", fontWeight: 700 }}>
              {t("contact.title")}
            </h2>
            <p className="mb-6" style={{ color: "rgba(0,0,0,0.6)", fontSize: "0.95rem" }}>
              {t("contact.subtitle")}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm"
                  style={{ color: "#0B1F3A", fontWeight: 500 }}
                >
                  {t("contact.name")} *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg transition-all outline-none"
                  style={{
                    backgroundColor: "#f8f9fa",
                    border: "1px solid rgba(0,0,0,0.15)",
                    color: "#0B1F3A",
                  }}
                  onFocus={(e) => {
                    scrollIntoView(e);
                    e.currentTarget.style.borderColor = "#00D4AA";
                    e.currentTarget.style.backgroundColor = "#fff";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "rgba(0,0,0,0.15)";
                    e.currentTarget.style.backgroundColor = "#f8f9fa";
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm"
                  style={{ color: "#0B1F3A", fontWeight: 500 }}
                >
                  {t("contact.email")} *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg transition-all outline-none"
                  style={{
                    backgroundColor: "#f8f9fa",
                    border: "1px solid rgba(0,0,0,0.15)",
                    color: "#0B1F3A",
                  }}
                  onFocus={(e) => {
                    scrollIntoView(e);
                    e.currentTarget.style.borderColor = "#00D4AA";
                    e.currentTarget.style.backgroundColor = "#fff";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "rgba(0,0,0,0.15)";
                    e.currentTarget.style.backgroundColor = "#f8f9fa";
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="topic"
                  className="block mb-2 text-sm"
                  style={{ color: "#0B1F3A", fontWeight: 500 }}
                >
                  {t("contact.topic")}
                </label>
                <select
                  id="topic"
                  name="topic"
                  value={formData.topic}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg transition-all outline-none appearance-none cursor-pointer"
                  style={{
                    backgroundColor: "#f8f9fa",
                    border: "1px solid rgba(0,0,0,0.15)",
                    color: "#0B1F3A",
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath fill='%2300D4AA' d='M4 6l4 4 4-4'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 1rem center",
                    paddingRight: "3rem",
                  }}
                  onFocus={(e) => {
                    scrollIntoView(e);
                    e.currentTarget.style.borderColor = "#00D4AA";
                    e.currentTarget.style.backgroundColor = "#fff";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "rgba(0,0,0,0.15)";
                    e.currentTarget.style.backgroundColor = "#f8f9fa";
                  }}
                >
                  <option value="general" style={{ backgroundColor: "#f8f9fa", color: "#0B1F3A" }}>
                    {t("contact.topicGeneral")}
                  </option>
                  <option value="etf" style={{ backgroundColor: "#f8f9fa", color: "#0B1F3A" }}>
                    {t("contact.topicETF")}
                  </option>
                  <option value="tax" style={{ backgroundColor: "#f8f9fa", color: "#0B1F3A" }}>
                    {t("contact.topicTax")}
                  </option>
                  <option value="insurance" style={{ backgroundColor: "#f8f9fa", color: "#0B1F3A" }}>
                    {t("contact.topicInsurance")}
                  </option>
                  <option value="retirement" style={{ backgroundColor: "#f8f9fa", color: "#0B1F3A" }}>
                    {t("contact.topicRetirement")}
                  </option>
                  <option value="corporate" style={{ backgroundColor: "#f8f9fa", color: "#0B1F3A" }}>
                    {t("contact.topicCorporate")}
                  </option>
                  <option value="event" style={{ backgroundColor: "#f8f9fa", color: "#0B1F3A" }}>
                    {t("contact.topicEvent")}
                  </option>
                  <option value="other" style={{ backgroundColor: "#f8f9fa", color: "#0B1F3A" }}>
                    {t("contact.topicOther")}
                  </option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block mb-2 text-sm"
                  style={{ color: "#0B1F3A", fontWeight: 500 }}
                >
                  {t("contact.phone")} *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg transition-all outline-none"
                  style={{
                    backgroundColor: "#f8f9fa",
                    border: "1px solid rgba(0,0,0,0.15)",
                    color: "#0B1F3A",
                  }}
                  onFocus={(e) => {
                    scrollIntoView(e);
                    e.currentTarget.style.borderColor = "#00D4AA";
                    e.currentTarget.style.backgroundColor = "#fff";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "rgba(0,0,0,0.15)";
                    e.currentTarget.style.backgroundColor = "#f8f9fa";
                  }}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm"
                  style={{ color: "#0B1F3A", fontWeight: 500 }}
                >
                  {t("contact.message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg transition-all outline-none resize-none"
                  style={{
                    backgroundColor: "#f8f9fa",
                    border: "1px solid rgba(0,0,0,0.15)",
                    color: "#0B1F3A",
                  }}
                  onFocus={(e) => {
                    scrollIntoView(e);
                    e.currentTarget.style.borderColor = "#00D4AA";
                    e.currentTarget.style.backgroundColor = "#fff";
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = "rgba(0,0,0,0.15)";
                    e.currentTarget.style.backgroundColor = "#f8f9fa";
                  }}
                  placeholder={t("contact.placeholder")}
                />
                <p className="text-xs mt-2" style={{ color: "rgba(0,0,0,0.5)" }}>
                  {t("contact.privacy")}
                </p>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-4 rounded-xl transition-all"
                style={{
                  backgroundColor: "#00D4AA",
                  color: "#0B1F3A",
                  fontWeight: 700,
                  fontSize: "1rem",
                  boxShadow: "0 4px 20px rgba(0,212,170,0.4)",
                  opacity: isSubmitting ? 0.6 : 1,
                  cursor: isSubmitting ? "not-allowed" : "pointer",
                }}
                onMouseEnter={(e) => {
                  if (!isSubmitting) {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,212,170,0.5)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSubmitting) {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,212,170,0.4)";
                  }
                }}
              >
                {isSubmitting ? t("contact.sending") : t("contact.submit")}
              </button>
            </form>
          </>
        )}
        </div>

        {/* Floating close button - thumb friendly */}
        <div
          className="fixed bottom-0 left-0 right-0 sm:absolute sm:top-4 sm:right-4 sm:bottom-auto sm:left-auto p-4 sm:p-0"
          style={{
            background: "linear-gradient(to top, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.95) 50%, transparent 100%)",
          }}
        >
          <button
            onClick={onClose}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 sm:p-2 rounded-xl sm:rounded-lg transition-all"
            style={{
              color: "#0B1F3A",
              backgroundColor: "rgba(0,0,0,0.08)",
              fontWeight: 600,
              fontSize: "0.95rem",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.12)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(0,0,0,0.08)";
            }}
          >
            <X size={20} />
            <span className="sm:hidden">Close</span>
          </button>
        </div>
      </div>
    </div>
  );
}
