import { Check } from "lucide-react";
import { programmePhases } from "../data";
import Reveal from "./Reveal";

export default function Programme() {
  return (
    <section id="programme" className="section programme">
      <div className="container">
        <Reveal className="programme-head">
          <div>
            <p className="eyebrow">03 — Flagship programme</p>
            <h2 className="section-title">
              AI transformation, run like a programme
              <em> — not a pilot.</em>
            </h2>
          </div>
          <p className="section-lede">
            Across the Cisco ODC, I lead a programme that turns AI tooling into
            everyday engineering practice: assessed against governance,
            instrumented for savings, and scaled across eight teams.
          </p>
        </Reveal>

        <div className="programme-grid">
          <div className="phases">
            {programmePhases.map((phase, index) => (
              <Reveal key={phase.number} delay={index * 90}>
                <article className="phase">
                  <span className="phase-number">{phase.number}</span>
                  <div className="phase-content">
                    <h3>{phase.title}</h3>
                    <p>{phase.copy}</p>
                    <ul className="phase-tags" aria-label={`${phase.title} focus`}>
                      {phase.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="scorecard-wrap" delay={150}>
            <aside className="scorecard" aria-label="Programme scorecard">
              <div className="scorecard-top">
                <span className="micro">Programme scorecard</span>
                <span className="scorecard-year">Year 1 → 3</span>
              </div>

              <h3>AI tool rollout</h3>
              <div className="rollout">
                <div className="rollout-row">
                  <div className="rollout-label">
                    <span>Year 1 deployed</span>
                    <strong>2</strong>
                  </div>
                  <div className="bar-track">
                    <span className="bar-fill" style={{ "--w": "16.67%" }} />
                  </div>
                </div>
                <div className="rollout-row">
                  <div className="rollout-label">
                    <span>Year 2 deployed</span>
                    <strong>6</strong>
                  </div>
                  <div className="bar-track">
                    <span className="bar-fill" style={{ "--w": "50%" }} />
                  </div>
                </div>
                <div className="rollout-row">
                  <div className="rollout-label">
                    <span>Year 3 target</span>
                    <strong>12</strong>
                  </div>
                  <div className="bar-track bar-target">
                    <span className="bar-fill" style={{ "--w": "100%" }} />
                  </div>
                </div>
              </div>

              <div className="scorecard-stats">
                <div>
                  <strong>93%</strong>
                  <span>Build-time reduction</span>
                </div>
                <div>
                  <strong>664+</strong>
                  <span>FTE-hours returned</span>
                </div>
              </div>

              <div className="scorecard-governance">
                <span className="micro">Governance alignment</span>
                <ul>
                  <li>
                    <Check size={14} aria-hidden="true" /> EU AI Act
                  </li>
                  <li>
                    <Check size={14} aria-hidden="true" /> ISO/IEC 42001
                  </li>
                </ul>
              </div>

              <p className="scorecard-foot">
                <span aria-hidden="true" />
                100% SLA compliance sustained across 13+ consecutive weeks
              </p>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
