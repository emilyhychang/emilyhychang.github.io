import { lazy, Suspense, useCallback, useEffect, useState } from "react";
import { LayoutGroup, MotionConfig } from "motion/react";
import { Navigation } from "./components/Navigation";
import { ProjectGallery } from "./components/ProjectGallery";
import { Hero } from "./components/Hero";
import { SelectedWork } from "./components/SelectedWork";
import { About, Background, ToolsGrid } from "./components/About";
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
  const { projectId, page, openProject, closeProject } = useProjectRoute();
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
    window.location.hash = id;
    requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView());
  }
  useEffect(() => {
    document.title =
      page === "projects"
        ? "Projects | Emily Chang"
        : "Emily Chang | Selected Work";
    const frame = requestAnimationFrame(() => {
      const target = document.getElementById(window.location.hash.slice(1));
      if (target) target.scrollIntoView({ behavior: "instant" });
      else window.scrollTo({ top: 0, behavior: "instant" });
    });
    return () => cancelAnimationFrame(frame);
  }, [page]);
  return (
    <MotionConfig reducedMotion="user">
      <LayoutGroup>
        <div id="top">
          <a className="skip-link" href="#main">
            Skip to content
          </a>
          <Navigation page={page} onSearch={() => setSearchOpen(true)} />
          <main id="main">
            {page === "projects" ? (
              <div className="projects-page">
                <div className="container projects-page-heading">
                  <a href="#top">← Home</a>
                  <h1>
                    Projects<span>.</span>
                  </h1>
                  <p>Browse my design, coding, and research projects.</p>
                </div>
                <SelectedWork
                  onOpen={openProject}
                  active={!projectId && !searchOpen}
                />
              </div>
            ) : (
              <>
                <Hero />
                <InView>
                  <About />
                </InView>
                <InView>
                  <Background />
                </InView>
                <ProjectGallery onOpen={openProject} />
                <InView>
                  <ToolsGrid />
                </InView>
              </>
            )}
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
              returnLabel={page === "home" ? "← Home" : "← All projects"}
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
