import { useState } from "react";
import { Hero } from "../components/home/Hero";
import { FinancialRoadmap } from "../components/home/FinancialRoadmap";
import { PlanPath } from "../components/home/PlanPath";
import { CaseStudy } from "../components/home/CaseStudy";
import { ETFDashboard } from "../components/home/ETFDashboard";
import { TrustBar } from "../components/home/TrustBar";
import { ContactForm } from "../components/ContactForm";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

export function Home() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  return (
    <div>
      <Hero />
      <FinancialRoadmap />
      <PlanPath />
      <CaseStudy />
      <ETFDashboard />
      <TrustBar />
      {/* Final CTA Section */}
      <section
        className="py-24 relative overflow-hidden"
        style={{ backgroundColor: "#0B1F3A" }}
      >
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 50%, rgba(0,212,170,0.8) 0%, transparent 60%), radial-gradient(circle at 70% 50%, rgba(96,165,250,0.5) 0%, transparent 60%)",
          }}
        />
        <div className="relative max-w-3xl mx-auto text-center px-4">
          <h2
            style={{
              color: "#fff",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 800,
              lineHeight: 1.2,
            }}
          >
            Ready to Take Control of Your Financial Future?
          </h2>
          <p
            className="mt-5 mb-10"
            style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.1rem", lineHeight: 1.7 }}
          >
            Join 2,400+ expats who have built a clear, optimized financial plan
            in Germany. Your first consultation is free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setIsContactFormOpen(true)}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl transition-all"
              style={{
                backgroundColor: "#00D4AA",
                color: "#0B1F3A",
                fontWeight: 700,
                fontSize: "1.05rem",
                boxShadow: "0 4px 20px rgba(0,212,170,0.35)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 8px 30px rgba(0,212,170,0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,212,170,0.35)";
              }}
            >
              Book Free Consultation
              <ArrowRight size={18} />
            </button>
            <Link
              to="/insights"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl transition-all"
              style={{
                border: "1px solid rgba(255,255,255,0.15)",
                color: "rgba(255,255,255,0.8)",
                fontWeight: 500,
              }}
            >
              Explore Insights Hub
            </Link>
          </div>
          <p className="mt-6 text-sm" style={{ color: "rgba(255,255,255,0.3)" }}>
            No commitment · No upfront cost · Transparent guidance
          </p>
        </div>
      </section>
      <ContactForm isOpen={isContactFormOpen} onClose={() => setIsContactFormOpen(false)} />
    </div>
  );
}
