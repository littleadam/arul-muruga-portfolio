import { Boxes, Compass, Scale, Terminal } from "lucide-react";
import { expertise, principles, workingKnowledge } from "../data";
import Reveal from "./Reveal";

const icons = {
  terminal: Terminal,
  boxes: Boxes,
  compass: Compass,
  scale: Scale,
};

export default function Expertise() {
  return (
    <section id="expertise" className="section expertise">
      <div className="container">
        <Reveal className="section-head expertise-head">
          <div>
            <p className="eyebrow">05 — Expertise</p>
            <h2 className="section-title">
              Depth where it <em>matters.</em>
            </h2>
          </div>
          <p className="section-lede">
            Four capabilities that compound: the engineering foundation, the
            delivery machinery, the leadership bench and the governance to take
            AI into production with confidence.
          </p>
        </Reveal>

        <div className="expertise-grid">
          {expertise.map((item, index) => {
            const Icon = icons[item.icon] ?? Terminal;
            return (
              <Reveal key={item.title} delay={index * 70}>
                <article className="expertise-card">
                  <span className="expertise-icon" aria-hidden="true">
                    <Icon size={22} strokeWidth={1.6} />
                  </span>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                  <ul className="tag-list">
                    {item.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="working-knowledge" delay={80}>
          <div className="working-knowledge-head">
            <span className="micro">{workingKnowledge.label}</span>
            <ul className="working-tags">
              {workingKnowledge.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <p className="working-note">{workingKnowledge.note}</p>
        </Reveal>

        <div className="principles">
          <Reveal className="principles-head">
            <p className="eyebrow">How I lead</p>
          </Reveal>
          <div className="principles-grid">
            {principles.map((principle, index) => (
              <Reveal key={principle.number} delay={index * 90}>
                <article className="principle">
                  <span className="principle-number">{principle.number}</span>
                  <h3>{principle.title}</h3>
                  <p>{principle.copy}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
