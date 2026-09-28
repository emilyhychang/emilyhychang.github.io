// Adapted from ibelick/motion-primitives (MIT), components/core/in-view.tsx.
// Uses once-only observation and an immediate reduced-motion state.
import { useRef, type ReactNode } from "react";
import { motion, useInView, useReducedMotion } from "motion/react";
export function InView({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef(null);
  const visible = useInView(ref, { once: true, margin: "0px 0px -25px 0px" });
  const reduced = useReducedMotion();
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={reduced ? false : { opacity: 0, y: 12 }}
      animate={
        visible || reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }
      }
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
