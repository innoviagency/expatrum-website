import { Star } from "lucide-react";
import { useEffect, useRef } from "react";
import { useLang } from "../../context/LanguageContext";

export function TrustBar() {
  const { t } = useLang();
  const scrollRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      name: t("testimonial.1.name"),
      role: t("testimonial.1.role"),
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      text: t("testimonial.1.text"),
      rating: 4,
    },
    {
      name: t("testimonial.2.name"),
      role: t("testimonial.2.role"),
      avatar: "https://images.unsplash.com/photo-1610920578961-f5bc18f2d9c5?w=100&h=100&fit=crop",
      text: t("testimonial.2.text"),
      rating: 5,
    },
    {
      name: t("testimonial.3.name"),
      role: t("testimonial.3.role"),
      avatar: "https://images.unsplash.com/photo-1587012964352-217d04a0cdce?w=100&h=100&fit=crop",
      text: t("testimonial.3.text"),
      rating: 4,
    },
    {
      name: t("testimonial.4.name"),
      role: t("testimonial.4.role"),
      avatar: "https://images.unsplash.com/photo-1594089426440-ab4513b4d0d0?w=100&h=100&fit=crop",
      text: t("testimonial.4.text"),
      rating: 5,
    },
    {
      name: t("testimonial.5.name"),
      role: t("testimonial.5.role"),
      avatar: "https://images.unsplash.com/photo-1561521693-a40d8da40900?w=100&h=100&fit=crop",
      text: t("testimonial.5.text"),
      rating: 5,
    },
    {
      name: t("testimonial.6.name"),
      role: t("testimonial.6.role"),
      avatar: "https://images.unsplash.com/photo-1662643815709-7963b1a25511?w=100&h=100&fit=crop",
      text: t("testimonial.6.text"),
      rating: 5,
    },
  ];

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
              {t("trust.whatClients")}
            </p>
            <h2
              style={{
                color: "#fff",
                fontSize: "clamp(1.3rem, 3vw, 1.8rem)",
                fontWeight: 700,
              }}
            >
              {t("trust.heading")}
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
              {t("trust.basedOn").replace("{n}", String(totalReviews))}
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
          {[...testimonials, ...testimonials].map((testimonial, index) => {
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
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div style={{ color: "#fff", fontWeight: 600, fontSize: "0.9rem" }}>
                      {testimonial.name}
                    </div>
                    <div style={{ color: "rgba(255,255,255,0.5)", fontSize: "0.75rem" }}>
                      {testimonial.role}
                    </div>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={`${uniqueKey}-star-${i}`}
                      size={14}
                      fill={i < testimonial.rating ? "#F59E0B" : "transparent"}
                      style={{ color: i < testimonial.rating ? "#F59E0B" : "rgba(255,255,255,0.2)" }}
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
                  "{testimonial.text}"
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
