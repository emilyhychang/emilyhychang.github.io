import { cornerstoneOverview } from "../data/cornerstoneCaseStudy";
import {
  CornerstoneCaseVisual,
  CornerstonePresentation,
} from "./CornerstoneCaseDetails";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { f1Overview } from "../data/f1CaseStudy";
import { F1Architecture, F1CaseVisual } from "./F1CaseDetails";
import { useModal } from "../hooks/useModal";
import { caseStudies, decisionQuestions } from "../data/caseStudies";
import { links, projects, type Project } from "../data/portfolio";
import { ProjectVisual } from "./ProjectVisuals";
import { Magnetic } from "./MotionDetails";
import { ResourceLink } from "./Shared";

function DecisionDisclosure() {
  const [open, setOpen] = useState<number | null>(null);
  const reduced = useReducedMotion();
  return (
    <div className="decisions">
      {decisionQuestions.map((question, index) => (
        <div className="decision" key={question}>
          <h4>
            <button
              aria-expanded={open === index}
              aria-controls={`decision-${index}`}
              onClick={() => setOpen(open === index ? null : index)}
            >
              <span>0{index + 1}</span>
              {question}
              <span aria-hidden="true">{open === index ? "−" : "+"}</span>
            </button>
          </h4>
          <AnimatePresence initial={false}>
            {open === index && (
              <motion.div
                id={`decision-${index}`}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: reduced ? 0 : 0.2 }}
                className="decision-body"
              >
                {[
                  "The decision",
                  "Considered",
                  "Why I chose it",
                  "Tradeoff",
                  "What I’d test next",
                ].map((label) => (
                  <div key={label}>
                    <h5 className="eyebrow">{label}</h5>
                    <p>[Add {label.toLowerCase()}]</p>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
export function CaseStudyDialog({
  project,
  onClose,
  onNext,
}: {
  project: Project;
  onClose: () => void;
  onNext: (id: Project["id"]) => void;
}) {
  const dialog = useModal(onClose);
  const scroller = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState("intro");
  const [progress, setProgress] = useState(0);
  const reduced = useReducedMotion();
  const sections = caseStudies[project.id];
  useEffect(() => {
    const root = scroller.current!;
    root.scrollTo({ top: 0, behavior: "instant" });
    const update = () => {
      const top = root.getBoundingClientRect().top;
      const elements = [
        ...root.querySelectorAll<HTMLElement>("[data-case-section]"),
      ];
      const current = elements
        .filter((element) => element.getBoundingClientRect().top - top <= 140)
        .at(-1);
      setActive(
        root.scrollTop > 0 &&
          root.scrollTop + root.clientHeight >= root.scrollHeight - 3
          ? (elements.at(-1)?.id ?? "intro")
          : (current?.id ?? "intro"),
      );
      setProgress(
        root.scrollTop / Math.max(1, root.scrollHeight - root.clientHeight),
      );
    };
    root.addEventListener("scroll", update, { passive: true });
    update();
    const title = document.title;
    document.title = `${project.title} — Emily Chang`;
    return () => {
      root.removeEventListener("scroll", update);
      document.title = title;
    };
  }, [project]);
  const next =
    projects[
      (projects.findIndex((item) => item.id === project.id) + 1) %
        projects.length
    ];
  return (
    <dialog
      ref={dialog}
      className={`case-dialog accent-${project.id}`}
      aria-labelledby="case-title"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <motion.div
        className="case-shell"
        initial={reduced ? false : { opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.25 }}
      >
        <header className="case-header">
          <Magnetic>
            <button onClick={onClose}>← All work</button>
          </Magnetic>
          <span className="eyebrow">
            {project.number} / {project.title}
          </span>
          <button aria-label="Close case study" onClick={onClose}>
            ✕
          </button>
        </header>
        <div
          className="case-progress"
          role="progressbar"
          aria-label="Case study reading progress"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(progress * 100)}
        >
          <span style={{ transform: `scaleX(${progress})` }} />
        </div>
        <div className="case-scroll" ref={scroller}>
          <div className="case-content" key={project.id}>
            <section id="intro" data-case-section className="case-intro">
              <p className="eyebrow">
                {project.number} / {project.tags.join(" · ")}
              </p>
              <motion.h2
                layoutId={reduced ? undefined : `title-${project.id}`}
                id="case-title"
              >
                {project.title}
              </motion.h2>
              <p className="case-statement">{project.statement}</p>
              {project.id === "f1" ? (
                <p className="case-draft">
                  SCUDERIA 16 / Race analysis, forecasting, and fantasy planning
                </p>
              ) : project.id === "cornerstone" ? (
                <p className="case-draft">
                  Mud Lily Clay / Website redesign and analytics review
                </p>
              ) : (
                <p className="case-draft">
                  Case study in progress · Content placeholders are marked
                  below.
                </p>
              )}
              <motion.div
                layoutId={reduced ? undefined : `visual-${project.id}`}
                transition={{ duration: 0.3 }}
              >
                {project.id === "f1" ? (
                  <F1CaseVisual />
                ) : project.id === "cornerstone" ? (
                  <CornerstoneCaseVisual />
                ) : (
                  <ProjectVisual id={project.id} />
                )}
              </motion.div>
              <div className="case-overview">
                <h3 className="eyebrow">Overview</h3>
                {(project.id === "f1"
                  ? f1Overview
                  : project.id === "cornerstone"
                    ? cornerstoneOverview
                    : ["Role", "Timeline", "Tools"].map((label) => ({
                        label,
                        value: `[Add ${label.toLowerCase()}]`,
                      }))
                ).map(({ label, value }) => (
                  <div key={label}>
                    <span className="eyebrow">{label}</span>
                    <p>{value}</p>
                  </div>
                ))}
              </div>
              {project.id === "f1" && (
                <div className="project-links">
                  <ResourceLink href={links.f1Live} placeholder="Add URL">
                    Live project
                  </ResourceLink>
                  <ResourceLink href={links.f1Github} placeholder="Add URL">
                    GitHub repository
                  </ResourceLink>
                </div>
              )}
            </section>
            {sections.map((section, index) => (
              <section
                key={section.id}
                id={section.id}
                data-case-section
                className="case-section"
              >
                <span className="eyebrow">0{index + 1}</span>
                <div>
                  <h3>{section.title}</h3>
                  {section.paragraphs ? (
                    <div className="case-prose">
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  ) : (
                    <p className="case-placeholder">{section.prompt}</p>
                  )}
                  {project.id === "watchtogether" &&
                    section.id === "decisions" && <DecisionDisclosure />}
                  {project.id === "cornerstone" &&
                    section.id === "presentation" && (
                      <CornerstonePresentation />
                    )}
                  {project.id === "f1" && section.id === "approach" && (
                    <F1Architecture />
                  )}
                  {project.id === "lma" && section.id === "automation" && (
                    <ProjectVisual id="lma" />
                  )}
                </div>
              </section>
            ))}
            <button
              className="next-project"
              onClick={() => {
                onNext(next.id);
                dialog.current
                  ?.querySelector<HTMLButtonElement>(".case-header button")
                  ?.focus();
              }}
            >
              <span className="eyebrow">Next project</span>
              <span>{next.title} ↗</span>
            </button>
          </div>
        </div>
        <nav className="case-nav" aria-label="Case study sections">
          {[{ id: "intro", title: "Intro" }, ...sections].map((section) => (
            <button
              key={section.id}
              aria-current={active === section.id ? "location" : undefined}
              onClick={() =>
                scroller.current
                  ?.querySelector(`#${section.id}`)
                  ?.scrollIntoView({
                    behavior: reduced ? "instant" : "smooth",
                    block: "start",
                  })
              }
            >
              <i />
              {section.title}
            </button>
          ))}
        </nav>
      </motion.div>
    </dialog>
  );
}
