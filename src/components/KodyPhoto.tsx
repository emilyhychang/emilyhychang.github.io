import { useState } from "react";
import { useModal } from "../hooks/useModal";

function PhotoDialog({ onClose }: { onClose: () => void }) {
  const dialog = useModal(onClose);
  return (
    <dialog
      ref={dialog}
      className="kody-photo-dialog"
      aria-label="A photo of Kody"
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="kody-photo-content">
        <button
          className="kody-photo-close"
          onClick={onClose}
          aria-label="Close Kody photo"
        >
          ×
        </button>
        <img
          src={`${import.meta.env.BASE_URL}images/about/kody-popup.jpg`}
          alt="Kody, Emily’s golden retriever."
        />
        <p>you found kody :)</p>
      </div>
    </dialog>
  );
}
export function KodyPhoto() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        className="kody-paws"
        aria-label="See a photo of Kody"
        aria-haspopup="dialog"
        onClick={() => setOpen(true)}
      >
        <svg viewBox="0 0 64 52" aria-hidden="true">
          {[
            "translate(3 17) rotate(-18 13 15)",
            "translate(34 1) rotate(15 13 15)",
          ].map((transform) => (
            <g key={transform} transform={transform} fill="currentColor">
              <ellipse
                cx="4"
                cy="12"
                rx="3.5"
                ry="5"
                transform="rotate(-25 4 12)"
              />
              <ellipse cx="11" cy="6" rx="3.5" ry="5" />
              <ellipse cx="19" cy="6" rx="3.5" ry="5" />
              <ellipse
                cx="26"
                cy="12"
                rx="3.5"
                ry="5"
                transform="rotate(25 26 12)"
              />
              <path d="M6 24c0-4 5-12 9-12s9 8 9 12c0 5-6 4-9 2-3 2-9 3-9-2Z" />
            </g>
          ))}
        </svg>
      </button>
      {open && <PhotoDialog onClose={() => setOpen(false)} />}
    </>
  );
}
