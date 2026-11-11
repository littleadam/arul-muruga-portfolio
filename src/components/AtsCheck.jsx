import { useMemo, useRef, useState } from "react";
import {
  ArrowDownToLine,
  CircleAlert,
  CircleCheck,
  FileText,
  Loader2,
  ScanSearch,
  ShieldCheck,
  UploadCloud,
  X,
} from "lucide-react";
import { analyzeJob } from "../ats";
import { CV_URL } from "../data";
import Reveal from "./Reveal";

async function extractFileText(file) {
  const name = file.name.toLowerCase();

  if (/\.(txt|md|markdown|text)$/.test(name)) {
    return file.text();
  }

  if (name.endsWith(".docx")) {
    const mammothModule = await import("mammoth/mammoth.browser.js");
    const mammoth = mammothModule.default ?? mammothModule;
    const arrayBuffer = await file.arrayBuffer();
    const { value } = await mammoth.extractRawText({ arrayBuffer });
    return value;
  }

  if (name.endsWith(".pdf")) {
    const pdfjs = await import("pdfjs-dist/legacy/build/pdf.mjs");
    const worker = await import("pdfjs-dist/legacy/build/pdf.worker.min.mjs?url");
    pdfjs.GlobalWorkerOptions.workerSrc = worker.default;

    const data = new Uint8Array(await file.arrayBuffer());
    const loadingTask = pdfjs.getDocument({ data });
    const pdf = await loadingTask.promise;
    let text = "";
    for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber += 1) {
      const page = await pdf.getPage(pageNumber);
      const content = await page.getTextContent();
      text += `${content.items
        .map((item) => ("str" in item ? item.str : ""))
        .join(" ")}\n`;
    }
    await loadingTask.destroy();
    return text;
  }

  throw new Error("Please upload a PDF, DOCX, TXT or Markdown file.");
}

