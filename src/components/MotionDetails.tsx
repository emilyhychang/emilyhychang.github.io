import { useState, type ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "motion/react";

export function Magnetic({ children }: { children: ReactNode }) {
  const x = useMotionValue(0),
    y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 25 }),
    sy = useSpring(y, { stiffness: 200, damping: 25 });
  const reduced = useReducedMotion();
  return (
    <motion.span
      className="magnetic"
      style={{ x: sx, y: sy }}
      onPointerMove={(event) => {
        if (reduced || event.pointerType !== "mouse") return;
        const rect = event.currentTarget.getBoundingClientRect();
        x.set(
          Math.max(
            -4,
            Math.min(4, (event.clientX - rect.left - rect.width / 2) * 0.08),
          ),
        );
        y.set(
          Math.max(
            -4,
            Math.min(4, (event.clientY - rect.top - rect.height / 2) * 0.08),
          ),
        );
      }}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      {children}
    </motion.span>
  );
}
export function ProjectCursor({
  children,
  label,
  onOpen,
}: {
  children: ReactNode;
  label: string;
  onOpen: () => void;
}) {
  const [visible, setVisible] = useState(false);
  const x = useMotionValue(0),
    y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 250, damping: 30 }),
    sy = useSpring(y, { stiffness: 250, damping: 30 });
  const reduced = useReducedMotion();
  return (
    <div
      className="cursor-region"
      onClick={(event) => {
        if (!(event.target as HTMLElement).closest("button, a, .deck-front"))
          onOpen();
      }}
      onPointerMove={(event) => {
        const blocked = (event.target as HTMLElement).closest(
          "button, a, input",
        );
        setVisible(event.pointerType === "mouse" && !blocked && !reduced);
        const rect = event.currentTarget.getBoundingClientRect();
        x.set(event.clientX - rect.left + 14);
        y.set(event.clientY - rect.top + 14);
      }}
      onPointerLeave={() => setVisible(false)}
    >
      {children}
      <button className="visual-open" aria-label={label} onClick={onOpen}>
        View case <span aria-hidden="true">&#8599;&#65038;</span>
      </button>
      {visible && (
        <motion.span
          className="project-cursor"
          style={{ x: sx, y: sy }}
          aria-hidden="true"
        >
          {label} &#8599;&#65038;
        </motion.span>
      )}
    </div>
  );
}
