import { useEffect, useRef, useState } from "react";
import { ChevronDown, Download } from "lucide-react";
import { CV_FORMATS } from "../data";

export default function CvDownload({
  label = "Download CV",
  variant = "secondary",
  align = "left",
}) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);
  const buttonRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;

    const onPointerDown = (event) => {
      if (!wrapRef.current?.contains(event.target)) setOpen(false);
    };
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    menuRef.current?.focus();

    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <div className={`cv-menu-wrap cv-menu-${align}`} ref={wrapRef}>
      <button
        ref={buttonRef}
        type="button"
        className={`btn btn-${variant} cv-menu-trigger`}
        aria-expanded={open}
        aria-controls="cv-format-menu"
        onClick={() => setOpen((value) => !value)}
      >
        <Download size={15} strokeWidth={1.9} aria-hidden="true" />
        {label}
        <ChevronDown
          size={15}
          strokeWidth={2}
          aria-hidden="true"
          className={open ? "is-open" : undefined}
        />
      </button>

      <div
        id="cv-format-menu"
        ref={menuRef}
        className="cv-menu"
        role="group"
        aria-label="Choose CV format"
        tabIndex={-1}
        hidden={!open}
      >
        <p className="cv-menu-title">Choose a format</p>
        <ul>
          {CV_FORMATS.map((format) => (
            <li key={format.code}>
              <span className="cv-menu-info">
                <strong>{format.label}</strong>
                <span>
                  {format.lang} · {format.note}
                </span>
              </span>
              <span className="cv-menu-links">
                <a
                  href={format.pdf}
                  download
                  aria-label={`${format.label} (${format.lang}), PDF`}
                >
                  PDF
                </a>
                <a
                  href={format.docx}
                  download
                  aria-label={`${format.label} (${format.lang}), Word`}
                >
                  DOCX
                </a>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
