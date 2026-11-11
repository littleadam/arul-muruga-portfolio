import { about, availability, certifications } from "../data";
import Reveal from "./Reveal";

const mandate = [
  ["Programmes", "3 concurrent engineering programmes"],
  ["Organisation", "65 engineers · 8 teams"],
  ["Direct leadership", "7 Technical Leads · 15+ engineers"],
  ["Focus", "AI-native delivery · technical architecture"],
  ["Governance", "EU AI Act · ISO/IEC 42001"],
  ["Based", `${availability.base} · open to relocation`],
  ["Languages", "English · Tamil · German (A1, certification in progress)"],
];

export default function Profile() {
  return (
    <section id="profile" className="section profile">
      <div className="container profile-grid">
        <Reveal className="profile-copy">
          <p className="eyebrow">02 — Profile</p>
          <h2 className="section-title">
            Engineering depth,
            <br />
            translated into <em>delivery.</em>
          </h2>

          <blockquote className="profile-quote">
            <p>{about}</p>
          </blockquote>

          <div className="profile-body">
            <p>
              I have built my career from the systems layer up — Linux, TCP/IP
              networking, C/C++ and Python — across eighteen years of engineering
              experience, including a long tenure at HCL Technologies on a Cisco
              Offshore Development Centre since 2010.
            </p>
            <p>
              Today I run three concurrent engineering programmes across 65
              engineers in eight teams, with seven Technical Leads and 15+
              engineers reporting directly and full commercial accountability. The work is equal parts adoption, measurement and
              governance: putting AI tooling into engineers&rsquo; hands, proving
              the return in hours and build time, and aligning it to frameworks
              such as the EU AI Act and ISO/IEC 42001.
            </p>
            <p>
              I sit where architecture, delivery and governance meet — close
              enough to the technology to test the claims, and close enough to
              delivery to act on them.
            </p>
          </div>

          <div className="profile-signoff">
            <span className="label">Certifications</span>
            <ul className="cert-list">
              {certifications.map((item) => (
                <li key={item.name}>
                  <span className="cert-dot" aria-hidden="true" />
                  <span className="cert-name">{item.name}</span>
                  <span className="cert-expiry">Valid to {item.expiry}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal className="mandate-wrap" delay={120}>
          <aside className="mandate" aria-label="Current mandate">
            <div className="mandate-top">
              <span className="micro">Current mandate</span>
              <span className="mandate-index">2026</span>
            </div>
            <h3 className="mandate-title">
              Three concurrent engineering programmes across a 65-engineer
              organisation.
            </h3>

            <dl className="mandate-list">
              {mandate.map(([label, value]) => (
                <div key={label} className="mandate-row">
                  <dt>{label}</dt>
                  <dd>{value}</dd>
                </div>
              ))}
            </dl>

            <p className="mandate-quote">
              <span aria-hidden="true">&ldquo;</span>
              Architecture, delivery and governance — owned end to end.
            </p>
          </aside>
        </Reveal>
      </div>
    </section>
  );
}
