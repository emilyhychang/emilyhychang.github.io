import type { ReactNode } from "react";

export function Arrow({ diagonal = true }: { diagonal?: boolean }) {
  if (!diagonal) {
    return <span aria-hidden="true">↓︎</span>;
  }

  return (
    <svg
      className="arrow-icon"
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M5 19 19 5M9 5h10v10" />
    </svg>
  );
}
export function SectionHeader({
  children,
  aside,
}: {
  children: ReactNode;
  aside?: string;
}) {
  return (
    <div className="section-header">
      <span>{children}</span>
      {aside && <span>{aside}</span>}
    </div>
  );
}
export function ResourceLink({
  href,
  children,
  placeholder,
}: {
  href: string | null;
  children: ReactNode;
  placeholder: string;
}) {
  return href ? (
    <a
      className="text-link"
      href={href}
      target={href.startsWith("mailto:") ? undefined : "_blank"}
      rel="noreferrer"
    >
      {children} <Arrow />
    </a>
  ) : (
    <span className="resource-unavailable">
      {children} <Arrow />
      <span className="resource-note">[{placeholder}]</span>
    </span>
  );
}
