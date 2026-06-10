import { useEffect } from "react";
import { RouterProvider } from "react-router";
import { router } from "./routes";
import { LanguageProvider } from "./context/LanguageContext";

const FAVICON_SVG = `<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 10C0 4.47716 4.47715 0 10 0H21.9931C27.516 0 31.9931 4.47715 31.9931 10V21.9931C31.9931 27.516 27.516 31.9931 21.9931 31.9931H10C4.47716 31.9931 0 27.516 0 21.9931V10Z" fill="#00D4AA"/><g clip-path="url(#clip0)"><path d="M7.41101 21.9992L16.4379 12.1473L18.6513 14.2253L23.911 8.49918" stroke="#0B1F3A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M18.5198 18.0497L11.911 18.0497" stroke="#0B1F3A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M18.5198 22.0497L7.91101 22.0497" stroke="#0B1F3A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M19.1034 7.99918H24.2145V13.4992" stroke="#0B1F3A" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0"><rect width="23" height="22" fill="white" transform="translate(4.49231 4.99657)"/></clipPath></defs></svg>`;

export default function App() {
  useEffect(() => {
    const svgDataUrl = `data:image/svg+xml,${encodeURIComponent(FAVICON_SVG)}`;
    let link = document.querySelector<HTMLLinkElement>("link[rel~='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }
    link.type = "image/svg+xml";
    link.href = svgDataUrl;

    let robots = document.querySelector<HTMLMetaElement>("meta[name='robots']");
    if (!robots) {
      robots = document.createElement("meta");
      robots.name = "robots";
      document.head.appendChild(robots);
    }
    robots.content = "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1";

    let description = document.querySelector<HTMLMetaElement>("meta[name='description']");
    if (!description) {
      description = document.createElement("meta");
      description.name = "description";
      document.head.appendChild(description);
    }
    description.content = "Financial planning for English-speaking expats in Germany. ETF investing, pension planning, tax guidance, and health insurance — in English.";
  }, []);

  return (
    <LanguageProvider>
      <RouterProvider router={router} />
    </LanguageProvider>
  );
}
