import { ArrowRight, Download, MapPin } from "lucide-react";
import { certifications, CV_LOCALES, CV_URL, profile } from "../data";

const atAGlance = [
  ["Tenure", "18 years in engineering"],
  ["At HCL", "Since 2010"],
  ["Scope", "65 engineers · 8 teams"],
  ["Leadership", "7 Technical Leads · 15+ engineers"],
  ["Governance", "EU AI Act · ISO/IEC 42001"],
];

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">
            <MapPin size={13} strokeWidth={1.7} aria-hidden="true" />
            {profile.location}
          </p>

          <h1 className="hero-title">
            {profile.name.split(" ")[0]}&nbsp;
            <span>{profile.name.split(" ").slice(1).join(" ")}</span>
          </h1>

          <p className="hero-role">
            Technical Project Manager <span aria-hidden="true">/</span> Group
            Technical Architect <span aria-hidden="true">/</span> AI Transformation and Governance Leader
          </p>

          <p className="hero-lede">
            18 years leading enterprise-scale engineering transformation — from deep systems
            architecture (Linux, TCP/IP, C/C++, Python) to AI-native delivery across eight teams.
            I scale AI adoption across large engineering organizations with measurable outcomes,
            strong governance (EU AI Act, ISO/IEC 42001), and full commercial accountability.
          </p>

          <div className="hero-actions">
            <a href="#experience" className="btn btn-primary">
              View experience
              <ArrowRight size={16} strokeWidth={1.9} aria-hidden="true" />
            </a>
            <a href={CV_URL} download className="btn btn-secondary" title="EU-format CV (PDF)">
              Download CV
              <Download size={15} strokeWidth={1.9} aria-hidden="true" />
            </a>

            <span className="hero-cv-langs">
              <span className="hero-cv-label">CV also in</span>
              {CV_LOCALES.slice(1).map((locale) => (
                <a
                  key={locale.code}
                  href={locale.pdf}
                  download
                  title={`${locale.label} CV (PDF)`}
                >
                  {locale.label}
                </a>
              ))}
            </span>
          </div>

          <div className="hero-credentials">
            <span className="label">Certifications</span>
            <ul>
              {certifications.map((item) => (
                <li key={item.name}>{item.name}</li>
              ))}
            </ul>
          </div>
        </div>

        <aside className="hero-panel" aria-label="Current position">
          <div className="panel-head">
            <span className="label">Currently</span>
            <span className="panel-year">Chennai, IN</span>
          </div>

          <h2 className="panel-title">
            Technical Project Manager | Group Technical Architect | AI Transformation and Governance Leader
          </h2>
          <p className="panel-org">
            HCL Technologies · Cisco Offshore Development Centre
          </p>

          <dl className="fact-list">
            {atAGlance.map(([label, value]) => (
              <div className="fact-row" key={label}>
                <dt>{label}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>

          <a className="text-link panel-link" href="#experience">
            Full experience
            <ArrowRight size={14} strokeWidth={1.8} aria-hidden="true" />
          </a>
        </aside>
      </div>
    </section>
  );
}
