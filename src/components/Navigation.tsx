import { KodyPhoto } from "./KodyPhoto";
import { useEffect, useRef, useState } from "react";
import { links } from "../data/portfolio";
import { ResourceLink } from "./Shared";

export function Navigation({
  onSearch,
  page,
}: {
  onSearch: () => void;
  page: "home" | "projects";
}) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", update, { passive: true });
    update();
    return () => window.removeEventListener("scroll", update);
  }, []);
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);
  return (
    <header className={`navigation${scrolled ? " is-scrolled" : ""}`}>
      <div className="container nav-inner">
        <a className="identity" href="#top" onClick={() => setOpen(false)}>
          Emily Chang<span className="identity-dot">.</span>
        </a>
        <button
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="main-navigation"
          ref={toggle}
          onClick={() => setOpen(!open)}
        >
          {open ? "Close −" : "Menu +"}
        </button>
        <nav
          id="main-navigation"
          aria-label="Main navigation"
          className={open ? "nav-links is-open" : "nav-links"}
        >
          <div className="nav-projects">
            <KodyPhoto />
            <a
              href="#/projects"
              aria-current={page === "projects" ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              Projects
            </a>
          </div>
          <a href="#about" onClick={() => setOpen(false)}>
            About
          </a>
          <button
            className="search-toggle"
            aria-label="Search portfolio"
            onClick={() => {
              setOpen(false);
              onSearch();
            }}
          >
            <svg width="15" height="15" viewBox="0 0 20 20" aria-hidden="true">
              <circle cx="8" cy="8" r="5.5" fill="none" stroke="currentColor" />
              <path d="m12 12 5 5" stroke="currentColor" />
            </svg>
          </button>
          <ResourceLink href={links.resume} placeholder="Add resume">
            Resume
          </ResourceLink>
        </nav>
      </div>
    </header>
  );
}
