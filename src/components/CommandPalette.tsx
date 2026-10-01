import { useMemo, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { projects, links, type ProjectId } from "../data/portfolio";
import { useModal } from "../hooks/useModal";

export function CommandPalette({
  onClose,
  onProject,
  onSection,
}: {
  onClose: () => void;
  onProject: (id: ProjectId) => void;
  onSection: (id: string) => void;
}) {
  const dialog = useModal(onClose);
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState(0);
  const [race, setRace] = useState(false);
  const raced = useRef(false);
  const reduced = useReducedMotion();
  const options = useMemo(
    () => [
      ...projects.map((project) => ({
        id: project.id,
        label: project.title,
        keywords: project.id,
        action: () => onProject(project.id),
        disabled: false,
      })),
      {
        id: "projects",
        label: "All projects",
        keywords: "work collection",
        action: () => onSection("/projects"),
        disabled: false,
      },
      {
        id: "about",
        label: "About Emily",
        keywords: "about",
        action: () => onSection("about"),
        disabled: false,
      },
      ...(["resume", "github", "linkedin"] as const).map((key) => ({
        id: key,
        label:
          key === "github"
            ? "GitHub"
            : key === "linkedin"
              ? "LinkedIn"
              : "Resume",
        keywords: key,
        disabled: !links[key],
        action: () => {
          const url = links[key];
          if (url) window.open(url, "_blank", "noopener,noreferrer");
          onClose();
        },
      })),
    ],
    [onProject, onSection, onClose],
  );
  const filtered = options.filter((option) =>
    `${option.label} ${option.keywords}`
      .toLowerCase()
      .includes(query.toLowerCase().trim()),
  );
  const available = filtered.filter((option) => !option.disabled);
  const current = available[selected % Math.max(available.length, 1)];
  function run() {
    current?.action();
  }
  return (
    <dialog
      className="command-dialog"
      ref={dialog}
      aria-labelledby="command-title"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="command-shell">
        <div className="command-heading">
          <h2 id="command-title">Where do you want to go?</h2>
          <button aria-label="Close search" onClick={onClose}>
            ✕
          </button>
        </div>
        <input
          data-initial-focus

          type="search"
          placeholder="Search projects, about, or resume…"
          value={query}
          role="combobox"
          aria-label="Search destinations"
          aria-controls="command-options"
          aria-expanded="true"
          aria-autocomplete="list"
          aria-activedescendant={current ? `command-${current.id}` : undefined}
          onChange={(event) => {
            setQuery(event.target.value);
            setSelected(0);
            if (
              event.target.value.toLowerCase().trim() === "f1" &&
              !raced.current
            ) {
              raced.current = true;
              setRace(true);
            }
          }}
          onKeyDown={(event) => {
            if (event.key === "ArrowDown" || event.key === "ArrowUp") {
              event.preventDefault();
              setSelected(
                (index) =>
                  (index +
                    (event.key === "ArrowDown" ? 1 : -1) +
                    Math.max(available.length, 1)) %
                  Math.max(available.length, 1),
              );
            }
            if (event.key === "Enter") {
              event.preventDefault();
              run();
            }
          }}
        />
        <ul id="command-options" role="listbox" aria-label="Destinations">
          {filtered.map((option) => (
            <li
              id={`command-${option.id}`}
              role="option"
              aria-selected={current?.id === option.id}
              aria-disabled={option.disabled}
              key={option.id}
              onPointerMove={() => {
                const index = available.indexOf(option);
                if (index >= 0) setSelected(index);
              }}
              onClick={() => {
                if (!option.disabled) option.action();
              }}
            >
              <span>{option.label}</span>
              <span>{option.disabled ? "Unavailable" : "↗"}</span>
            </li>
          ))}
        </ul>
        {filtered.length === 0 && (
          <p className="command-empty" role="status">
            No matches. Try a project name or “About”.
          </p>
        )}
        <div className="command-footer">
          <span>↑ ↓ Navigate</span>
          <span>↵ Open</span>
          <span>esc Close</span>
        </div>
        {race && !reduced && (
          <motion.div
            className="palette-racer"
            aria-hidden="true"
            initial={{ left: "-10%" }}
            animate={{ left: "110%" }}
            transition={{ duration: 0.8, ease: "easeIn" }}
            onAnimationComplete={() => setRace(false)}
          >
            <svg viewBox="0 0 44 16" width="34" height="13">
              <path fill="currentColor" d="M2 6h9l5-4h11l5 4h9v5H2z" />
              <circle cx="12" cy="12" r="4" fill="#171717" />
              <circle cx="32" cy="12" r="4" fill="#171717" />
            </svg>
          </motion.div>
        )}
      </div>
    </dialog>
  );
}
