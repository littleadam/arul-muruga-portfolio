import {
  ArrowDownToLine,
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { CV_LOCALES, profile } from "../data";
import Reveal from "./Reveal";

const contactLinks = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
    external: false,
  },
  {
    label: "Phone",
    value: profile.phoneDisplay,
    href: `tel:${profile.phone}`,
    icon: Phone,
    external: false,
  },
  {
    label: "WhatsApp",
    value: `${profile.phoneDisplay} · message me`,
    href: profile.whatsapp,
    icon: MessageCircle,
    external: true,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/aruldswamy",
    href: profile.linkedin,
    icon: Linkedin,
    external: true,
  },
  {
    label: "GitHub",
    value: "github.com/littleadam",
    href: profile.github,
    icon: Github,
    external: true,
  },
];

const [englishCv, ...otherCvs] = CV_LOCALES;

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact-grid">
          <Reveal className="contact-copy">
            <p className="eyebrow">08 — Contact</p>
            <h2 className="contact-title">
              Ready to drive <em>AI at scale</em> for your business.
            </h2>
            <p className="contact-lede">
              Open to Technical Programme Manager, Group Technical Architect and
              AI Transformation leadership roles where AI adoption, engineering
              productivity, and responsible governance need to translate into
              measurable business outcomes.
            </p>

            <a
              className="btn btn-primary contact-cta"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer noopener"
            >
              Connect on LinkedIn for opportunities
              <ArrowUpRight size={16} strokeWidth={1.9} />
            </a>

            <p className="contact-location">
              <MapPin size={14} strokeWidth={1.8} aria-hidden="true" />
              {profile.location}
              <span aria-hidden="true">·</span>
              IST (UTC+5:30)
            </p>
          </Reveal>

          <Reveal className="contact-links-wrap" delay={120}>
            <div className="contact-links">
              <span className="micro">Direct contact &amp; profiles</span>
              {contactLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    className="contact-link"
                    {...(link.external
                      ? { target: "_blank", rel: "noreferrer noopener" }
                      : {})}
                    {...(link.download ? { download: true } : {})}
                  >
                    <span className="contact-icon" aria-hidden="true">
                      <Icon size={18} strokeWidth={1.7} />
                    </span>
                    <span className="contact-link-text">
                      <strong>{link.label}</strong>
                      <span>{link.value}</span>
                    </span>
                    <span className="contact-arrow" aria-hidden="true">
                      {link.download ? (
                        <ArrowDownToLine size={17} />
                      ) : (
                        <ArrowUpRight size={17} />
                      )}
                    </span>
                  </a>
                );
              })}

              <div className="cv-downloads">
                <span className="micro cv-downloads-label">
                  <ArrowDownToLine size={13} strokeWidth={1.8} aria-hidden="true" />
                  CV downloads
                </span>

                <div className="cv-download-row">
                  <span className="cv-locale">{englishCv.label}</span>
                  <a
                    href={englishCv.pdf}
                    download
                    aria-label={`${englishCv.label} CV, PDF`}
                  >
                    PDF
                  </a>
                  <a
                    href={englishCv.docx}
                    download
                    aria-label={`${englishCv.label} CV, Word`}
                  >
                    DOCX
                  </a>
                </div>

                <div className="cv-download-row">
                  {otherCvs.map((locale) => (
                    <span className="cv-locale-group" key={locale.code}>
                      <span className="cv-locale">{locale.label}</span>
                      <a
                        href={locale.pdf}
                        download
                        aria-label={`${locale.label} CV, PDF`}
                      >
                        PDF
                      </a>
                      <a
                        href={locale.docx}
                        download
                        aria-label={`${locale.label} CV, Word`}
                      >
                        DOCX
                      </a>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-meta">
          <span>&copy; {new Date().getFullYear()} Arul Muruga</span>
          <span aria-hidden="true">·</span>
          <span>Chennai, India</span>
        </p>
        <p className="footer-role">
          Technical Project Manager | Group Technical Architect | AI Transformation and Governance Leader
        </p>
        <a className="footer-top" href="#top">
          Back to top
        </a>
      </div>
    </footer>
  );
}
