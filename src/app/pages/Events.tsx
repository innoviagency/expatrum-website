import { Calendar, MapPin, Users, Video, Building2, ArrowRight, Clock, Star } from "lucide-react";
import { Link } from "react-router";
import { useLang } from "../context/LanguageContext";

const EXPAT_IMG = "https://images.unsplash.com/photo-1591115765373-5207764f72e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleHBhdCUyMGNvbW11bml0eSUyMGludGVybmF0aW9uYWwlMjBwcm9mZXNzaW9uYWxzJTIwbWVldGluZ3xlbnwxfHx8fDE3NzY2MDM0MTh8MA&ixlib=rb-4.1.0&q=80&w=1080";

const partners = [
  { name: "InterNations", type: "Expat Community", logo: "🌍" },
  { name: "HSBC Expat", type: "Banking Partner", logo: "🏦" },
  { name: "Trade Republic", type: "Broker Partner", logo: "📈" },
  { name: "Berlin Expat Hub", type: "Community", logo: "🏙️" },
  { name: "TechBerlin", type: "Tech Network", logo: "💻" },
  { name: "Expats in Germany", type: "Facebook Group", logo: "👥" },
];

export function Events() {
  const { t } = useLang();

  const upcomingEvents = [
    {
      id: "e1",
      title: t("events.e1.title"),
      format: t("events.e1.format"),
      date: t("events.e1.date"),
      time: t("events.e1.time"),
      location: t("events.e1.location"),
      spots: t("events.e1.spots"),
      color: "#00D4AA",
      bg: "rgba(0,212,170,0.1)",
      icon: Building2,
      description: t("events.e1.desc"),
    },
    {
      id: "e2",
      title: t("events.e2.title"),
      format: t("events.e2.format"),
      date: t("events.e2.date"),
      time: t("events.e2.time"),
      location: t("events.e2.location"),
      spots: t("events.e2.spots"),
      color: "#60A5FA",
      bg: "rgba(96,165,250,0.1)",
      icon: Video,
      description: t("events.e2.desc"),
    },
    {
      id: "e3",
      title: t("events.e3.title"),
      format: t("events.e3.format"),
      date: t("events.e3.date"),
      time: t("events.e3.time"),
      location: t("events.e3.location"),
      spots: t("events.e3.spots"),
      color: "#A78BFA",
      bg: "rgba(167,139,250,0.1)",
      icon: Building2,
      description: t("events.e3.desc"),
    },
    {
      id: "e4",
      title: t("events.e4.title"),
      format: t("events.e4.format"),
      date: t("events.e4.date"),
      time: t("events.e4.time"),
      location: t("events.e4.location"),
      spots: t("events.e4.spots"),
      color: "#34D399",
      bg: "rgba(52,211,153,0.1)",
      icon: Users,
      description: t("events.e4.desc"),
    },
    {
      id: "e5",
      title: t("events.e5.title"),
      format: t("events.e5.format"),
      date: t("events.e5.date"),
      time: t("events.e5.time"),
      location: t("events.e5.location"),
      spots: t("events.e5.spots"),
      color: "#F59E0B",
      bg: "rgba(245,158,11,0.1)",
      icon: Video,
      description: t("events.e5.desc"),
    },
    {
      id: "e6",
      title: t("events.e6.title"),
      format: t("events.e6.format"),
      date: t("events.e6.date"),
      time: t("events.e6.time"),
      location: t("events.e6.location"),
      spots: t("events.e6.spots"),
      color: "#F97316",
      bg: "rgba(249,115,22,0.1)",
      icon: Building2,
      description: t("events.e6.desc"),
    },
  ];

  const formatColorMap: Record<string, string> = {
    [t("events.format.inPerson")]: "#00D4AA",
    [t("events.format.online")]: "#60A5FA",
    [t("events.format.hybrid")]: "#A78BFA",
  };

  const features = [
    t("events.feature1"),
    t("events.feature2"),
    t("events.feature3"),
  ];

  const corporateFeatures = [
    t("events.corporate.f1"),
    t("events.corporate.f2"),
    t("events.corporate.f3"),
    t("events.corporate.f4"),
    t("events.corporate.f5"),
  ];

  const missionCards = [
    {
      icon: "🎓",
      title: t("events.m1.title"),
      desc: t("events.m1.desc"),
      stat: t("events.m1.stat"),
      color: "#00D4AA",
    },
    {
      icon: "📺",
      title: t("events.m2.title"),
      desc: t("events.m2.desc"),
      stat: t("events.m2.stat"),
      color: "#60A5FA",
    },
    {
      icon: "🤝",
      title: t("events.m3.title"),
      desc: t("events.m3.desc"),
      stat: t("events.m3.stat"),
      color: "#A78BFA",
    },
  ];

  return (
    <div style={{ backgroundColor: "#F5F8FF" }}>
      {/* Hero */}
      <section
        className="pt-32 pb-0 relative overflow-hidden"
        style={{ backgroundColor: "#0B1F3A" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                style={{ backgroundColor: "rgba(0,212,170,0.1)", border: "1px solid rgba(0,212,170,0.2)" }}
              >
                <Calendar size={13} style={{ color: "#00D4AA" }} />
                <span className="text-xs" style={{ color: "#00D4AA", fontWeight: 600 }}>
                  {t("events.badge")}
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
                {t("events.heading")}
              </h1>
              <p
                className="mt-5 max-w-lg"
                style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.05rem", lineHeight: 1.7 }}
              >
                {t("events.subtitle")}
              </p>
              <div className="flex gap-4 mt-8 flex-wrap">
                {features.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center"
                      style={{ backgroundColor: "rgba(0,212,170,0.2)" }}
                    >
                      <Star size={10} style={{ color: "#00D4AA" }} fill="#00D4AA" />
                    </div>
                    <span className="text-sm" style={{ color: "rgba(255,255,255,0.65)" }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="rounded-2xl overflow-hidden" style={{ height: "300px" }}>
                <img src={EXPAT_IMG} alt="Expat community" className="w-full h-full object-cover" style={{ opacity: 0.8 }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-10">
            <h2 style={{ color: "#0B1F3A", fontWeight: 800, fontSize: "1.5rem" }}>
              {t("events.upcoming")}
            </h2>
            <span
              className="px-3 py-1.5 rounded-full text-xs"
              style={{ backgroundColor: "rgba(0,212,170,0.1)", color: "#00D4AA", fontWeight: 700 }}
            >
              {t("events.thisQuarter").replace("{n}", String(upcomingEvents.length))}
            </span>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => {
              const Icon = event.icon;
              const formatColor = formatColorMap[event.format] ?? "#00D4AA";
              return (
                <div
                  key={event.id}
                  className="rounded-2xl p-6 flex flex-col transition-all"
                  style={{
                    backgroundColor: "#fff",
                    border: "1px solid rgba(0,0,0,0.06)",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "0 8px 30px rgba(0,0,0,0.1)";
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.boxShadow = "0 2px 12px rgba(0,0,0,0.04)";
                    (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                  }}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: event.bg }}
                    >
                      <Icon size={22} style={{ color: event.color }} />
                    </div>
                    <div className="flex gap-2">
                      <span
                        className="px-2.5 py-1 rounded-full text-xs"
                        style={{
                          backgroundColor: `${formatColor}15`,
                          color: formatColor,
                          fontWeight: 600,
                        }}
                      >
                        {event.format}
                      </span>
                      <span
                        className="px-2.5 py-1 rounded-full text-xs"
                        style={{
                          backgroundColor: "rgba(0,212,170,0.1)",
                          color: "#00D4AA",
                          fontWeight: 700,
                        }}
                      >
                        Free
                      </span>
                    </div>
                  </div>

                  <h3
                    className="mb-3"
                    style={{ color: "#0B1F3A", fontWeight: 700, fontSize: "1rem", lineHeight: 1.4 }}
                  >
                    {event.title}
                  </h3>
                  <p
                    className="text-sm mb-4 flex-1"
                    style={{ color: "#64748B", lineHeight: 1.65 }}
                  >
                    {event.description}
                  </p>

                  {/* Meta info */}
                  <div className="space-y-2 mb-5">
                    {[
                      { icon: Calendar, text: event.date },
                      { icon: Clock, text: event.time },
                      { icon: MapPin, text: event.location },
                      { icon: Users, text: event.spots },
                    ].map(({ icon: MetaIcon, text }) => (
                      <div key={text} className="flex items-center gap-2">
                        <MetaIcon size={13} style={{ color: "#94A3B8", flexShrink: 0 }} />
                        <span className="text-xs" style={{ color: "#64748B" }}>
                          {text}
                        </span>
                      </div>
                    ))}
                  </div>

                  <button
                    className="flex items-center justify-center gap-2 py-3 rounded-xl transition-all text-sm"
                    style={{
                      backgroundColor: event.color,
                      color: "#0B1F3A",
                      fontWeight: 700,
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.opacity = "0.85";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.opacity = "1";
                    }}
                  >
                    {t("events.register")} <ArrowRight size={15} />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Corporate Partnerships */}
      <section className="py-20" style={{ backgroundColor: "#0B1F3A" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                style={{ backgroundColor: "rgba(0,212,170,0.1)", border: "1px solid rgba(0,212,170,0.2)" }}
              >
                <Building2 size={13} style={{ color: "#00D4AA" }} />
                <span className="text-xs" style={{ color: "#00D4AA", fontWeight: 600 }}>
                  {t("events.corporate.badge")}
                </span>
              </div>
              <h2
                style={{
                  color: "#fff",
                  fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                  fontWeight: 800,
                  lineHeight: 1.2,
                }}
              >
                {t("events.corporate.title")}
              </h2>
              <p
                className="mt-4 mb-8"
                style={{ color: "rgba(255,255,255,0.55)", fontSize: "1.05rem", lineHeight: 1.7 }}
              >
                {t("events.corporate.subtitle")}
              </p>
              <ul className="space-y-3 mb-8">
                {corporateFeatures.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: "rgba(0,212,170,0.15)" }}
                    >
                      <span style={{ color: "#00D4AA", fontSize: "0.55rem", fontWeight: 800 }}>✓</span>
                    </div>
                    <span className="text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl transition-all"
                style={{
                  backgroundColor: "#00D4AA",
                  color: "#0B1F3A",
                  fontWeight: 700,
                }}
              >
                {t("events.corporate.cta")} <ArrowRight size={16} />
              </Link>
            </div>

            {/* Partners */}
            <div>
              <p
                className="text-sm mb-6"
                style={{ color: "rgba(255,255,255,0.4)", fontWeight: 600, letterSpacing: "0.06em" }}
              >
                {t("events.partners.label")}
              </p>
              <div className="grid grid-cols-2 gap-4">
                {partners.map((p) => (
                  <div
                    key={p.name}
                    className="flex items-center gap-3 px-4 py-4 rounded-xl"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <span style={{ fontSize: "1.6rem" }}>{p.logo}</span>
                    <div>
                      <div style={{ color: "#fff", fontWeight: 600, fontSize: "0.9rem" }}>
                        {p.name}
                      </div>
                      <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.75rem" }}>
                        {p.type}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financial Literacy Mission */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 style={{ color: "#0B1F3A", fontWeight: 800, fontSize: "1.6rem" }}>
              {t("events.mission.heading")}
            </h2>
            <p
              className="mt-4 max-w-xl mx-auto"
              style={{ color: "#64748B", lineHeight: 1.7 }}
            >
              {t("events.mission.subtitle")}
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {missionCards.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl p-7 text-center"
                style={{
                  backgroundColor: "#fff",
                  border: "1px solid rgba(0,0,0,0.06)",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
                }}
              >
                <div style={{ fontSize: "2.5rem", marginBottom: "12px" }}>
                  {item.icon}
                </div>
                <h3 style={{ color: "#0B1F3A", fontWeight: 700, marginBottom: "10px" }}>
                  {item.title}
                </h3>
                <p className="text-sm mb-4" style={{ color: "#64748B", lineHeight: 1.65 }}>
                  {item.desc}
                </p>
                <span
                  className="px-3 py-1.5 rounded-full text-xs"
                  style={{
                    backgroundColor: `${item.color}15`,
                    color: item.color,
                    fontWeight: 700,
                  }}
                >
                  {item.stat}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
