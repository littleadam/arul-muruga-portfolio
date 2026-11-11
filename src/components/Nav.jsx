import { useEffect, useRef, useState } from "react";
import { ArrowDownToLine, Menu, X } from "lucide-react";
import { CV_URL, navLinks, profile } from "../data";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("impact");
  const toggleRef = useRef(null);
  const wasOpen = useRef(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (event) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  useEffect(() => {
    if (!open && wasOpen.current) {
      toggleRef.current?.focus();
    }
    wasOpen.current = open;
  }, [open]);

  return (
    <header
      className={`nav ${scrolled ? "is-scrolled" : ""} ${open ? "menu-open" : ""}`}
    >
      <div className="nav-inner container">
        <a
          href="#top"
          className="brand"
          onClick={() => setOpen(false)}
        >
          <span className="brand-mark" aria-hidden="true">
            AM
          </span>
          <span className="brand-text">
            <strong>{profile.name}</strong>
            <span>AI Transformation &amp; Governance Leader</span>
          </span>
        </a>

        <nav className="nav-links" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={active === link.id ? "is-active" : ""}
              aria-current={active === link.id ? "true" : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <a className="nav-cv" href={CV_URL} download title="EU-format CV (PDF)">
            <span>Download EU CV</span>
            <ArrowDownToLine size={14} strokeWidth={1.8} />
          </a>
          <button
            ref={toggleRef}
            type="button"
            className="nav-toggle"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close navigation" : "Open navigation"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`mobile-menu ${open ? "is-open" : ""}`}
      >
        <nav aria-label="Mobile">
          {navLinks.map((link, index) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setOpen(false)}
              style={{ "--menu-delay": `${index * 55}ms` }}
            >
              <span className="mobile-index">0{index + 1}</span>
              {link.label}
            </a>
          ))}
        </nav>
        <a
          className="btn btn-primary mobile-cv"
          href={CV_URL}
          download
          title="EU-format CV (PDF)"
          onClick={() => setOpen(false)}
        >
          Download EU CV <ArrowDownToLine size={16} />
        </a>
        <p className="mobile-meta">
          Chennai, India
          <span aria-hidden="true">·</span>
          LinkedIn / GitHub
        </p>
      </div>
    </header>
  );
}
