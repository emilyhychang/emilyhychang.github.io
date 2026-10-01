import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";

export function KodyPeek({ visible }: { visible: boolean }) {
  const reduced = useReducedMotion();
  const [dismissed, setDismissed] = useState(false);
  const [hello, setHello] = useState(false);

  if (!visible || dismissed) return null;

  return (
    <motion.aside
      className="kody-peek"
      aria-label="A visit from Kody"
      initial={reduced ? false : { y: 120, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.4, ease: "easeOut" }}
    >
      {hello && (
        <p className="kody-bubble" role="status">
          you found kody :)
        </p>
      )}
      <button
        className="kody-dismiss"
        aria-label="Hide Kody"
        onClick={() => setDismissed(true)}
      >
        ×
      </button>
      <button
        className="kody-pet"
        aria-label="Say hello to Kody"
        aria-pressed={hello}
        onClick={() => setHello(!hello)}
      >
        <motion.img
          src={`${import.meta.env.BASE_URL}images/about/kody-head.png`}
          alt=""
          width="1254"
          height="1254"
          animate={{ rotate: hello && !reduced ? -9 : 0 }}
          transition={{ type: "spring", stiffness: 150, damping: 12 }}
        />
      </button>
    </motion.aside>
  );
}
