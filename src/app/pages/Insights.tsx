import { useState } from "react";
import { TrendingUp, BookOpen, Shield, Clock, Star, ArrowRight, Tag } from "lucide-react";
import { Link } from "react-router";
import { useLang } from "../context/LanguageContext";

const FINANCE_IMG = "https://images.unsplash.com/photo-1768055104923-a6f76e7478c7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNpYWwlMjBwbGFubmluZyUyMGludmVzdG1lbnQlMjBjaGFydHxlbnwxfHx8fDE3NzY2MDM0MTd8MA&ixlib=rb-4.1.0&q=80&w=1080";
const FINTECH_IMG = "https://images.unsplash.com/photo-1720135885007-454165745e21?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBmaW50ZWNoJTIwYXBwJTIwZGFzaGJvYXJkJTIwZGFya3xlbnwxfHx8fDE3NzY2MDM0MTh8MA&ixlib=rb-4.1.0&q=80&w=1080";

type CategoryKey = "all" | "etf" | "tax" | "insurance" | "expat";

export function Insights() {
  const { t } = useLang();
  const [activeCategory, setActiveCategory] = useState<CategoryKey>("all");

  const categories: { key: CategoryKey; label: string }[] = [
    { key: "all", label: t("insights.catAll") },
    { key: "etf", label: t("insights.catEtf") },
    { key: "tax", label: t("insights.catTax") },
    { key: "insurance", label: t("insights.catInsurance") },
    { key: "expat", label: t("insights.catExpat") },
  ];

  const articles = [
    {
      id: 1,
      title: t("insights.a1.title"),
      excerpt: t("insights.a1.excerpt"),
      category: "etf" as CategoryKey,
      tag: t("insights.a1.tag"),
      tagColor: "#F59E0B",
      readTime: t("insights.a1.readTime"),
      date: t("insights.a1.date"),
      icon: TrendingUp,
      iconColor: "#00D4AA",
      featured: true,
      img: FINANCE_IMG,
    },
    {
      id: 2,
      title: t("insights.a2.title"),
      excerpt: t("insights.a2.excerpt"),
      category: "tax" as CategoryKey,
      tag: t("insights.a2.tag"),
      tagColor: "#EF4444",
      readTime: t("insights.a2.readTime"),
      date: t("insights.a2.date"),
      icon: BookOpen,
      iconColor: "#60A5FA",
      featured: true,
      img: FINTECH_IMG,
    },
    {
      id: 3,
      title: t("insights.a3.title"),
      excerpt: t("insights.a3.excerpt"),
      category: "insurance" as CategoryKey,
      tag: t("insights.a3.tag"),
      tagColor: "#A78BFA",
      readTime: t("insights.a3.readTime"),
      date: t("insights.a3.date"),
      icon: Shield,
      iconColor: "#A78BFA",
      featured: false,
      img: null,
    },
    {
      id: 4,
      title: t("insights.a4.title"),
      excerpt: t("insights.a4.excerpt"),
      category: "tax" as CategoryKey,
      tag: t("insights.a4.tag"),
      tagColor: "#F59E0B",
      readTime: t("insights.a4.readTime"),
      date: t("insights.a4.date"),
      icon: BookOpen,
      iconColor: "#60A5FA",
      featured: false,
      img: null,
    },
    {
      id: 5,
      title: t("insights.a5.title"),
      excerpt: t("insights.a5.excerpt"),
      category: "etf" as CategoryKey,
      tag: t("insights.a5.tag"),
      tagColor: "#F59E0B",
      readTime: t("insights.a5.readTime"),
      date: t("insights.a5.date"),
      icon: TrendingUp,
      iconColor: "#00D4AA",
      featured: false,
      img: null,
    },
    {
      id: 6,
      title: t("insights.a6.title"),
      excerpt: t("insights.a6.excerpt"),
      category: "tax" as CategoryKey,
      tag: t("insights.a6.tag"),
      tagColor: "#EF4444",
      readTime: t("insights.a6.readTime"),
      date: t("insights.a6.date"),
      icon: BookOpen,
      iconColor: "#60A5FA",
      featured: false,
      img: null,
    },
    {
      id: 7,
      title: t("insights.a7.title"),
      excerpt: t("insights.a7.excerpt"),
      category: "insurance" as CategoryKey,
      tag: t("insights.a7.tag"),
      tagColor: "#A78BFA",
      readTime: t("insights.a7.readTime"),
      date: t("insights.a7.date"),
      icon: Shield,
      iconColor: "#EF4444",
      featured: false,
      img: null,
    },
    {
      id: 8,
      title: t("insights.a8.title"),
      excerpt: t("insights.a8.excerpt"),
      category: "expat" as CategoryKey,
      tag: t("insights.a8.tag"),
      tagColor: "#EF4444",
      readTime: t("insights.a8.readTime"),
      date: t("insights.a8.date"),
      icon: BookOpen,
      iconColor: "#34D399",
      featured: false,
      img: null,
    },
  ];

  const trendingTopics = [
    t("insights.t1"),
    t("insights.t2"),
    t("insights.t3"),
    t("insights.t4"),
    t("insights.t5"),
    t("insights.t6"),
    t("insights.t7"),
    t("insights.t8"),
  ];

  const filtered = activeCategory === "all"
    ? articles
    : articles.filter((a) => a.category === activeCategory);

  const featured = articles.filter((a) => a.featured);
  const nonFeatured = filtered.filter((a) => !a.featured);

  const catLabelFor = (cat: CategoryKey) =>
    categories.find((c) => c.key === cat)?.label ?? cat;

  return (
    <div style={{ backgroundColor: "#F5F8FF" }}>
      {/* Hero */}
      <section
        className="pt-32 pb-16"
        style={{ backgroundColor: "#0B1F3A" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5"
                style={{ backgroundColor: "rgba(0,212,170,0.1)", border: "1px solid rgba(0,212,170,0.2)" }}
              >
                <BookOpen size={13} style={{ color: "#00D4AA" }} />
                <span className="text-xs" style={{ color: "#00D4AA", fontWeight: 600 }}>
                  {t("insights.badge")}
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
                {t("insights.heading")}
              </h1>
              <p
                className="mt-4 max-w-lg"
                style={{ color: "rgba(255,255,255,0.55)", fontSize: "1.05rem", lineHeight: 1.7 }}
              >
                {t("insights.subtitle")}
              </p>
            </div>
            {/* Trending topics */}
            <div className="max-w-sm">
              <p className="text-xs mb-3" style={{ color: "rgba(255,255,255,0.4)", fontWeight: 600 }}>
                {t("insights.trending")}
              </p>
              <div className="flex flex-wrap gap-2">
                {trendingTopics.map((topic) => (
                  <span
                    key={topic}
                    className="px-3 py-1.5 rounded-full text-xs cursor-pointer transition-colors"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.07)",
                      color: "rgba(255,255,255,0.6)",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Editor's Picks */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-7">
            <Star size={16} style={{ color: "#F59E0B" }} fill="#F59E0B" />
            <h2 style={{ color: "#0B1F3A", fontWeight: 800, fontSize: "1.25rem" }}>
              {t("insights.editorsPicks")}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {featured.map((article) => {
              const Icon = article.icon;
              return (
                <div
                  key={article.id}
                  className="rounded-2xl overflow-hidden flex flex-col"
                  style={{
                    backgroundColor: "#fff",
                    border: "1px solid rgba(0,0,0,0.06)",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                  }}
                >
                  {article.img && (
                    <div className="h-44 overflow-hidden">
                      <img
                        src={article.img}
                        alt={article.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className="px-2.5 py-1 rounded-full text-xs"
                        style={{
                          backgroundColor: `${article.iconColor}15`,
                          color: article.iconColor,
                          fontWeight: 600,
                        }}
                      >
                        {catLabelFor(article.category)}
                      </span>
                      {article.tag && (
                        <span
                          className="px-2.5 py-1 rounded-full text-xs"
                          style={{
                            backgroundColor: `${article.tagColor}15`,
                            color: article.tagColor,
                            fontWeight: 700,
                          }}
                        >
                          {article.tag}
                        </span>
                      )}
                    </div>
                    <h3
                      className="mb-3"
                      style={{ color: "#0B1F3A", fontWeight: 700, fontSize: "1.05rem", lineHeight: 1.4 }}
                    >
                      {article.title}
                    </h3>
                    <p
                      className="text-sm mb-5 flex-1"
                      style={{ color: "#64748B", lineHeight: 1.65 }}
                    >
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="text-xs" style={{ color: "#94A3B8" }}>
                          {article.date}
                        </span>
                        <div className="flex items-center gap-1">
                          <Clock size={12} style={{ color: "#94A3B8" }} />
                          <span className="text-xs" style={{ color: "#94A3B8" }}>
                            {article.readTime} {t("insights.read")}
                          </span>
                        </div>
                      </div>
                      <button
                        className="flex items-center gap-1 text-sm transition-colors"
                        style={{ color: article.iconColor, fontWeight: 600 }}
                      >
                        {t("insights.readMore")} <ArrowRight size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Articles list */}
          <div className="lg:col-span-2">
            {/* Category filter */}
            <div className="flex gap-2 mb-7 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
                  className="px-4 py-2 rounded-full text-sm transition-all"
                  style={{
                    backgroundColor:
                      activeCategory === cat.key ? "#0B1F3A" : "#fff",
                    color: activeCategory === cat.key ? "#fff" : "#64748B",
                    border: `1px solid ${activeCategory === cat.key ? "#0B1F3A" : "rgba(0,0,0,0.08)"}`,
                    fontWeight: activeCategory === cat.key ? 600 : 400,
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            {/* Article cards */}
            <div className="space-y-4">
              {(activeCategory === "all" ? nonFeatured : filtered).map((article) => {
                const Icon = article.icon;
                return (
                  <div
                    key={article.id}
                    className="flex gap-4 p-5 rounded-2xl transition-all cursor-pointer"
                    style={{
                      backgroundColor: "#fff",
                      border: "1px solid rgba(0,0,0,0.06)",
                      boxShadow: "0 2px 10px rgba(0,0,0,0.03)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLDivElement).style.boxShadow = "0 6px 24px rgba(0,0,0,0.08)";
                      (e.currentTarget as HTMLDivElement).style.transform = "translateY(-1px)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 10px rgba(0,0,0,0.03)";
                      (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                    }}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${article.iconColor}12` }}
                    >
                      <Icon size={20} style={{ color: article.iconColor }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2 flex-wrap">
                        <span
                          className="text-xs px-2 py-0.5 rounded-full"
                          style={{
                            backgroundColor: `${article.iconColor}12`,
                            color: article.iconColor,
                            fontWeight: 600,
                          }}
                        >
                          {catLabelFor(article.category)}
                        </span>
                        {article.tag && (
                          <span
                            className="text-xs px-2 py-0.5 rounded-full"
                            style={{
                              backgroundColor: `${article.tagColor}15`,
                              color: article.tagColor,
                              fontWeight: 700,
                            }}
                          >
                            {article.tag}
                          </span>
                        )}
                      </div>
                      <h3
                        className="mb-1.5"
                        style={{ color: "#0B1F3A", fontWeight: 700, fontSize: "0.95rem" }}
                      >
                        {article.title}
                      </h3>
                      <p
                        className="text-sm mb-3 line-clamp-2"
                        style={{ color: "#64748B", lineHeight: 1.6 }}
                      >
                        {article.excerpt}
                      </p>
                      <div className="flex items-center gap-3">
                        <span className="text-xs" style={{ color: "#94A3B8" }}>
                          {article.date}
                        </span>
                        <div className="flex items-center gap-1">
                          <Clock size={11} style={{ color: "#94A3B8" }} />
                          <span className="text-xs" style={{ color: "#94A3B8" }}>
                            {article.readTime}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Newsletter */}
            <div
              className="rounded-2xl p-6"
              style={{ backgroundColor: "#0B1F3A" }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: "rgba(0,212,170,0.15)" }}
              >
                <BookOpen size={18} style={{ color: "#00D4AA" }} />
              </div>
              <h3 style={{ color: "#fff", fontWeight: 700, marginBottom: "8px" }}>
                {t("insights.newsletter.title")}
              </h3>
              <p className="text-sm mb-5" style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.6 }}>
                {t("insights.newsletter.subtitle")}
              </p>
              <input
                type="email"
                placeholder={t("insights.newsletter.placeholder")}
                className="w-full px-4 py-3 rounded-xl mb-3 text-sm outline-none"
                style={{
                  backgroundColor: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "#fff",
                }}
              />
              <button
                className="w-full py-3 rounded-xl text-sm transition-all"
                style={{
                  backgroundColor: "#00D4AA",
                  color: "#0B1F3A",
                  fontWeight: 700,
                }}
              >
                {t("insights.newsletter.button")}
              </button>
            </div>

            {/* Popular topics */}
            <div
              className="rounded-2xl p-6"
              style={{
                backgroundColor: "#fff",
                border: "1px solid rgba(0,0,0,0.06)",
              }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Tag size={15} style={{ color: "#0B1F3A" }} />
                <h3 style={{ color: "#0B1F3A", fontWeight: 700 }}>
                  {t("insights.sidebarTopics")}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {trendingTopics.map((topic) => (
                  <span
                    key={topic}
                    className="px-3 py-1.5 rounded-full text-xs cursor-pointer transition-all"
                    style={{
                      backgroundColor: "#F1F5F9",
                      color: "#374151",
                      border: "1px solid rgba(0,0,0,0.06)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLSpanElement).style.backgroundColor = "#0B1F3A";
                      (e.currentTarget as HTMLSpanElement).style.color = "#fff";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLSpanElement).style.backgroundColor = "#F1F5F9";
                      (e.currentTarget as HTMLSpanElement).style.color = "#374151";
                    }}
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA card */}
            <div
              className="rounded-2xl p-6"
              style={{
                background: "linear-gradient(135deg, #00D4AA 0%, #0099AA 100%)",
              }}
            >
              <h3
                style={{ color: "#0B1F3A", fontWeight: 800, fontSize: "1.05rem", marginBottom: "8px" }}
              >
                {t("insights.sidebarCta.title")}
              </h3>
              <p className="text-sm mb-5" style={{ color: "rgba(11,31,58,0.7)", lineHeight: 1.6 }}>
                {t("insights.sidebarCta.subtitle")}
              </p>
              <Link
                to="/services"
                className="flex items-center justify-between px-4 py-3 rounded-xl transition-all"
                style={{ backgroundColor: "#0B1F3A", color: "#fff", fontWeight: 600 }}
              >
                {t("insights.sidebarCta.button")} <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
