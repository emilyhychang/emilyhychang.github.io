import { lazy, Suspense, useCallback, useEffect, useState } from "react";
import { LayoutGroup, MotionConfig } from "motion/react";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { SelectedWork } from "./components/SelectedWork";
import { About, Background } from "./components/About";
import { Footer } from "./components/Footer";
import { InView } from "./components/motion-primitives/InView";
import { useProjectRoute } from "./hooks/useProjectRoute";
import { projects, type ProjectId } from "./data/portfolio";
const CaseStudyDialog = lazy(() =>
  import("./components/CaseStudyDialog").then((module) => ({
    default: module.CaseStudyDialog,
  })),
);
const CommandPalette = lazy(() =>
  import("./components/CommandPalette").then((module) => ({
    default: module.CommandPalette,
  })),
);

export default function App() {
  const { projectId, openProject, closeProject } = useProjectRoute();
  const [searchOpen, setSearchOpen] = useState(false);
  const project = projects.find((item) => item.id === projectId);
  const closeSearch = useCallback(() => setSearchOpen(false), []);
  useEffect(() => {
    const keydown = (event: KeyboardEvent) => {
      if (
        (event.metaKey || event.ctrlKey) &&
        event.key.toLowerCase() === "k" &&
        !projectId
      ) {
        event.preventDefault();
        setSearchOpen((open) => !open);
      }
    };
    window.addEventListener("keydown", keydown);
    return () => window.removeEventListener("keydown", keydown);
  }, [projectId]);
  function paletteProject(id: ProjectId) {
    setSearchOpen(false);
    openProject(id);
  }
  function paletteSection(id: string) {
    setSearchOpen(false);
    requestAnimationFrame(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "instant"
          : "smooth",
      });
      const heading = document.querySelector<HTMLElement>(`#${id} h2`);
      heading?.setAttribute("tabindex", "-1");
      heading?.focus({ preventScroll: true });
    });
  }
  return (
    <MotionConfig reducedMotion="user">
      <LayoutGroup>
        <div id="top">
          <a className="skip-link" href="#main">
            Skip to content
          </a>
          <Navigation onSearch={() => setSearchOpen(true)} />
          <main id="main">
            <Hero />
            <SelectedWork
              onOpen={openProject}
              active={!projectId && !searchOpen}
            />
            <InView>
              <About />
            </InView>
            <InView>
              <Background />
            </InView>
          </main>
          <Footer />
        </div>
        <Suspense
          fallback={
            <div className="loading-notice" role="status">
              Opening…
            </div>
          }
        >
          {project && (
            <CaseStudyDialog
              project={project}
              onClose={closeProject}
              onNext={openProject}
            />
          )}
          {searchOpen && !project && (
            <CommandPalette
              onClose={closeSearch}
              onProject={paletteProject}
              onSection={paletteSection}
            />
          )}
        </Suspense>
      </LayoutGroup>
    </MotionConfig>
  );
}
