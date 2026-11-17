import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown, Download } from "lucide-react";
import { CV_FORMATS, CV_LOCALES } from "../data";

export default function CvDownload({
  label = "Download CV",
  variant = "secondary",
  align = "left",
  mode = "formats",
  triggerClassName,
}) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);
  const buttonRef = useRef(null);
  const menuRef = useRef(null);
  const menuId = useId();

  const options = mode === "locales" ? CV_LOCALES : CV_FORMATS;
  const triggerClass = triggerClassName ?? `btn btn-${variant}`;

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
        className={`${triggerClass} cv-menu-trigger`}
        aria-expanded={open}
        aria-controls={menuId}
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
        id={menuId}
        ref={menuRef}
        className="cv-menu"
        role="group"
        aria-label={mode === "locales" ? "Choose CV language or format" : "Choose CV format"}
        tabIndex={-1}
        hidden={!open}
      >
        <p className="cv-menu-title">
          {mode === "locales" ? "Choose language or format" : "Choose a format"}
        </p>
        <ul>
          {options.map((option) => {
            const linkLabel =
              mode === "locales"
                ? `${option.label} CV`
                : `${option.label} (${option.lang})`;
            return (
              <li key={option.code}>
                <span className="cv-menu-info">
                  <strong>{option.label}</strong>
                  <span>
                    {mode === "locales"
                      ? option.note
                      : `${option.lang} · ${option.note}`}
                  </span>
                </span>
                <span className="cv-menu-links">
                  <a
                    href={option.pdf}
                    download
                    aria-label={`${linkLabel}, PDF`}
                    onClick={() => setOpen(false)}
                  >
                    PDF
                  </a>
                  <a
                    href={option.docx}
                    download
                    aria-label={`${linkLabel}, Word`}
                    onClick={() => setOpen(false)}
                  >
                    DOCX
                  </a>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
