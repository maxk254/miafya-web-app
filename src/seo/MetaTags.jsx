import { useEffect } from "react";

/*
 * Usage:
 * <MetaTags
 *   title="Find Doctors in Kenya | MiAfya"
 *   description="Book appointments with verified doctors, nurses and health professionals across Kenya."
 *   path="/healthprofesionals"
 * />
 */

const DEFAULT_TITLE = "MiAfya — Kenya's #1 Health Platform";
const DEFAULT_DESC =
  "Connect with verified doctors, nurses, pharmacists and health facilities across Kenya. Book appointments instantly, find locum jobs, and manage your healthcare — all in one place.";
const BASE_URL = "https://miafya.com";
const OG_IMAGE = `${BASE_URL}/og-image.png`; // add a 1200x630 image to /public // to add this to public folder

const MetaTags = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESC,
  path = "",
  ogImage = OG_IMAGE,
  noIndex = false,
}) => {
  const fullTitle = title === DEFAULT_TITLE ? title : `${title} | MiAfya`;
  const canonical = `${BASE_URL}${path}`;

  useEffect(() => {
    // ── Title ──
    document.title = fullTitle;

    // ── Helper ──
    const setMeta = (selector, content) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement("meta");
        const attr = selector.includes("property") ? "property" : "name";
        const val = selector.match(/["']([^"']+)["']/)?.[1] || "";
        el.setAttribute(attr, val);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };

    const setLink = (rel, href) => {
      let el = document.querySelector(`link[rel="${rel}"]`);
      if (!el) {
        el = document.createElement("link");
        el.setAttribute("rel", rel);
        document.head.appendChild(el);
      }
      el.setAttribute("href", href);
    };

    // ── Standard meta ──
    setMeta(`meta[name="description"]`, description);
    setMeta(
      `meta[name="robots"]`,
      noIndex ? "noindex,nofollow" : "index,follow",
    );

    // ── Canonical ──
    setLink("canonical", canonical);

    // ── Open Graph (WhatsApp, Facebook, LinkedIn previews) ──
    setMeta(`meta[property="og:title"]`, fullTitle);
    setMeta(`meta[property="og:description"]`, description);
    setMeta(`meta[property="og:url"]`, canonical);
    setMeta(`meta[property="og:image"]`, ogImage);
    setMeta(`meta[property="og:type"]`, "website");
    setMeta(`meta[property="og:site_name"]`, "MiAfya");
    setMeta(`meta[property="og:locale"]`, "en_KE");

    // ── Twitter Card ──
    setMeta(`meta[name="twitter:card"]`, "summary_large_image");
    setMeta(`meta[name="twitter:title"]`, fullTitle);
    setMeta(`meta[name="twitter:description"]`, description);
    setMeta(`meta[name="twitter:image"]`, ogImage);
  }, [fullTitle, description, canonical, ogImage, noIndex]);

  return null; // renders nothing — only sets head tags
};

export default MetaTags;
