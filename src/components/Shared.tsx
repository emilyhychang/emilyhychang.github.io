import type { ReactNode } from "react";

export function Arrow({ diagonal = true }: { diagonal?: boolean }) {
  return <span aria-hidden="true">{diagonal ? "↗" : "↓"}</span>;
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
