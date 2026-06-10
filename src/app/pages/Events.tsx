import { Calendar, MapPin, Users, Video, Building2, ArrowRight, Clock, Star } from "lucide-react";
import { Link } from "react-router";

const EXPAT_IMG = "https://images.unsplash.com/photo-1591115765373-5207764f72e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleHBhdCUyMGNvbW11bml0eSUyMGludGVybmF0aW9uYWwlMjBwcm9mZXNzaW9uYWxzJTIwbWVldGluZ3xlbnwxfHx8fDE3NzY2MDM0MTh8MA&ixlib=rb-4.1.0&q=80&w=1080";

const upcomingEvents = [
  {
    title: "Expat Finance Bootcamp: Berlin",
    type: "Workshop",
    format: "In-Person",
    date: "May 10, 2026",
    time: "10:00 – 14:00",
    location: "WeWork Rosenthaler Platz, Berlin",
    spots: "18 spots left",
    price: "Free",
    color: "#00D4AA",
    bg: "rgba(0,212,170,0.1)",
    icon: Building2,
    description:
      "A half-day intensive covering health insurance setup, ETF portfolio basics, and German tax fundamentals. Perfect for expats in their first year.",
    tags: ["Health Insurance", "ETFs", "Tax Basics"],
  },
  {
    title: "Ask Me Anything: German Insurance Explained",
    type: "Webinar",
    format: "Online",
    date: "May 17, 2026",
    time: "18:00 – 19:30",
    location: "Zoom (link upon registration)",
    spots: "Open",
    price: "Free",
    color: "#60A5FA",
    bg: "rgba(96,165,250,0.1)",
    icon: Video,
    description:
      "A live Q&A session where our experts answer your most pressing questions about BU, Haftpflicht, and Krankenversicherung — in plain English.",
    tags: ["BU Insurance", "Haftpflicht", "Q&A"],
  },
  {
    title: "ETF Investment Strategy: From Zero to Sparplan",
    type: "Workshop",
    format: "In-Person",
    date: "May 24, 2026",
    time: "09:00 – 13:00",
    location: "Impact Hub, Munich",
    spots: "12 spots left",
    price: "Free",
    color: "#A78BFA",
    bg: "rgba(167,139,250,0.1)",
    icon: Building2,
    description:
      "Hands-on workshop walking you through opening a broker account, choosing your ETF allocation, and setting up an automated monthly savings plan.",
    tags: ["ETF Investing", "Sparplan", "Portfolio"],
  },
  {
    title: "Tax Optimization Masterclass for Expats",
    type: "Masterclass",
    format: "Online",
    date: "June 3, 2026",
    time: "17:30 – 19:00",
    location: "Zoom + Recording Provided",
    spots: "Open",
    price: "Free",
    color: "#F59E0B",
    bg: "rgba(245,158,11,0.1)",
    icon: Video,
    description:
      "Deep dive into German tax law for expats: double taxation treaties, deductibles, Steuerklasse optimization, and common filing mistakes to avoid.",
    tags: ["Tax Strategy", "Steuerklasse", "Deductibles"],
  },
  {
    title: "Expat Networking Evening: Finance & Career",
    type: "Networking",
    format: "In-Person",
    date: "June 12, 2026",
    time: "19:00 – 22:00",
    location: "Soho House, Berlin",
    spots: "40 spots left",
    price: "Free",
    color: "#34D399",
    bg: "rgba(52,211,153,0.1)",
    icon: Users,
    description:
      "Connect with other English-speaking expats in Germany over drinks, share experiences, and meet our Expatrum advisors in a relaxed setting.",
    tags: ["Networking", "Community", "Berlin"],
  },
  {
    title: "Retirement Planning for Expats Under 40",
    type: "Workshop",
    format: "Hybrid",
    date: "June 20, 2026",
    time: "10:00 – 12:30",
    location: "Frankfurt + Zoom",
    spots: "22 spots left",
    price: "Free",
    color: "#F97316",
    bg: "rgba(249,115,22,0.1)",
    icon: Building2,
    description:
      "Why starting your Altersvorsorge strategy now — even in your 30s — makes a dramatic difference. Covers Riester, ETF pensions, and private options.",
    tags: ["Altersvorsorge", "Riester", "Retirement"],
  },
];

