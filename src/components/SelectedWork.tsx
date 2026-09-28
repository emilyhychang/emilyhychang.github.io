import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { InView } from "./motion-primitives/InView";
import { Magnetic, ProjectCursor } from "./MotionDetails";
import {
  lenses,
  links,
  projects,
  type Lens,
  type Project,
} from "../data/portfolio";
import { ProjectVisual } from "./ProjectVisuals";
import { ResourceLink, SectionHeader } from "./Shared";

function ProjectSection({
  project,
  lens,
  onOpen,
  active,
}: {
  project: Project;
  lens: Lens;
  active: boolean;
  onOpen: (id: Project["id"]) => void;
}) {
  const reduced = useReducedMotion();
  return (
    <article
      id={project.id}
      className={`project project-${project.id}${lens !== "All" && !project.lenses.includes(lens) ? " is-dimmed" : ""}`}
      aria-labelledby={`${project.id}-title`}
    >
      <div className="project-copy">
        <div className="project-number eyebrow">
          <span>{project.number}</span>
          <span>
            {project.id === "watchtogether"
              ? "Featured project"
              : project.tags.slice(0, 2).join(" / ")}
          </span>
        </div>
        <motion.h3
          layoutId={reduced ? undefined : `title-${project.id}`}
          id={`${project.id}-title`}
        >
          <button
            className="project-title-button"
            onClick={() => onOpen(project.id)}
          >
            {project.title}
          </button>
        </motion.h3>
        <p className="project-statement">{project.statement}</p>
        <ul className="project-tags" aria-label="Project disciplines">
          {project.tags.map((tag) => (
            <li
              key={tag}
              data-emphasized={
                tag === lens || (lens === "Data" && tag === "Analytics")
              }
            >
              {tag}
            </li>
          ))}
        </ul>
        {project.id === "f1" && (
          <div className="project-links">
            <ResourceLink href={links.f1Live} placeholder="Add URL">
              Live site
            </ResourceLink>
            <ResourceLink href={links.f1Github} placeholder="Add URL">
              GitHub
            </ResourceLink>
          </div>
        )}
        {project.id === "cornerstone" && (
          <p className="process-line">
            Research <span>→</span> Analysis <span>→</span>
            <br /> Recommendation <span>→</span> Presentation
          </p>
        )}
      </div>
      <motion.div
        className="project-art"
        layoutId={reduced ? undefined : `visual-${project.id}`}
        transition={{ duration: 0.3 }}
      >
        <ProjectCursor
          label={
            {
              watchtogether: "View case",
              f1: "Explore",
              cornerstone: "View deck",
              lma: "See work",
            }[project.id]
          }
          onOpen={() => onOpen(project.id)}
        >
          <ProjectVisual id={project.id} active={active} />
        </ProjectCursor>
      </motion.div>
      <div className="project-foot">
        <span>
          {project.id === "f1"
            ? "SCUDERIA 16 · JavaScript / Python / Data visualization"
            : project.id === "cornerstone"
              ? "Mud Lily Clay · Website redesign / Analytics"
              : "[Add project detail]"}
        </span>
        <Magnetic>
          <button className="case-link" onClick={() => onOpen(project.id)}>
            View case study <span aria-hidden="true">↗</span>
          </button>
        </Magnetic>
      </div>
    </article>
  );
}
export function SelectedWork({
  onOpen,
  active,
}: {
  active: boolean;
  onOpen: (id: Project["id"]) => void;
}) {
  const reduced = useReducedMotion();
  const [preview, setPreview] = useState<Lens | null>(null);
  const [lens, setLens] = useState<Lens>("All");
  return (
    <section
      id="work"
      className="container work-section"
      aria-labelledby="work-heading"
    >
      <SectionHeader aside="01—04">Selected work</SectionHeader>
      <div className="work-intro">
        <h2 id="work-heading">
          A few things I’ve built,
          <br />
          analyzed, and figured out.
        </h2>
        <span className="work-note">
          Different questions.
          <br />
          The same curiosity.
        </span>
      </div>
      <div className="lens-row">
        <div
          className="lens-selector"
          role="group"
          aria-label="View work by discipline"
        >
          {lenses.map((item) => (
            <button
              key={item}
              aria-pressed={lens === item}
              onPointerEnter={(event) => {
                if (event.pointerType === "mouse") setPreview(item);
              }}
              onPointerLeave={() => setPreview(null)}
              onClick={() => {
                setLens(item);
                setPreview(null);
              }}
            >
              {lens === item && (
                <motion.span
                  className="lens-active"
                  layoutId="lens-indicator"
                  transition={{ duration: reduced ? 0 : 0.2 }}
                />
              )}
              <span className="lens-text">{item}</span>
            </button>
          ))}
        </div>
        <span className="eyebrow lens-label">
          A different lens on the same work
        </span>
      </div>
      <div className="projects">
        {projects.map((project) => (
          <InView key={project.id}>
            <ProjectSection
              project={project}
              lens={preview ?? lens}
              onOpen={onOpen}
              active={active}
            />
          </InView>
        ))}
      </div>
    </section>
  );
}
