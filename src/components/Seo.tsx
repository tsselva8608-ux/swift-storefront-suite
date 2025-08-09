import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface SeoProps {
  title: string;
  description?: string;
  canonical?: string;
  structuredData?: Record<string, any>;
}

export const Seo = ({ title, description, canonical, structuredData }: SeoProps) => {
  const location = useLocation();

  useEffect(() => {
    document.title = title;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (description) {
      if (metaDesc) metaDesc.setAttribute('content', description);
      else {
        const m = document.createElement('meta');
        m.name = 'description';
        m.content = description;
        document.head.appendChild(m);
      }
    }

    // Canonical
    const href = canonical || `${window.location.origin}${location.pathname}`;
    let link: HTMLLinkElement | null = document.querySelector('link[rel="canonical"]');
    if (!link) {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      document.head.appendChild(link);
    }
    link.setAttribute('href', href);

    if (structuredData) {
      let script = document.getElementById('ld-json') as HTMLScriptElement | null;
      if (!script) {
        script = document.createElement('script');
        (script as HTMLScriptElement).type = 'application/ld+json';
        script.id = 'ld-json';
        document.head.appendChild(script);
      }
      (script as HTMLScriptElement).textContent = JSON.stringify(structuredData);
    }
  }, [title, description, canonical, location.pathname, structuredData]);

  return null;
};
