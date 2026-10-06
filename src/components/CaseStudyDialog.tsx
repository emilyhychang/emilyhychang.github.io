import { KodyPeek } from "./KodyPeek";
import { lmaOverview } from "../data/lmaCaseStudy";
import { LMACaseVisual } from "./LMACaseDetails";
import { smartBasketOverview } from "../data/smartBasketCaseStudy";
import {
  SmartBasketWorkflow,
  SmartBasketComparisons,
} from "./SmartBasketDetails";
import { healthcareOverview } from "../data/healthcareCaseStudy";
import { pantrypalOverview } from "../data/pantrypalCaseStudy";
import { HealthcareChart, PantryPalPipeline } from "./ProjectCaseDetails";
import { behavioralOverview } from "../data/behavioralCaseStudy";
import { BehavioralCaseVisual } from "./BehavioralCaseDetails";
import { cornerstoneOverview } from "../data/cornerstoneCaseStudy";
import {
  CornerstoneCaseVisual,
  CornerstonePresentation,
} from "./CornerstoneCaseDetails";
import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { f1Overview } from "../data/f1CaseStudy";
import { F1Architecture, F1CaseVisual } from "./F1CaseDetails";
import { useModal } from "../hooks/useModal";
import { caseStudies } from "../data/caseStudies";
import { links, projects, type Project } from "../data/portfolio";
import { ProjectVisual } from "./ProjectVisuals";
import { Magnetic } from "./MotionDetails";
import { ResourceLink } from "./Shared";

export function CaseStudyDialog({
  project,
  returnLabel,
  onClose,
  onNext,
}: {
  project: Project;
  returnLabel: string;
  onClose: () => void;
  onNext: (id: Project["id"]) => void;
}) {
  const dialog = useModal(onClose);
  const scroller = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState("intro");
  const [reading, setReading] = useState({
    id: project.id,
    progress: 0,
    peeked: false,
  });
  const progress = reading.id === project.id ? reading.progress : 0;
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
      const fraction =
        root.scrollTop / Math.max(1, root.scrollHeight - root.clientHeight);
      setReading((previous) => ({
        id: project.id,
        progress: fraction,
        peeked:
          fraction >= 0.65 || (previous.id === project.id && previous.peeked),
      }));
    };
    root.addEventListener("scroll", update, { passive: true });
    update();
    const title = document.title;
    document.title = `${project.title} | Emily Chang`;
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
            <button onClick={onClose}>{returnLabel}</button>
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
              ) : project.id === "soft-drinks" ? (
                <p className="case-draft">
                  The Power of Popularity / A randomized beverage-choice
                  experiment
                </p>
              ) : project.id === "healthcare" ? (
                <p className="case-draft">
                  Healthcare Spending / An exploratory cross-country analysis
                </p>
              ) : project.id === "pantrypal" ? (
                <p className="case-draft">
                  AI’m Your Chef! / A team-built recipe recommendation prototype
                </p>
              ) : project.id === "smart-basket" ? (
                <p className="case-draft">
                  Smart Basket for ebtEDGE / A team-designed mobile extension
                </p>
              ) : project.id === "lma" ? (
                <p className="case-draft">
                  ServiceTitan File Cleaner / Data automation at LMA
                </p>
              ) : (
                <p className="case-draft">I’m still writing this case study.</p>
              )}
              <motion.div
                layoutId={reduced ? undefined : `visual-${project.id}`}
                transition={{ duration: 0.3 }}
              >
                {project.id === "f1" ? (
                  <F1CaseVisual />
                ) : project.id === "cornerstone" ? (
                  <CornerstoneCaseVisual />
                ) : project.id === "lma" ? (
                  <LMACaseVisual />
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
                    : project.id === "soft-drinks"
                      ? behavioralOverview
                      : project.id === "healthcare"
                        ? healthcareOverview
                        : project.id === "pantrypal"
                          ? pantrypalOverview
                          : project.id === "smart-basket"
                            ? smartBasketOverview
                            : project.id === "lma"
                              ? lmaOverview
                              : [{ label: "Status", value: "In progress" }]
                ).map(({ label, value }) => (
                  <div key={label}>
                    <span className="eyebrow">{label}</span>
                    <p>{value}</p>
                  </div>
                ))}
              </div>
              {(project.id === "healthcare" || project.id === "pantrypal") && (
                <div className="project-links">
                  <ResourceLink
                    href={
                      project.id === "healthcare"
                        ? links.healthcareGithub
                        : links.pantrypalGithub
                    }
                    placeholder="Add URL"
                  >
                    GitHub repository
                  </ResourceLink>
                  {project.id === "pantrypal" && (
                    <ResourceLink
                      href={links.pantrypalDemo}
                      placeholder="Add URL"
                    >
                      Watch demo
                    </ResourceLink>
                  )}
                </div>
              )}
              {project.id === "smart-basket" && (
                <div className="project-links">
                  <ResourceLink
                    href={links.smartBasketCase}
                    placeholder="Add URL"
                  >
                    Original case study
                  </ResourceLink>
                </div>
              )}
              {project.id === "lma" && (
                <div className="project-links">
                  <ResourceLink href={links.lmaGithub} placeholder="Add URL">
                    GitHub repository
                  </ResourceLink>
                </div>
              )}
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
                  {project.id === "soft-drinks" &&
                    section.id === "research" && (
                      <BehavioralCaseVisual kind="materials" />
                    )}
                  {project.id === "soft-drinks" && section.id === "result" && (
                    <BehavioralCaseVisual kind="results" />
                  )}
                  {project.id === "healthcare" && section.id === "result" && (
                    <HealthcareChart />
                  )}
                  {project.id === "pantrypal" && section.id === "approach" && (
                    <PantryPalPipeline />
                  )}
                  {project.id === "smart-basket" &&
                    section.id === "iteration" && (
                      <>
                        <SmartBasketComparisons />
                        <SmartBasketWorkflow />
                      </>
                    )}
                  {project.id === "cornerstone" &&
                    section.id === "presentation" && (
                      <CornerstonePresentation />
                    )}
                  {project.id === "f1" && section.id === "approach" && (
                    <F1Architecture />
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
              <span>{next.title} &#8599;&#65038;</span>
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
        <KodyPeek
          key={project.id}
          visible={reading.id === project.id && reading.peeked}
        />
      </motion.div>
    </dialog>
  );
}
