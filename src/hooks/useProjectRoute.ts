import { useEffect, useState } from "react";
import { projects, type ProjectId } from "../data/portfolio";
function readProject() {
  const slug = window.location.hash.match(/^#\/work\/([^/]+)$/)?.[1];
  return projects.find((project) => project.id === slug)?.id ?? null;
}
export function useProjectRoute() {
  const [projectId, setProjectId] = useState<ProjectId | null>(readProject);
  useEffect(() => {
    const sync = () => setProjectId(readProject());
    window.addEventListener("popstate", sync);
    window.addEventListener("hashchange", sync);
    return () => {
      window.removeEventListener("popstate", sync);
      window.removeEventListener("hashchange", sync);
    };
  }, []);
  const openProject = (id: ProjectId) => {
    // Preserve the home entry, so closing any next-project sequence returns home.
    if (readProject())
      window.history.replaceState(window.history.state, "", `#/work/${id}`);
    else
      window.history.pushState({ portfolioOverlay: true }, "", `#/work/${id}`);
    setProjectId(id);
  };
  const closeProject = () => {
    if (window.history.state?.portfolioOverlay) window.history.back();
    else {
      window.history.replaceState(null, "", "#work");
      setProjectId(null);
    }
  };
  return { projectId, openProject, closeProject };
}
