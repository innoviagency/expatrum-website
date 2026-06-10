import { useState } from "react";
import { Upload, CheckCircle2, Users, TrendingUp, Heart, Award, Shield, Zap, ChevronDown } from "lucide-react";
import { useLang } from "../context/LanguageContext";

export default function CareerApplication() {
  const { t } = useLang();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showFAQ, setShowFAQ] = useState<number | null>(null);

  const [formData, setFormData] = useState({
    // Personal Information
    fullName: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    workAuth: "",

    // Professional Information
    position: "",
    yearsExperience: "",
    currentTitle: "",
    currentEmployer: "",
    expertise: [] as string[],

    // Portfolio & Profiles
    linkedin: "",
    portfolio: "",
    other: "",

    // Documents
    cv: null as File | null,
    coverLetter: null as File | null,
    portfolioDoc: null as File | null,

    // Motivation & Availability
    motivation: "",
    greatFit: "",
    startDate: "",
    employmentType: "",

    // Consent
    accurateInfo: false,
    privacyPolicy: false,
    contactConsent: false,
  });

  const positions = [
    "Financial Consultant",
    "Insurance Advisor",
    "Customer Success Manager",
    "Marketing Manager",
    "Product Designer",
    "Software Engineer",
    "Sales Representative",
    "Operations Manager",
    "Content Writer",
    "Data Analyst",
  ];

  const expertiseAreas = [
    "Financial Consulting",
    "Insurance",
    "Product Design",
    "UX/UI",
    "Product Management",
    "Marketing",
    "Sales",
    "Customer Success",
    "Operations",
    "Engineering",
    "AI / Automation",
  ];

  const benefits = [
    {
      icon: Users,
      title: t("careerApp.benefit1Title"),
      description: t("careerApp.benefit1Desc"),
    },
    {
      icon: TrendingUp,
      title: t("careerApp.benefit2Title"),
      description: t("careerApp.benefit2Desc"),
    },
    {
      icon: Heart,
      title: t("careerApp.benefit3Title"),
      description: t("careerApp.benefit3Desc"),
    },
    {
      icon: Award,
      title: t("careerApp.benefit4Title"),
      description: t("careerApp.benefit4Desc"),
    },
  ];

  const values = [
    { icon: Shield, text: t("careerApp.value1") },
    { icon: Zap, text: t("careerApp.value2") },
    { icon: Heart, text: t("careerApp.value3") },
  ];

  const faqs = [
    { q: t("careerApp.faq1Q"), a: t("careerApp.faq1A") },
    { q: t("careerApp.faq2Q"), a: t("careerApp.faq2A") },
    { q: t("careerApp.faq3Q"), a: t("careerApp.faq3A") },
    { q: t("careerApp.faq4Q"), a: t("careerApp.faq4A") },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: (e.target as HTMLInputElement).checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleExpertiseToggle = (area: string) => {
    setFormData({
      ...formData,
      expertise: formData.expertise.includes(area)
        ? formData.expertise.filter(e => e !== area)
        : [...formData.expertise, area],
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    const file = e.target.files?.[0] || null;
    setFormData({ ...formData, [field]: file });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const data = new FormData();
      data.append("_subject", "New Career Application — Expatrum");
      data.append("fullName", formData.fullName);
      data.append("email", formData.email);
      data.append("phone", formData.phone);
      data.append("country", formData.country);
      data.append("city", formData.city);
      data.append("workAuth", formData.workAuth);
      data.append("position", formData.position);
      data.append("yearsExperience", formData.yearsExperience);
      data.append("currentTitle", formData.currentTitle);
      data.append("currentEmployer", formData.currentEmployer);
      data.append("expertise", formData.expertise.join(", "));
      data.append("linkedin", formData.linkedin);
      data.append("portfolio", formData.portfolio);
      data.append("other", formData.other);
      data.append("motivation", formData.motivation);
      data.append("greatFit", formData.greatFit);
      data.append("startDate", formData.startDate);
      data.append("employmentType", formData.employmentType);
      if (formData.cv) data.append("cv", formData.cv);
      if (formData.coverLetter) data.append("coverLetter", formData.coverLetter);
      if (formData.portfolioDoc) data.append("portfolioDoc", formData.portfolioDoc);

      const response = await fetch("https://formspree.io/f/xgordnka", {
        method: "POST",
        headers: { "Accept": "application/json" },
        body: data,
      });

      if (response.ok) {
        setIsSubmitting(false);
        setIsSubmitted(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const json = await response.json().catch(() => ({}));
        setIsSubmitting(false);
        alert((json as any)?.error || "Submission failed. Please try again.");
      }
    } catch {
      setIsSubmitting(false);
      alert("Network error. Please check your connection and try again.");
    }
  };

  if (isSubmitted) {
    return (
      <div style={{ backgroundColor: "#F5F8FF", minHeight: "100vh" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <div
            className="w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center"
            style={{ backgroundColor: "rgba(0,212,170,0.1)" }}
          >
            <CheckCircle2 size={40} style={{ color: "#00D4AA" }} />
          </div>
          <h1
            style={{
              color: "#0B1F3A",
              fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
              fontWeight: 800,
              marginBottom: "1rem",
            }}
          >
            {t("careerApp.successTitle")}
          </h1>
          <p style={{ color: "#64748B", fontSize: "1.1rem", marginBottom: "2rem", lineHeight: 1.6 }}>
            {t("careerApp.successMessage")}
          </p>
          <a
            href="/careers"
            className="inline-block px-8 py-4 rounded-xl transition-all"
            style={{
              backgroundColor: "#00D4AA",
              color: "#0B1F3A",
              fontWeight: 700,
              textDecoration: "none",
            }}
          >
            {t("careerApp.backToCareers")}
          </a>
        </div>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: "#F5F8FF", minHeight: "100vh" }}>
      {/* Hero Section */}
      <div style={{ backgroundColor: "#0B1F3A", paddingTop: "6rem", paddingBottom: "4rem" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1
            style={{
              color: "#fff",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              lineHeight: 1.2,
              marginBottom: "1.5rem",
            }}
          >
            {t("careerApp.heroTitle")}
          </h1>
          <p
            className="max-w-2xl mx-auto"
            style={{ color: "rgba(255,255,255,0.7)", fontSize: "1.15rem", lineHeight: 1.6, marginBottom: "2rem" }}
          >
            {t("careerApp.heroSubtitle")}
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Application Form */}
        <div
          className="rounded-2xl p-8 mb-12"
          style={{
            backgroundColor: "#fff",
            boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
          }}
        >
          <form onSubmit={handleSubmit}>
            {/* Section 1: Personal Information */}
            <div className="mb-10">
              <h2
                style={{
                  color: "#0B1F3A",
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  marginBottom: "0.5rem",
                }}
              >
                {t("careerApp.section1Title")}
              </h2>
              <p style={{ color: "#64748B", fontSize: "0.9rem", marginBottom: "1.5rem" }}>
                {t("careerApp.section1Subtitle")}
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block mb-2 text-sm"
                    style={{ color: "#0B1F3A", fontWeight: 500 }}
                  >
                    {t("careerApp.fullName")} *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg transition-all outline-none"
                    style={{
                      backgroundColor: "#F5F8FF",
                      border: "1px solid rgba(0,0,0,0.1)",
                      color: "#0B1F3A",
                    }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm"
                    style={{ color: "#0B1F3A", fontWeight: 500 }}
                  >
                    {t("careerApp.email")} *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg transition-all outline-none"
                    style={{
                      backgroundColor: "#F5F8FF",
                      border: "1px solid rgba(0,0,0,0.1)",
                      color: "#0B1F3A",
                    }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block mb-2 text-sm"
                    style={{ color: "#0B1F3A", fontWeight: 500 }}
                  >
                    {t("careerApp.phone")} *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg transition-all outline-none"
                    style={{
                      backgroundColor: "#F5F8FF",
                      border: "1px solid rgba(0,0,0,0.1)",
                      color: "#0B1F3A",
                    }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="country"
                    className="block mb-2 text-sm"
                    style={{ color: "#0B1F3A", fontWeight: 500 }}
                  >
                    {t("careerApp.country")} *
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    required
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg transition-all outline-none"
                    style={{
                      backgroundColor: "#F5F8FF",
                      border: "1px solid rgba(0,0,0,0.1)",
                      color: "#0B1F3A",
                    }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="city"
                    className="block mb-2 text-sm"
                    style={{ color: "#0B1F3A", fontWeight: 500 }}
                  >
                    {t("careerApp.city")} *
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg transition-all outline-none"
                    style={{
                      backgroundColor: "#F5F8FF",
                      border: "1px solid rgba(0,0,0,0.1)",
                      color: "#0B1F3A",
                    }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="workAuth"
                    className="block mb-2 text-sm"
                    style={{ color: "#0B1F3A", fontWeight: 500 }}
                  >
                    {t("careerApp.workAuth")}
                  </label>
                  <input
                    type="text"
                    id="workAuth"
                    name="workAuth"
                    value={formData.workAuth}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg transition-all outline-none"
                    style={{
                      backgroundColor: "#F5F8FF",
                      border: "1px solid rgba(0,0,0,0.1)",
                      color: "#0B1F3A",
                    }}
                    placeholder="e.g., EU Citizen, Work Permit, etc."
                  />
                </div>
              </div>
            </div>

            {/* Section 2: Professional Information */}
            <div className="mb-10">
              <h2
                style={{
                  color: "#0B1F3A",
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  marginBottom: "0.5rem",
                }}
              >
                {t("careerApp.section2Title")}
              </h2>
              <p style={{ color: "#64748B", fontSize: "0.9rem", marginBottom: "1.5rem" }}>
                {t("careerApp.section2Subtitle")}
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label
                    htmlFor="position"
                    className="block mb-2 text-sm"
                    style={{ color: "#0B1F3A", fontWeight: 500 }}
                  >
                    {t("careerApp.position")} *
                  </label>
                  <select
                    id="position"
                    name="position"
                    required
                    value={formData.position}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg transition-all outline-none"
                    style={{
                      backgroundColor: "#F5F8FF",
                      border: "1px solid rgba(0,0,0,0.1)",
                      color: "#0B1F3A",
                    }}
                  >
                    <option value="">Select a position</option>
                    {positions.map(pos => (
                      <option key={pos} value={pos}>{pos}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="yearsExperience"
                    className="block mb-2 text-sm"
                    style={{ color: "#0B1F3A", fontWeight: 500 }}
                  >
                    {t("careerApp.yearsExp")} *
                  </label>
                  <input
                    type="number"
                    id="yearsExperience"
                    name="yearsExperience"
                    required
                    min="0"
                    value={formData.yearsExperience}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg transition-all outline-none"
                    style={{
                      backgroundColor: "#F5F8FF",
                      border: "1px solid rgba(0,0,0,0.1)",
                      color: "#0B1F3A",
                    }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="currentTitle"
                    className="block mb-2 text-sm"
                    style={{ color: "#0B1F3A", fontWeight: 500 }}
                  >
                    {t("careerApp.currentTitle")}
                  </label>
                  <input
                    type="text"
                    id="currentTitle"
                    name="currentTitle"
                    value={formData.currentTitle}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg transition-all outline-none"
                    style={{
                      backgroundColor: "#F5F8FF",
                      border: "1px solid rgba(0,0,0,0.1)",
                      color: "#0B1F3A",
                    }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="currentEmployer"
                    className="block mb-2 text-sm"
                    style={{ color: "#0B1F3A", fontWeight: 500 }}
                  >
                    {t("careerApp.currentEmployer")}
                  </label>
                  <input
                    type="text"
                    id="currentEmployer"
                    name="currentEmployer"
                    value={formData.currentEmployer}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg transition-all outline-none"
                    style={{
                      backgroundColor: "#F5F8FF",
                      border: "1px solid rgba(0,0,0,0.1)",
                      color: "#0B1F3A",
                    }}
                  />
                </div>
              </div>

              <div>
                <label className="block mb-3 text-sm" style={{ color: "#0B1F3A", fontWeight: 500 }}>
                  {t("careerApp.expertise")}
                </label>
                <div className="flex flex-wrap gap-2">
                  {expertiseAreas.map(area => (
                    <button
                      key={area}
                      type="button"
                      onClick={() => handleExpertiseToggle(area)}
                      className="px-4 py-2 rounded-lg text-sm transition-all"
                      style={{
                        backgroundColor: formData.expertise.includes(area) ? "#00D4AA" : "#F5F8FF",
                        color: formData.expertise.includes(area) ? "#0B1F3A" : "#64748B",
                        border: `1px solid ${formData.expertise.includes(area) ? "#00D4AA" : "rgba(0,0,0,0.1)"}`,
                        fontWeight: formData.expertise.includes(area) ? 600 : 400,
                      }}
                    >
                      {area}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Section 3: Portfolio & Profiles */}
            <div className="mb-10">
              <h2
                style={{
                  color: "#0B1F3A",
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  marginBottom: "0.5rem",
                }}
              >
                {t("careerApp.section3Title")}
              </h2>
              <p style={{ color: "#64748B", fontSize: "0.9rem", marginBottom: "1.5rem" }}>
                {t("careerApp.section3Subtitle")}
              </p>

              <div className="grid gap-4">
                <div>
                  <label
                    htmlFor="linkedin"
                    className="block mb-2 text-sm"
                    style={{ color: "#0B1F3A", fontWeight: 500 }}
                  >
                    {t("careerApp.linkedin")}
                  </label>
                  <input
                    type="url"
                    id="linkedin"
                    name="linkedin"
                    value={formData.linkedin}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg transition-all outline-none"
                    style={{
                      backgroundColor: "#F5F8FF",
                      border: "1px solid rgba(0,0,0,0.1)",
                      color: "#0B1F3A",
                    }}
                    placeholder="https://linkedin.com/in/..."
                  />
                </div>

                <div>
                  <label
                    htmlFor="portfolio"
                    className="block mb-2 text-sm"
                    style={{ color: "#0B1F3A", fontWeight: 500 }}
                  >
                    {t("careerApp.portfolio")}
                  </label>
                  <input
                    type="url"
                    id="portfolio"
                    name="portfolio"
                    value={formData.portfolio}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg transition-all outline-none"
                    style={{
                      backgroundColor: "#F5F8FF",
                      border: "1px solid rgba(0,0,0,0.1)",
                      color: "#0B1F3A",
                    }}
                    placeholder="https://yourportfolio.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="other"
                    className="block mb-2 text-sm"
                    style={{ color: "#0B1F3A", fontWeight: 500 }}
                  >
                    {t("careerApp.otherProfile")}
                  </label>
                  <input
                    type="url"
                    id="other"
                    name="other"
                    value={formData.other}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg transition-all outline-none"
                    style={{
                      backgroundColor: "#F5F8FF",
                      border: "1px solid rgba(0,0,0,0.1)",
                      color: "#0B1F3A",
                    }}
                    placeholder="GitHub, Behance, Dribbble, etc."
                  />
                </div>
              </div>
            </div>

            {/* Section 4: Documents Upload */}
            <div className="mb-10">
              <h2
                style={{
                  color: "#0B1F3A",
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  marginBottom: "0.5rem",
                }}
              >
                {t("careerApp.section4Title")}
              </h2>
              <p style={{ color: "#64748B", fontSize: "0.9rem", marginBottom: "1.5rem" }}>
                {t("careerApp.section4Subtitle")}
              </p>

              <div className="grid gap-4">
                {["cv", "coverLetter", "portfolioDoc"].map((field, idx) => (
                  <div key={field}>
                    <label
                      htmlFor={field}
                      className="block mb-2 text-sm"
                      style={{ color: "#0B1F3A", fontWeight: 500 }}
                    >
                      {field === "cv" ? `${t("careerApp.cv")} *` : field === "coverLetter" ? t("careerApp.coverLetter") : t("careerApp.portfolioDoc")}
                    </label>
                    <div
                      className="relative rounded-lg p-6 border-2 border-dashed transition-all cursor-pointer"
                      style={{
                        backgroundColor: "#F5F8FF",
                        borderColor: formData[field as keyof typeof formData] ? "#00D4AA" : "rgba(0,0,0,0.15)",
                      }}
                    >
                      <input
                        type="file"
                        id={field}
                        name={field}
                        accept=".pdf,.doc,.docx"
                        required={field === "cv"}
                        onChange={(e) => handleFileChange(e, field)}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                      <div className="text-center">
                        <Upload size={32} style={{ color: "#00D4AA", margin: "0 auto 0.5rem" }} />
                        <p style={{ color: "#0B1F3A", fontWeight: 600, fontSize: "0.9rem" }}>
                          {formData[field as keyof typeof formData]
                            ? (formData[field as keyof typeof formData] as File).name
                            : t("careerApp.uploadFile")}
                        </p>
                        <p style={{ color: "#64748B", fontSize: "0.75rem" }}>PDF, DOC, DOCX (max 10MB)</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Section 5: Motivation & Availability */}
            <div className="mb-10">
              <h2
                style={{
                  color: "#0B1F3A",
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  marginBottom: "0.5rem",
                }}
              >
                {t("careerApp.section5Title")}
              </h2>
              <p style={{ color: "#64748B", fontSize: "0.9rem", marginBottom: "1.5rem" }}>
                {t("careerApp.section5Subtitle")}
              </p>

              <div className="grid gap-4">
                <div>
                  <label
                    htmlFor="motivation"
                    className="block mb-2 text-sm"
                    style={{ color: "#0B1F3A", fontWeight: 500 }}
                  >
                    {t("careerApp.motivation")} *
                  </label>
                  <textarea
                    id="motivation"
                    name="motivation"
                    required
                    rows={4}
                    value={formData.motivation}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg transition-all outline-none resize-none"
                    style={{
                      backgroundColor: "#F5F8FF",
                      border: "1px solid rgba(0,0,0,0.1)",
                      color: "#0B1F3A",
                    }}
                    placeholder={t("careerApp.motivationPlaceholder")}
                  />
                </div>

                <div>
                  <label
                    htmlFor="greatFit"
                    className="block mb-2 text-sm"
                    style={{ color: "#0B1F3A", fontWeight: 500 }}
                  >
                    {t("careerApp.greatFit")}
                  </label>
                  <textarea
                    id="greatFit"
                    name="greatFit"
                    rows={4}
                    value={formData.greatFit}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg transition-all outline-none resize-none"
                    style={{
                      backgroundColor: "#F5F8FF",
                      border: "1px solid rgba(0,0,0,0.1)",
                      color: "#0B1F3A",
                    }}
                    placeholder={t("careerApp.greatFitPlaceholder")}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="startDate"
                      className="block mb-2 text-sm"
                      style={{ color: "#0B1F3A", fontWeight: 500 }}
                    >
                      {t("careerApp.startDate")}
                    </label>
                    <input
                      type="date"
                      id="startDate"
                      name="startDate"
                      value={formData.startDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg transition-all outline-none"
                      style={{
                        backgroundColor: "#F5F8FF",
                        border: "1px solid rgba(0,0,0,0.1)",
                        color: "#0B1F3A",
                      }}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="employmentType"
                      className="block mb-2 text-sm"
                      style={{ color: "#0B1F3A", fontWeight: 500 }}
                    >
                      {t("careerApp.employmentType")}
                    </label>
                    <select
                      id="employmentType"
                      name="employmentType"
                      value={formData.employmentType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg transition-all outline-none"
                      style={{
                        backgroundColor: "#F5F8FF",
                        border: "1px solid rgba(0,0,0,0.1)",
                        color: "#0B1F3A",
                      }}
                    >
                      <option value="">Select type</option>
                      <option value="full-time">Full-time</option>
                      <option value="part-time">Part-time</option>
                      <option value="freelance">Freelance</option>
                      <option value="internship">Internship</option>
                      <option value="remote">Remote</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Section 6: Consent */}
            <div className="mb-8">
              <h2
                style={{
                  color: "#0B1F3A",
                  fontSize: "1.5rem",
                  fontWeight: 700,
                  marginBottom: "1.5rem",
                }}
              >
                {t("careerApp.section6Title")}
              </h2>

              <div className="space-y-3">
                {[
                  { name: "accurateInfo", label: t("careerApp.consent1") },
                  { name: "privacyPolicy", label: t("careerApp.consent2") },
                  { name: "contactConsent", label: t("careerApp.consent3") },
                ].map(({ name, label }) => (
                  <label key={name} className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name={name}
                      required
                      checked={formData[name as keyof typeof formData] as boolean}
                      onChange={handleInputChange}
                      className="mt-1"
                      style={{ accentColor: "#00D4AA" }}
                    />
                    <span style={{ color: "#0B1F3A", fontSize: "0.9rem" }}>{label}</span>
                  </label>
                ))}
              </div>

              <div
                className="mt-4 p-3 rounded-lg flex items-center gap-2"
                style={{ backgroundColor: "rgba(0,212,170,0.1)" }}
              >
                <Shield size={16} style={{ color: "#00D4AA" }} />
                <p style={{ color: "#0B1F3A", fontSize: "0.8rem" }}>
                  {t("careerApp.secureInfo")}
                </p>
              </div>
            </div>

            {/* Submit Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 px-8 py-4 rounded-xl transition-all"
                style={{
                  backgroundColor: "#00D4AA",
                  color: "#0B1F3A",
                  fontWeight: 700,
                  fontSize: "1rem",
                  opacity: isSubmitting ? 0.6 : 1,
                  cursor: isSubmitting ? "not-allowed" : "pointer",
                }}
              >
                {isSubmitting ? t("careerApp.submitting") : t("careerApp.submit")}
              </button>
            </div>
          </form>
        </div>

        {/* Why Join Expatrum */}
        <div className="mb-12">
          <h2
            className="text-center mb-8"
            style={{
              color: "#0B1F3A",
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              fontWeight: 700,
            }}
          >
            {t("careerApp.whyJoinTitle")}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  className="rounded-2xl p-6"
                  style={{
                    backgroundColor: "#fff",
                    boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center"
                    style={{ backgroundColor: "rgba(0,212,170,0.1)" }}
                  >
                    <Icon size={24} style={{ color: "#00D4AA" }} />
                  </div>
                  <h3 style={{ color: "#0B1F3A", fontWeight: 700, marginBottom: "0.5rem" }}>
                    {benefit.title}
                  </h3>
                  <p style={{ color: "#64748B", fontSize: "0.9rem", lineHeight: 1.6 }}>
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Company Values */}
        <div
          className="rounded-2xl p-8 mb-12"
          style={{
            backgroundColor: "#fff",
            boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
          }}
        >
          <h2
            className="text-center mb-6"
            style={{
              color: "#0B1F3A",
              fontSize: "1.5rem",
              fontWeight: 700,
            }}
          >
            {t("careerApp.valuesTitle")}
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.text} className="flex items-center gap-3">
                  <Icon size={20} style={{ color: "#00D4AA" }} />
                  <span style={{ color: "#0B1F3A", fontWeight: 600 }}>{value.text}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* FAQ */}
        <div
          className="rounded-2xl p-8"
          style={{
            backgroundColor: "#fff",
            boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
          }}
        >
          <h2
            className="mb-6"
            style={{
              color: "#0B1F3A",
              fontSize: "1.5rem",
              fontWeight: 700,
            }}
          >
            {t("careerApp.faqTitle")}
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-lg overflow-hidden"
                style={{ border: "1px solid rgba(0,0,0,0.1)" }}
              >
                <button
                  onClick={() => setShowFAQ(showFAQ === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-4 text-left transition-all"
                  style={{
                    backgroundColor: showFAQ === idx ? "#F5F8FF" : "#fff",
                  }}
                >
                  <span style={{ color: "#0B1F3A", fontWeight: 600 }}>{faq.q}</span>
                  <ChevronDown
                    size={20}
                    style={{
                      color: "#00D4AA",
                      transform: showFAQ === idx ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.3s",
                    }}
                  />
                </button>
                {showFAQ === idx && (
                  <div className="p-4 pt-0">
                    <p style={{ color: "#64748B", lineHeight: 1.6 }}>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