function AtsResult({ result }) {
  const radius = 52;
  const circumference = 2 * Math.PI * radius;
  const progress = Math.min(100, Math.max(0, result.score));
  const dash = (progress / 100) * circumference;

  return (
    <div className={`ats-results ats-tone-${result.tone}`}>
      <aside className="ats-score-card" aria-label="ATS readiness score">
        <span className="label">ATS readiness score</span>
        <div className="ats-ring">
          <svg viewBox="0 0 120 120" aria-hidden="true">
            <circle className="ats-ring-track" cx="60" cy="60" r={radius} />
            <circle
              className="ats-ring-fill"
              cx="60"
              cy="60"
              r={radius}
              strokeDasharray={`${dash} ${circumference - dash}`}
            />
          </svg>
          <div className="ats-ring-value">
            <strong>{result.score}</strong>
            <span>/100</span>
          </div>
        </div>
        <h3>{result.label}</h3>
        <p>{result.summary}</p>
        <div className="ats-score-meta">
          <span>{result.wordCount} words analysed</span>
          <a href={CV_URL} download className="text-link">
            Download EU CV
            <ArrowDownToLine size={14} strokeWidth={1.8} aria-hidden="true" />
          </a>
        </div>
      </aside>

      <div className="ats-details">
        <div className="ats-block">
          <h4>Score breakdown</h4>
          <div className="ats-categories">
            {result.categories.map((category) => {
              const value =
                category.percentage === null
                  ? null
                  : Math.round(category.percentage * 100);
              return (
                <div className="ats-category" key={category.key}>
                  <div className="ats-category-head">
                    <span>{category.label}</span>
                    <strong>{value === null ? "n/a" : `${value}%`}</strong>
                  </div>
                  <div className="ats-bar" aria-hidden="true">
                    <span style={{ "--w": `${value ?? 0}%` }} />
                  </div>
                  <span className="ats-category-note">
                    {category.percentage === null
                      ? "No specific requirement detected"
                      : category.required
                        ? `${category.matched} of ${category.required} detected requirements covered`
                        : "Based on experience, seniority and domain signals"}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="ats-block">
          <h4>Why this score</h4>
          <ul className="ats-justification">
            {result.justification.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="ats-keyword-grid">
          <div className="ats-block">
            <h4>
              Matched keywords
              <span className="ats-badge">{result.matchedKeywords.length}</span>
            </h4>
            <ul className="ats-chips ats-chips-matched">
              {result.matchedKeywords.map((keyword) => (
                <li key={keyword}>
                  <CircleCheck size={13} strokeWidth={2} aria-hidden="true" />
                  {keyword}
                </li>
              ))}
            </ul>
          </div>

          <div className="ats-block">
            <h4>
              Gaps to address
              <span className="ats-badge ats-badge-gap">
                {result.missingKeywords.length}
              </span>
            </h4>
            {result.missingKeywords.length ? (
              <ul className="ats-chips ats-chips-gap">
                {result.missingKeywords.map((keyword) => (
                  <li key={keyword}>
                    <CircleAlert size={13} strokeWidth={2} aria-hidden="true" />
                    {keyword}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="ats-none">
                No material keyword gaps detected in the published profile.
              </p>
            )}
          </div>
        </div>

        <div className="ats-block ats-recommendations">
          <h4>How to improve the match</h4>
          <ol>
            {result.recommendations.map((recommendation, index) => (
              <li key={recommendation}>
                <span className="ats-rec-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <p>{recommendation}</p>
              </li>
            ))}
          </ol>
        </div>

        <p className="ats-disclaimer">
          This is a heuristic requirements check, not an employer&rsquo;s
          proprietary ATS. It compares the job text with the published profile
          and EU-format CV. The job description is analysed in your browser and
          is never uploaded or stored.
        </p>
      </div>
    </div>
  );
}

export default function AtsCheck() {
  const [jobText, setJobText] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [fileStatus, setFileStatus] = useState("");
  const [isReading, setIsReading] = useState(false);
  const [isAnalysing, setIsAnalysing] = useState(false);
  const fileInputRef = useRef(null);

  const wordCount = useMemo(
    () => (jobText.trim() ? jobText.trim().split(/\s+/).length : 0),
    [jobText]
  );

  const handleFile = async (event) => {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;

    setError("");
    setResult(null);
    setFileStatus(file.name);

    if (file.size > 8 * 1024 * 1024) {
      setError("That file is larger than 8 MB. Please upload a smaller file.");
      setFileStatus("");
      return;
    }

    setIsReading(true);
    try {
      const text = await extractFileText(file);
      if (!text.trim()) {
        throw new Error(
          "No readable text was found in that file. If it is a scanned PDF, paste the text instead."
        );
      }
      setJobText(text.trim());
      setFileStatus(`Loaded: ${file.name}`);
    } catch (fileError) {
      setError(
        fileError?.message ||
          "That file could not be read. Try a PDF, DOCX or TXT file, or paste the text."
      );
      setFileStatus("");
    } finally {
      setIsReading(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (wordCount < 20) {
      setError(
        "Add a little more detail - at least 20 words from the job description."
      );
      return;
    }

    setError("");
    setResult(null);
    setIsAnalysing(true);

    window.setTimeout(() => {
      try {
        setResult(analyzeJob(jobText));
      } catch {
        setError(
          "The job description could not be analysed. Try pasting the text instead of uploading the file."
        );
      } finally {
        setIsAnalysing(false);
      }
    }, 220);
  };

  const clearAll = () => {
    setJobText("");
    setResult(null);
    setError("");
    setFileStatus("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <section id="ats" className="section ats">
      <div className="container">
        <Reveal className="section-head ats-head">
          <div>
            <p className="eyebrow">07 — ATS check</p>
            <h2 className="section-title">
              Is this role a <em>match?</em>
            </h2>
          </div>
          <p className="section-lede">
            Paste a job description or upload it, and see how the requirements
            map to my published profile and EU-format CV — with a transparent
            score breakdown, matched keywords and gaps.
          </p>
        </Reveal>

        <Reveal className="ats-panel">
          <form className="ats-form" onSubmit={handleSubmit}>
            <div className="ats-form-head">
              <label htmlFor="ats-job">Job description</label>
              <span className="ats-word-count">{wordCount} words</span>
            </div>

            <textarea
              id="ats-job"
              className="ats-textarea"
              value={jobText}
              onChange={(event) => {
                setJobText(event.target.value);
                if (error) setError("");
              }}
              placeholder="Paste the full job description here - responsibilities, required skills, experience, education and languages."
              rows={8}
              spellCheck="false"
            />

            <div className="ats-form-foot">
              <div className="ats-file-actions">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,.docx,.txt,.md,.markdown,application/pdf,application/vnd.openxmlformats-officedocument.wordprocessingml.document,text/plain,text/markdown"
                  className="ats-file-input"
                  onChange={handleFile}
                  aria-label="Upload a job description"
                />
                <button
                  type="button"
                  className="ats-upload"
                  onClick={() => fileInputRef.current?.click()}
                  disabled={isReading || isAnalysing}
                >
                  {isReading ? (
                    <Loader2 size={16} className="ats-spin" aria-hidden="true" />
                  ) : (
                    <UploadCloud size={16} strokeWidth={1.8} aria-hidden="true" />
                  )}
                  {isReading ? "Reading file..." : "Upload PDF, DOCX or TXT"}
                </button>

                {fileStatus && (
                  <span className="ats-file-status">
                    <FileText size={13} strokeWidth={1.8} aria-hidden="true" />
                    {fileStatus}
                  </span>
                )}

                {jobText && (
                  <button
                    type="button"
                    className="ats-clear"
                    onClick={clearAll}
                  >
                    <X size={14} aria-hidden="true" />
                    Clear
                  </button>
                )}
              </div>

              <button
                type="submit"
                className="btn btn-primary ats-submit"
                disabled={isAnalysing || isReading || wordCount < 20}
              >
                {isAnalysing ? (
                  <>
                    <Loader2 size={16} className="ats-spin" aria-hidden="true" />
                    Analysing
                  </>
                ) : (
                  <>
                    <ScanSearch size={16} strokeWidth={1.9} aria-hidden="true" />
                    Analyse match
                  </>
                )}
              </button>
            </div>

            {error && (
              <p className="ats-error" role="alert">
                <CircleAlert size={15} strokeWidth={1.9} aria-hidden="true" />
                {error}
              </p>
            )}

            <p className="ats-privacy">
              <ShieldCheck size={14} strokeWidth={1.8} aria-hidden="true" />
              Runs entirely in your browser. The job description is not uploaded
              or stored.
            </p>
          </form>
        </Reveal>

        {result ? (
          <AtsResult result={result} />
        ) : (
          <Reveal className="ats-empty" delay={100}>
            <div>
              <span className="label">What the check covers</span>
              <h3>Five signals, one transparent score.</h3>
            </div>
            <ul>
              <li>
                <span>01</span>
                <strong>Technical &amp; domain skills</strong>
                <p>Tools, platforms, AI and engineering requirements named in the job text.</p>
              </li>
              <li>
                <span>02</span>
                <strong>Leadership &amp; delivery</strong>
                <p>Programme management, architecture, governance, people and hiring.</p>
              </li>
              <li>
                <span>03</span>
                <strong>Experience &amp; seniority</strong>
                <p>Years requested, seniority language and domain overlap.</p>
              </li>
              <li>
                <span>04</span>
                <strong>Education &amp; certifications</strong>
                <p>Degrees, PMP, cloud and AI certifications, and other named credentials.</p>
              </li>
              <li>
                <span>05</span>
                <strong>Languages</strong>
                <p>Language requirements and CEFR levels, including German A1 in progress.</p>
              </li>
            </ul>
          </Reveal>
        )}
      </div>
    </section>
  );
}
