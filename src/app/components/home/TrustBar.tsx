import { Star } from "lucide-react";
import { useEffect, useRef } from "react";

const testimonials = [
  {
    name: "Noor",
    role: "Hausarzt",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    text: "Loved them, transparent in choosing dates. They actually told me to keep my old policy because mine was good. Nice!",
    rating: 4,
  },
  {
    name: "Mazen B.",
    role: "Radiologe, Frankfurt",
    avatar: "https://images.unsplash.com/photo-1610920578961-f5bc18f2d9c5?w=100&h=100&fit=crop",
    text: "Switched my private health insurance with their help. Better coverage, lower premium, zero hassle!",
    rating: 5,
  },
  {
    name: "Aisha K.",
    role: "Nutritionist, Berlin",
    avatar: "https://images.unsplash.com/photo-1587012964352-217d04a0cdce?w=100&h=100&fit=crop",
    text: "It's a maze over the tax stuff. They took a clear yearly plan. SAVED.",
    rating: 4,
  },
  {
    name: "Priya S.",
    role: "Data Scientist, Munich",
    avatar: "https://images.unsplash.com/photo-1594089426440-ab4513b4d0d0?w=100&h=100&fit=crop",
    text: "Finally someone explained BU insurance in a way that made sense. Got full coverage in 2 weeks.",
    rating: 5,
  },
  {
    name: "Taim O.",
    role: "Marketing Lead, Hamburg",
    avatar: "https://images.unsplash.com/photo-1561521693-a40d8da40900?w=100&h=100&fit=crop",
    text: "My tax refund increased by €4,100 after following Expatrum's strategy. Incredible.",
    rating: 5,
  },
  {
    name: "Mei L.",
    role: "Research Scientist, Frankfurt",
    avatar: "https://images.unsplash.com/photo-1662643815709-7963b1a25511?w=100&h=100&fit=crop",
    text: "The roadmap approach made everything so clear. I finally have a plan I feel confident in.",
    rating: 5,
  },
];

export function TrustBar() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5;

    const animate = () => {
      scrollPosition += scrollSpeed;

      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }

      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  const avgRating = 4.9;
  const totalReviews = 27;

  return (
    <section className="py-16 overflow-hidden" style={{ backgroundColor: "#1a3a52" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-xs mb-2" style={{ color: "rgba(255,255,255,0.6)" }}>
              ★ What clients say
            </p>
            <h2
              style={{
                color: "#fff",
                fontSize: "clamp(1.3rem, 3vw, 1.8rem)",
                fontWeight: 700,
              }}
            >
              Loved by expats across Germany
            </h2>
          </div>
          <div className="text-right">
            <div className="flex items-center gap-2 justify-end mb-1">
              <span style={{ color: "#fff", fontSize: "2rem", fontWeight: 800 }}>
                {avgRating}
              </span>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} fill="#F59E0B" style={{ color: "#F59E0B" }} />
                ))}
              </div>
            </div>
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.5)" }}>
              Based on {totalReviews} reviews
            </p>
          </div>
        </div>

        {/* Scrolling Cards */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-hidden"
          style={{
            scrollBehavior: "auto",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {/* Duplicate testimonials for infinite scroll effect */}
          {[...testimonials, ...testimonials].map((t, index) => {
            const uniqueKey = `testimonial-${index}`;
            return (
              <div
                key={uniqueKey}
                className="flex-shrink-0 rounded-xl p-5"
                style={{
                  backgroundColor: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  width: "320px",
                  backdropFilter: "blur(10px)",
                }}
              >
              {/* Profile */}
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div style={{ color: "#fff", fontWeight: 600, fontSize: "0.9rem" }}>
                    {t.name}
                  </div>
                  <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.75rem" }}>
                    {t.role}
                  </div>
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={`${uniqueKey}-star-${i}`}
                    size={14}
                    fill={i < t.rating ? "#F59E0B" : "transparent"}
                    style={{ color: i < t.rating ? "#F59E0B" : "rgba(255,255,255,0.2)" }}
                  />
                ))}
              </div>

              {/* Review Text */}
              <p
                className="text-sm"
                style={{
                  color: "rgba(255,255,255,0.8)",
                  lineHeight: 1.6,
                }}
              >
                "{t.text}"
              </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
