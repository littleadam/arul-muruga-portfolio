import { ChevronDown } from "lucide-react";
import { deliveryProjects } from "../data";
import Reveal from "./Reveal";

export default function DeliveryWork() {
  let projectCount = 0;

  return (
    <section id="work" className="section delivery-work">
      <div className="container">
        <Reveal className="section-head delivery-work-head">
          <div>
            <p className="eyebrow">05 — Delivery work</p>
            <h2 className="section-title">
              Systems I have built, <em>at scale.</em>
            </h2>
          </div>
          <p className="section-lede">
            Seven Cisco platform programs, two embedded-product roles and a career
            spent moving from hands-on engineering into team leadership. Open a
            project for the role, the customers and the technical scope.
          </p>
        </Reveal>

        <div className="work-groups">
          {deliveryProjects.map((group) => (
            <Reveal className="work-group" key={group.company}>
              <div className="work-group-head">
                <div>
                  <p className="label">Company</p>
                  <h3>{group.company}</h3>
                  <p className="work-group-era">{group.era}</p>
                </div>
                <p className="work-group-note">{group.note}</p>
              </div>

              <div className="work-list">
                {group.projects.map((project, index) => {
                  projectCount += 1;
                  return (
                    <details
                      className="work-item"
                      key={project.name}
                      open={index === 0}
                    >
                      <summary>
                        <span className="work-index">
                          {String(projectCount).padStart(2, "0")}
                        </span>
                        <span className="work-main">
                          <strong>{project.name}</strong>
                          <span className="work-meta">
                            {[project.role, project.team, project.customers]
                              .filter(Boolean)
                              .join(" · ")}
                          </span>
                        </span>
                        <span className="work-tech-teaser">
                          {project.tech.slice(0, 3).join(" · ")}
                        </span>
                        <ChevronDown
                          className="work-chevron"
                          size={17}
                          strokeWidth={1.8}
                          aria-hidden="true"
                        />
                      </summary>

                      <div className="work-detail">
                        <p className="work-summary">{project.summary}</p>
                        <ul>
                          {project.contributions.map((contribution) => (
                            <li key={contribution}>{contribution}</li>
                          ))}
                        </ul>
                        <div className="work-tags" aria-label="Technologies">
                          {project.tech.map((technology) => (
                            <span key={technology}>{technology}</span>
                          ))}
                        </div>
                      </div>
                    </details>
                  );
                })}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
