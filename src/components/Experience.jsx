import { MapPin } from "lucide-react";
import {
  arc,
  careerPath,
  earlierRoles,
  education,
  profile,
  resourceDemand,
} from "../data";
import Reveal from "./Reveal";

const responsibilities = [
  "Lead an AI transformation programme across the Cisco ODC, driving adoption of AI tooling across engineering teams.",
  "Manage and mentor a leadership bench of 7 Technical Leads and 15+ engineers directly, within a wider organisation of 65 engineers across 8 teams.",
  "Own technical architecture and delivery governance, applying the Linux, networking, C/C++, Python, Jenkins, Docker and multi-architecture build expertise built over 18 years.",
  "Work on AI governance alignment, including the EU AI Act and ISO/IEC 42001.",
  "Head resource demand management for the delivery unit — gathering open positions from teams, coordinating candidate sourcing with HR, selecting interview panelists, collecting panel reviews and updating HR teams.",
];

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <Reveal className="section-head">
          <p className="eyebrow">04 — Experience</p>
          <h2 className="section-title">
            Eighteen years, one through-line:
            <br />
            making engineering delivery <em>work.</em>
          </h2>
        </Reveal>

        <div className="experience-grid">
          <Reveal>
            <article className="role-card">
              <div className="role-top">
                <span className="org-mark" aria-hidden="true">
                  HCL
                </span>
                <div className="org-name">
                  <strong>HCL Technologies</strong>
                  <span>Cisco Offshore Development Centre</span>
                </div>
                <span className="role-status">Current</span>
              </div>

              <h3>Technical Project Manager &amp; Group Technical Architect</h3>
              <p className="role-meta">
                <MapPin size={14} strokeWidth={1.8} aria-hidden="true" />
                {profile.location}
                <span aria-hidden="true">·</span>
                18 years in engineering
              </p>

              <div className="career-path">
                <span className="label">Career path at HCL · joined 2010</span>
                <ol>
                  {careerPath.map((step, index) => (
                    <li
                      key={step}
                      className={
                        index === careerPath.length - 1 ? "is-current" : undefined
                      }
                    >
                      <span className="path-dot" aria-hidden="true" />
                      {step}
                    </li>
                  ))}
                </ol>
              </div>

              <ul className="role-list">
                {responsibilities.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <div className="role-scope" aria-label="Role scope">
                <span>65 engineers</span>
                <span>8 teams</span>
                <span>7 technical leads</span>
                <span>15+ direct reports</span>
                <span>Resource demand</span>
              </div>
            </article>
          </Reveal>

          <Reveal className="arc-wrap" delay={120}>
            <div className="arc">
              <div className="arc-head">
                <span className="micro">The capability arc</span>
                <span className="arc-years">18 years</span>
              </div>
              <ol>
                {arc.map((step) => (
                  <li key={step.number}>
                    <span className="arc-number">{step.number}</span>
                    <div>
                      <h4>{step.title}</h4>
                      <p>{step.copy}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <p className="arc-note">
                A progression from hands-on systems engineering to group-level
                architecture and programme leadership — each layer still
                informing the next.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal className="resource-block" delay={80}>
          <div className="resource-head">
            <div>
              <span className="label">People &amp; demand</span>
              <h3>
                {resourceDemand.title}
                <em> — owned end to end.</em>
              </h3>
            </div>
            <p>{resourceDemand.intro}</p>
          </div>
          <ol className="resource-steps">
            {resourceDemand.steps.map((step, index) => (
              <li key={step.label}>
                <span className="resource-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <strong>{step.label}</strong>
                <p>{step.copy}</p>
              </li>
            ))}
          </ol>
        </Reveal>

        <div className="experience-extra">
          <Reveal className="earlier">
            <div className="extra-head">
              <span className="label">Earlier experience</span>
              <span className="extra-count">2008 — 2010</span>
            </div>
            <ul>
              {earlierRoles.map((role) => (
                <li key={role.company}>
                  <div className="earlier-top">
                    <strong>{role.title}</strong>
                    <span>{role.meta}</span>
                  </div>
                  <p>{role.company}</p>
                  <ul className="earlier-points">
                    {role.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="education" delay={90}>
            <div className="extra-head">
              <span className="label">Education</span>
              <span className="extra-count">{education.dates}</span>
            </div>
            <strong>{education.institution}</strong>
            <p>{education.degree}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
