import { createBrowserRouter, Outlet } from "react-router";
import { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { StickyCTA } from "./components/StickyCTA";
import { ContactForm } from "./components/ContactForm";
import { Home } from "./pages/Home";
import { Services } from "./pages/Services";
import { Insights } from "./pages/Insights";
import { Events } from "./pages/Events";
import Partners from "./pages/Partners";
import Careers from "./pages/Careers";
import CareerApplication from "./pages/CareerApplication";

function Root() {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <StickyCTA onOpenContact={() => setIsContactFormOpen(true)} />
      <ContactForm isOpen={isContactFormOpen} onClose={() => setIsContactFormOpen(false)} />
    </div>
  );
}

function NotFound() {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen text-center px-4"
      style={{ backgroundColor: "#F5F8FF" }}
    >
      <div style={{ fontSize: "4rem", marginBottom: "16px" }}>🗺️</div>
      <h1 style={{ color: "#0B1F3A", fontWeight: 800, fontSize: "2rem" }}>
        Page Not Found
      </h1>
      <p className="mt-3 mb-8" style={{ color: "#64748B" }}>
        This page seems to have moved — just like an expat!
      </p>
      <a
        href="/"
        className="px-6 py-3 rounded-xl"
        style={{ backgroundColor: "#00D4AA", color: "#0B1F3A", fontWeight: 700 }}
      >
        Back to Home
      </a>
    </div>
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "services", Component: Services },
      { path: "insights", Component: Insights },
      { path: "events", Component: Events },
      { path: "partners", Component: Partners },
      { path: "careers", Component: Careers },
      { path: "careers/apply", Component: CareerApplication },
      { path: "*", Component: NotFound },
    ],
  },
]);
