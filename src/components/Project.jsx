import { ArrowUpRight, CircleCheck } from "lucide-react";
import { profile, projectBlueprint, projectFeatures } from "../data";
import Reveal from "./Reveal";

export default function Project() {
  return (
    <section id="project" className="section project">
      <div className="container project-grid">
        <Reveal className="project-copy">
          <p className="eyebrow">06 &mdash; Independent project</p>
          <h2 className="section-title">
            Proof that I still <em>build.</em>
          </h2>
          <p className="section-lede">
            Outside the day job, I am building a production-grade algorithmic
            options trading system in Python &mdash; a personal testbed for
            automation with hard risk boundaries.
          </p>

          <ul className="project-features">
            {projectFeatures.map((feature) => (
              <li key={feature.title}>
                <CircleCheck size={17} strokeWidth={1.6} aria-hidden="true" />
                <div>
                  <strong>{feature.title}</strong>
                  <span>{feature.copy}</span>
                </div>
              </li>
            ))}
          </ul>

          <p className="project-note">
            <span className="label">Why it matters</span>
            The same discipline as the day job: explicit risk limits, automated
            safeguards, and no decision without data.
          </p>
        </Reveal>

        <Reveal className="spec-wrap" delay={100}>
          <div className="spec-panel">
            <div className="spec-head">
              <span className="label">System specification</span>
              <span className="spec-tag">Python</span>
            </div>

            <p className="spec-name">options_trading_system</p>

            <dl className="spec-list">
              {projectBlueprint.map(([label, value]) => (
                <div className="spec-row" key={label}>
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>

            <p className="spec-note">
              <span className="label">Objective</span>
              Automate execution without loosening risk discipline.
            </p>

            <div className="spec-foot">
              <span>Nifty weekly options</span>
              <a
                className="text-link"
                href={profile.github}
                target="_blank"
                rel="noreferrer noopener"
              >
                Built independently
                <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
