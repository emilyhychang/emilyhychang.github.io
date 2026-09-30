import { useEffect, useState } from "react";
import { projects, type ProjectId } from "../data/portfolio";
export type PortfolioPage = "home" | "projects";
function readRoute() {
  const slug = window.location.hash.match(/^#\/work\/([^/]+)$/)?.[1];
  const projectId = projects.find((project) => project.id === slug)?.id ?? null;
  const page: PortfolioPage = projectId
    ? window.history.state?.portfolioPage === "home"
      ? "home"
      : "projects"
    : window.location.hash === "#/projects"
      ? "projects"
      : "home";
  return { projectId, page };
}
export function useProjectRoute() {
  const [route, setRoute] = useState(readRoute);
  useEffect(() => {
    const sync = () => setRoute(readRoute());
    window.addEventListener("popstate", sync);
    window.addEventListener("hashchange", sync);
    return () => {
      window.removeEventListener("popstate", sync);
      window.removeEventListener("hashchange", sync);
    };
  }, []);
  const openProject = (id: ProjectId) => {
    if (readRoute().projectId)
      window.history.replaceState(window.history.state, "", `#/work/${id}`);
    else
      window.history.pushState(
        { portfolioOverlay: true, portfolioPage: route.page },
        "",
        `#/work/${id}`,
      );
    setRoute(readRoute());
  };
  const closeProject = () => {
    if (window.history.state?.portfolioOverlay) window.history.back();
    else {
      window.history.replaceState(null, "", "#/projects");
      setRoute(readRoute());
    }
  };
  return { ...route, openProject, closeProject };
}