const partners = [
  { name: "InterNations", type: "Expat Community", logo: "🌍" },
  { name: "HSBC Expat", type: "Banking Partner", logo: "🏦" },
  { name: "Trade Republic", type: "Broker Partner", logo: "📈" },
  { name: "Berlin Expat Hub", type: "Community", logo: "🏙️" },
  { name: "TechBerlin", type: "Tech Network", logo: "💻" },
  { name: "Expats in Germany", type: "Facebook Group", logo: "👥" },
];

const formatColors: Record<string, string> = {
  "In-Person": "#00D4AA",
  "Online": "#60A5FA",
  "Hybrid": "#A78BFA",
};

export function Events() {
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
                  Free Events for Expats in Germany
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
                Learn, Connect, and Grow — Together
              </h1>
              <p
                className="mt-5 max-w-lg"
                style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.05rem", lineHeight: 1.7 }}
              >
                Workshops, webinars, and networking events designed specifically for
                English-speaking expats navigating financial life in Germany.
              </p>
              <div className="flex gap-4 mt-8 flex-wrap">
                {["All Events Free", "English Language", "Expert-Led"].map((item) => (
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
              Upcoming Events
            </h2>
            <span
              className="px-3 py-1.5 rounded-full text-xs"
              style={{ backgroundColor: "rgba(0,212,170,0.1)", color: "#00D4AA", fontWeight: 700 }}
            >
              {upcomingEvents.length} events this quarter
            </span>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {upcomingEvents.map((event) => {
              const Icon = event.icon;
              return (
                <div
                  key={event.title}
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
                          backgroundColor: `${formatColors[event.format]}15`,
                          color: formatColors[event.format],
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
                        {event.price}
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

                  {/* Tags */}
                  <div className="flex gap-1.5 flex-wrap mb-5">
                    {event.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-full text-xs"
                        style={{
                          backgroundColor: "#F1F5F9",
                          color: "#374151",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <button
                    className="flex items-center justify-center gap-2 py-3 rounded-xl transition-all text-sm"
                    style={{
                      backgroundColor: event.color,
                      color: event.color === "#F59E0B" ? "#0B1F3A" : "#0B1F3A",
                      fontWeight: 700,
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.opacity = "0.85";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLButtonElement).style.opacity = "1";
                    }}
                  >
                    Register Free <ArrowRight size={15} />
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
                  Corporate Partnerships
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
                Bring Financial Literacy to Your Company's Expat Team
              </h2>
              <p
                className="mt-4 mb-8"
                style={{ color: "rgba(255,255,255,0.55)", fontSize: "1.05rem", lineHeight: 1.7 }}
              >
                We partner with companies across Germany to deliver custom financial
                literacy workshops for their international employees — from relocation
                basics to investment strategy.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Custom workshop design for your team",
                  "English-language delivery",
                  "HR onboarding integration",
                  "Follow-up 1:1 consultations",
                  "Branded financial resource kits",
                ].map((item) => (
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
                Inquire About Partnership <ArrowRight size={16} />
              </Link>
            </div>

            {/* Partners */}
            <div>
              <p
                className="text-sm mb-6"
                style={{ color: "rgba(255,255,255,0.4)", fontWeight: 600, letterSpacing: "0.06em" }}
              >
                COMMUNITY PARTNERS & COLLABORATIONS
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
              Our Financial Literacy Mission
            </h2>
            <p
              className="mt-4 max-w-xl mx-auto"
              style={{ color: "#64748B", lineHeight: 1.7 }}
            >
              We believe every expat deserves access to clear, honest financial
              education — not just the wealthy few.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                icon: "🎓",
                title: "Expat Workshops",
                desc: "Monthly hands-on workshops in Berlin, Munich, Frankfurt, and Hamburg — plus online for the rest of Germany.",
                stat: "24 workshops / year",
                color: "#00D4AA",
              },
              {
                icon: "📺",
                title: "Financial Literacy Events",
                desc: "Free online webinars covering everything from ETF basics to advanced tax strategies. Recordings always available.",
                stat: "50+ hours of free content",
                color: "#60A5FA",
              },
              {
                icon: "🤝",
                title: "Community Support",
                desc: "Join our WhatsApp community of 3,000+ expats sharing tips, recommendations, and experiences about financial life in Germany.",
                stat: "3,000+ active members",
                color: "#A78BFA",
              },
            ].map((item) => (
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
