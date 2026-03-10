"use client";

import { useState, useEffect, useCallback, useRef, useMemo } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-markup";
import { useI18n } from "../i18n/context";

const FAVORITES_KEY = "utils-favorites";

function getFavorites(): string[] {
  try {
    return JSON.parse(localStorage.getItem(FAVORITES_KEY) || "[]");
  } catch {
    return [];
  }
}

function toggleFavorite(toolId: string): string[] {
  const favs = getFavorites();
  const idx = favs.indexOf(toolId);
  if (idx >= 0) {
    favs.splice(idx, 1);
  } else {
    favs.push(toolId);
  }
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favs));
  return favs;
}

export default function Utils() {
  const [mounted, setMounted] = useState(false);
  const [activeTool, setActiveTool] = useState<string | null>(null);
  const [favorites, setFavorites] = useState<string[]>(() => {
    if (typeof window !== "undefined") return getFavorites();
    return [];
  });
  const { t } = useI18n();

  useEffect(() => {
    setMounted(true);
  }, []);

  const tools = [
    {
      id: "pdf-to-text",
      title: t.utils.pdfToText.title,
      description: t.utils.pdfToText.description,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
      ),
      gradient: "from-orange-400 via-rose-400 to-pink-500",
      accentColor: "#fb7185",
    },
    {
      id: "html-preview",
      title: t.utils.htmlPreview.title,
      description: t.utils.htmlPreview.description,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
        </svg>
      ),
      gradient: "from-blue-400 via-indigo-400 to-violet-500",
      accentColor: "#818cf8",
    },
    {
      id: "text-diff",
      title: t.utils.textDiff.title,
      description: t.utils.textDiff.description,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
        </svg>
      ),
      gradient: "from-emerald-400 via-teal-400 to-cyan-500",
      accentColor: "#2dd4bf",
    },
  ];

  const sortedTools = useMemo(() => {
    return [...tools].sort((a, b) => {
      const aFav = favorites.includes(a.id) ? 1 : 0;
      const bFav = favorites.includes(b.id) ? 1 : 0;
      return bFav - aFav;
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [favorites, t]);

  const handleToggleTool = useCallback((toolId: string) => {
    setActiveTool((prev) => prev === toolId ? null : toolId);
  }, []);

  const handleToggleFavorite = useCallback((e: React.MouseEvent, toolId: string) => {
    e.stopPropagation();
    setFavorites(toggleFavorite(toolId));
  }, []);

  return (
    <div className="flex flex-col items-center min-h-screen w-full px-4 sm:px-6 pt-24 md:pt-32 pb-20 max-w-5xl mx-auto">
      <div
        className="w-full mb-16"
        style={{
          opacity: mounted ? 1 : 0,
          transform: mounted ? "translateY(0)" : "translateY(20px)",
          transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="h-px flex-1 max-w-[40px] bg-gradient-to-r from-orange-400 to-transparent" />
          <span className="text-xs uppercase tracking-[0.3em] opacity-40 font-medium">
            {t.utils.label}
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-none">
          {t.utils.title}
        </h1>
        <p className="mt-4 text-base opacity-40 max-w-md">
          {t.utils.description}
        </p>
      </div>

      <div className="w-full flex flex-col gap-4">
        {sortedTools.map((tool, index) => {
          const isActive = activeTool === tool.id;
          return (
            <div
              key={tool.id}
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(30px)",
                transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${0.15 + index * 0.1}s`,
              }}
            >
              <button
                type="button"
                onClick={() => handleToggleTool(tool.id)}
                className="group relative block w-full text-left"
              >
                {/* Border gradient — only visible when active */}
                <div
                  className={`absolute -inset-px bg-gradient-to-r ${tool.gradient} rounded-2xl transition-opacity duration-300`}
                  style={{ opacity: isActive ? 0.5 : 0 }}
                />
                <div
                  className={`relative rounded-2xl bg-[var(--background)] p-6 md:p-8 transition-all duration-300 overflow-hidden ${
                    isActive ? "rounded-b-none" : ""
                  }`}
                >
                  {/* Top accent line */}
                  <div
                    className={`absolute top-0 left-0 h-px bg-gradient-to-r ${tool.gradient} transition-all duration-500 ease-out`}
                    style={{ width: isActive ? "100%" : "0%" }}
                  />
                  <div className="relative flex items-center gap-5">
                    <div
                      className={`shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${tool.gradient} text-white flex items-center justify-center shadow-lg transition-all duration-300`}
                      style={{
                        transform: isActive ? "scale(1.1) rotate(-3deg)" : "scale(1)",
                        boxShadow: isActive ? `0 8px 24px ${tool.accentColor}40` : "0 4px 12px rgba(0,0,0,0.1)",
                      }}
                    >
                      {tool.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h2 className="text-xl md:text-2xl font-bold tracking-tight">{tool.title}</h2>
                      <p className="text-sm opacity-45 mt-1">{tool.description}</p>
                    </div>
                    <div
                      role="button"
                      tabIndex={0}
                      onClick={(e) => handleToggleFavorite(e, tool.id)}
                      onKeyDown={(e) => { if (e.key === "Enter") handleToggleFavorite(e as unknown as React.MouseEvent, tool.id); }}
                      className="shrink-0 w-8 h-8 rounded-lg border !border-[var(--header-border-color)] flex items-center justify-center transition-all duration-300 hover:!border-yellow-400/40 hover:bg-yellow-400/5 cursor-pointer"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={`w-3.5 h-3.5 transition-all duration-300 ${favorites.includes(tool.id) ? "fill-yellow-400 text-yellow-400" : "fill-none opacity-30"}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.562.562 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.562.562 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                      </svg>
                    </div>
                    <div
                      className="shrink-0 w-8 h-8 rounded-lg border !border-[var(--header-border-color)] flex items-center justify-center transition-all duration-300"
                      style={{ transform: isActive ? "rotate(180deg)" : "rotate(0deg)" }}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 opacity-40">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </div>
                  </div>
                </div>
              </button>

              {/* Expandable content */}
              <div
                className="grid transition-all duration-500 ease-out"
                style={{
                  gridTemplateRows: isActive ? "1fr" : "0fr",
                }}
              >
                <div className="overflow-hidden">
                  <div
                    className="border !border-[var(--header-border-color)] border-t-0 rounded-b-2xl bg-[var(--background)]"
                    style={{
                      opacity: isActive ? 1 : 0,
                      transition: "opacity 0.3s ease 0.1s",
                    }}
                  >
                    {tool.id === "pdf-to-text" && <PdfToText />}
                    {tool.id === "html-preview" && <HtmlPreview />}
                    {tool.id === "text-diff" && <TextDiff />}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div
        className="mt-20 flex items-center gap-4"
        style={{
          opacity: mounted ? 0.2 : 0,
          transition: "opacity 1s ease 0.6s",
        }}
      >
        <div className="h-px w-12 bg-gradient-to-r from-transparent to-current" />
        <span className="text-[10px] uppercase tracking-[0.4em]">
          {t.utils.moreComingSoon}
        </span>
        <div className="h-px w-12 bg-gradient-to-l from-transparent to-current" />
      </div>
    </div>
  );
}

/* ─── PDF to Text ─── */

function PdfToText() {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [extractedText, setExtractedText] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [metadata, setMetadata] = useState<Record<string, string> | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { t } = useI18n();
  const pdf = t.utils.pdfToText;

  const processFile = useCallback(async (pdfFile: File) => {
    setFile(pdfFile);
    setError(null);
    setExtractedText("");
    setMetadata(null);
    setIsProcessing(true);
    setProgress(0);

    try {
      const pdfjsLib = await import("pdfjs-dist");
      pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
        "pdfjs-dist/build/pdf.worker.min.mjs",
        import.meta.url
      ).toString();

      const arrayBuffer = await pdfFile.arrayBuffer();
      const pdfDoc = await pdfjsLib.getDocument({ data: arrayBuffer }).promise;

      // Extract metadata
      const meta = await pdfDoc.getMetadata();
      const info = meta?.info as Record<string, unknown> | undefined;
      const metaEntries: Record<string, string> = {};
      if (info) {
        const keys = ["Title", "Author", "Subject", "Keywords", "Creator", "Producer", "CreationDate", "ModDate", "PDFFormatVersion"];
        for (const key of keys) {
          if (info[key] && String(info[key]).trim()) {
            let val = String(info[key]);
            // Parse PDF date format: D:YYYYMMDDHHmmSS
            if ((key === "CreationDate" || key === "ModDate") && val.startsWith("D:")) {
              const d = val.slice(2);
              const parsed = new Date(
                `${d.slice(0,4)}-${d.slice(4,6)}-${d.slice(6,8)}T${d.slice(8,10)}:${d.slice(10,12)}:${d.slice(12,14)}`
              );
              if (!isNaN(parsed.getTime())) val = parsed.toLocaleString();
            }
            metaEntries[key] = val;
          }
        }
      }
      metaEntries["Pages"] = String(pdfDoc.numPages);
      metaEntries["File Size"] = pdfFile.size < 1024 * 1024
        ? `${(pdfFile.size / 1024).toFixed(1)} KB`
        : `${(pdfFile.size / (1024 * 1024)).toFixed(2)} MB`;
      setMetadata(metaEntries);

      let fullText = "";
      const pages = pdfDoc.numPages;
      setTotalPages(pages);
      setCurrentPage(0);

      for (let i = 1; i <= pages; i++) {
        const page = await pdfDoc.getPage(i);
        const textContent = await page.getTextContent();
        const pageText = textContent.items
          .map((item) => ("str" in item ? item.str : ""))
          .join(" ");

        fullText += `--- Page ${i} ---\n${pageText}\n\n`;
        setCurrentPage(i);
        setProgress(Math.round((i / pages) * 100));
      }

      setExtractedText(fullText.trim());
    } catch (err) {
      setError(err instanceof Error ? err.message : pdf.failed);
    } finally {
      setIsProcessing(false);
    }
  }, [pdf.failed]);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      const droppedFile = e.dataTransfer.files[0];
      if (droppedFile?.type === "application/pdf") {
        processFile(droppedFile);
      } else {
        setError(pdf.invalidFile);
      }
    },
    [processFile, pdf.invalidFile]
  );

  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const selectedFile = e.target.files?.[0];
      if (selectedFile) {
        processFile(selectedFile);
      }
    },
    [processFile]
  );

  const handleCopy = useCallback(async () => {
    await navigator.clipboard.writeText(extractedText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [extractedText]);

  const handleReset = useCallback(() => {
    setFile(null);
    setExtractedText("");
    setMetadata(null);
    setError(null);
    setProgress(0);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }, []);

  return (
    <div className="p-6 md:p-8">
      {!file && (
        <div
          onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
          onDragLeave={() => setIsDragging(false)}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className={`relative cursor-pointer rounded-xl border-2 border-dashed transition-all duration-300 p-12 flex flex-col items-center justify-center gap-4 ${
            isDragging
              ? "!border-orange-400/60 bg-orange-400/5"
              : "!border-[var(--header-border-color)] hover:!border-orange-400/30 hover:bg-orange-400/[0.02]"
          }`}
        >
          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-400/10 to-pink-500/10 flex items-center justify-center transition-transform duration-300 ${isDragging ? "scale-110" : ""}`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 opacity-40">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
            </svg>
          </div>
          <div className="text-center">
            <p className="text-sm font-medium opacity-60">
              {isDragging ? pdf.dropHere : pdf.dragOrClick}
            </p>
            <p className="text-xs opacity-30 mt-1">{pdf.localOnly}</p>
          </div>
          <input ref={fileInputRef} type="file" accept=".pdf,application/pdf" onChange={handleFileChange} className="hidden" />
        </div>
      )}

      {isProcessing && (
        <div className="flex flex-col gap-4 py-8">
          <div className="flex items-center justify-between text-xs opacity-50">
            <span className="truncate max-w-[60%]">{pdf.processing} {file?.name}...</span>
            <span className="font-mono">{currentPage}/{totalPages} — {progress}%</span>
          </div>
          <div className="w-full h-2 rounded-full bg-[var(--header-border-color)] overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-orange-400 to-pink-500 transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      )}

      {error && (
        <div className="rounded-xl border !border-red-500/20 bg-red-500/5 p-4 flex items-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-red-400 shrink-0">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
          </svg>
          <p className="text-sm text-red-400">{error}</p>
          <button type="button" onClick={handleReset} className="ml-auto text-xs opacity-50 hover:opacity-100 transition-opacity underline">
            {pdf.tryAgain}
          </button>
        </div>
      )}

      {extractedText && !isProcessing && (
        <div className="space-y-4">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <div className="flex items-center gap-3 min-w-0">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-400/20 to-pink-500/20 flex items-center justify-center shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 opacity-50">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              </div>
              <span className="text-sm opacity-60 truncate">{file?.name}</span>
            </div>
            <div className="flex items-center gap-2">
              <button type="button" onClick={handleCopy} className="flex items-center gap-2 text-xs px-4 py-2 rounded-lg border !border-[var(--header-border-color)] opacity-60 hover:opacity-100 transition-all duration-200 hover:bg-orange-400/5">
                {copied ? (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5 text-emerald-400">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                    {pdf.copied}
                  </>
                ) : (
                  <>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9.75a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
                    </svg>
                    {pdf.copyAll}
                  </>
                )}
              </button>
              <button type="button" onClick={handleReset} className="flex items-center gap-2 text-xs px-4 py-2 rounded-lg border !border-[var(--header-border-color)] opacity-60 hover:opacity-100 transition-all duration-200 hover:bg-red-400/5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182" />
                </svg>
                {pdf.newFile}
              </button>
            </div>
          </div>

          {/* Metadata */}
          {metadata && Object.keys(metadata).length > 0 && (
            <div className="rounded-xl border !border-[var(--header-border-color)] overflow-hidden">
              <div className="px-4 py-2.5 border-b !border-[var(--header-border-color)] bg-orange-400/[0.03]">
                <span className="text-xs uppercase tracking-wider opacity-40 font-medium">Metadata</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-[var(--header-border-color)]">
                {Object.entries(metadata).map(([key, value], i) => (
                  <div key={key} className={`flex items-baseline gap-3 px-4 py-2 ${i >= 2 ? "border-t !border-[var(--header-border-color)]" : ""}`}>
                    <span className="text-[11px] uppercase tracking-wider opacity-30 shrink-0 w-24">{key}</span>
                    <span className="text-xs opacity-60 truncate">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Extracted text */}
          <div className="relative rounded-xl border !border-[var(--header-border-color)] overflow-hidden">
            <pre className="p-5 text-sm leading-relaxed opacity-70 max-h-[500px] overflow-auto whitespace-pre-wrap break-words font-[inherit]">
              {extractedText}
            </pre>
            <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-[var(--background)] to-transparent pointer-events-none" />
          </div>
        </div>
      )}
    </div>
  );
}

/* ─── Autocomplete data ─── */

const HTML_TAGS = [
  "div", "span", "p", "a", "h1", "h2", "h3", "h4", "h5", "h6",
  "ul", "ol", "li", "table", "tr", "td", "th", "thead", "tbody",
  "form", "input", "button", "select", "option", "textarea", "label",
  "img", "video", "audio", "source", "canvas", "svg", "path",
  "section", "article", "aside", "header", "footer", "nav", "main",
  "strong", "em", "br", "hr", "pre", "code", "blockquote",
];

const HTML_ATTRS = [
  "class", "id", "style", "src", "href", "alt", "title", "type",
  "name", "value", "placeholder", "disabled", "hidden", "target",
  "rel", "width", "height", "action", "method", "for", "role",
  "aria-label", "aria-hidden", "data-", "onclick", "onchange",
];

const TW_CLASSES = [
  // Layout
  "flex", "flex-col", "flex-row", "flex-wrap", "inline-flex", "grid", "grid-cols-1", "grid-cols-2",
  "grid-cols-3", "grid-cols-4", "block", "inline-block", "inline", "hidden",
  "items-center", "items-start", "items-end", "items-stretch",
  "justify-center", "justify-between", "justify-start", "justify-end", "justify-around",
  "self-center", "self-start", "self-end",
  // Spacing
  "p-0", "p-1", "p-2", "p-3", "p-4", "p-5", "p-6", "p-8", "p-10", "p-12",
  "px-0", "px-1", "px-2", "px-3", "px-4", "px-5", "px-6", "px-8",
  "py-0", "py-1", "py-2", "py-3", "py-4", "py-5", "py-6", "py-8",
  "pt-0", "pt-1", "pt-2", "pt-4", "pt-8", "pb-0", "pb-1", "pb-2", "pb-4", "pb-8",
  "pl-0", "pl-1", "pl-2", "pl-4", "pr-0", "pr-1", "pr-2", "pr-4",
  "m-0", "m-1", "m-2", "m-3", "m-4", "m-auto",
  "mx-auto", "mx-0", "mx-1", "mx-2", "mx-4",
  "my-0", "my-1", "my-2", "my-4", "my-8",
  "mt-0", "mt-1", "mt-2", "mt-4", "mt-8", "mb-0", "mb-1", "mb-2", "mb-4", "mb-8",
  "gap-0", "gap-1", "gap-2", "gap-3", "gap-4", "gap-5", "gap-6", "gap-8",
  "space-x-1", "space-x-2", "space-x-4", "space-y-1", "space-y-2", "space-y-4",
  // Sizing
  "w-full", "w-auto", "w-screen", "w-1/2", "w-1/3", "w-2/3", "w-1/4", "w-3/4",
  "w-0", "w-1", "w-2", "w-4", "w-6", "w-8", "w-10", "w-12", "w-16", "w-20", "w-24", "w-32", "w-48", "w-64",
  "h-full", "h-auto", "h-screen", "h-0", "h-1", "h-2", "h-4", "h-6", "h-8", "h-10", "h-12", "h-16", "h-24", "h-32", "h-48", "h-64",
  "min-h-screen", "min-h-full", "min-w-0", "max-w-sm", "max-w-md", "max-w-lg", "max-w-xl",
  "max-w-2xl", "max-w-3xl", "max-w-4xl", "max-w-5xl", "max-w-full", "max-w-screen-xl",
  // Typography
  "text-xs", "text-sm", "text-base", "text-lg", "text-xl", "text-2xl", "text-3xl", "text-4xl", "text-5xl",
  "font-thin", "font-light", "font-normal", "font-medium", "font-semibold", "font-bold", "font-extrabold",
  "text-left", "text-center", "text-right", "text-justify",
  "uppercase", "lowercase", "capitalize", "normal-case",
  "tracking-tight", "tracking-normal", "tracking-wide", "tracking-wider", "tracking-widest",
  "leading-none", "leading-tight", "leading-normal", "leading-relaxed", "leading-loose",
  "truncate", "line-clamp-1", "line-clamp-2", "line-clamp-3",
  "underline", "no-underline", "line-through", "italic", "not-italic",
  // Colors
  "text-white", "text-black", "text-transparent",
  "text-gray-50", "text-gray-100", "text-gray-200", "text-gray-300", "text-gray-400",
  "text-gray-500", "text-gray-600", "text-gray-700", "text-gray-800", "text-gray-900",
  "text-red-400", "text-red-500", "text-red-600",
  "text-blue-400", "text-blue-500", "text-blue-600",
  "text-green-400", "text-green-500", "text-green-600",
  "text-emerald-400", "text-emerald-500", "text-emerald-600",
  "text-purple-400", "text-purple-500", "text-purple-600",
  "text-indigo-400", "text-indigo-500", "text-indigo-600",
  "text-yellow-400", "text-yellow-500", "text-orange-400", "text-orange-500",
  "text-pink-400", "text-pink-500", "text-teal-400", "text-teal-500", "text-cyan-400", "text-cyan-500",
  "bg-white", "bg-black", "bg-transparent",
  "bg-gray-50", "bg-gray-100", "bg-gray-200", "bg-gray-300", "bg-gray-400",
  "bg-gray-500", "bg-gray-600", "bg-gray-700", "bg-gray-800", "bg-gray-900",
  "bg-red-400", "bg-red-500", "bg-red-600",
  "bg-blue-400", "bg-blue-500", "bg-blue-600",
  "bg-green-400", "bg-green-500", "bg-green-600",
  "bg-emerald-400", "bg-emerald-500", "bg-emerald-600",
  "bg-purple-400", "bg-purple-500", "bg-purple-600",
  "bg-indigo-400", "bg-indigo-500", "bg-indigo-600",
  "bg-yellow-400", "bg-yellow-500", "bg-orange-400", "bg-orange-500",
  "bg-gradient-to-r", "bg-gradient-to-l", "bg-gradient-to-t", "bg-gradient-to-b",
  "bg-gradient-to-br", "bg-gradient-to-bl", "bg-gradient-to-tr", "bg-gradient-to-tl",
  "from-white", "from-black", "from-emerald-400", "from-emerald-500",
  "to-white", "to-black", "to-emerald-400", "to-emerald-500",
  "via-emerald-300", "via-purple-500",
  // Borders
  "border", "border-0", "border-2", "border-4",
  "border-t", "border-b", "border-l", "border-r",
  "border-gray-200", "border-gray-300", "border-gray-600", "border-gray-700",
  "border-white", "border-black", "border-transparent",
  "rounded", "rounded-sm", "rounded-md", "rounded-lg", "rounded-xl", "rounded-2xl", "rounded-3xl", "rounded-full", "rounded-none",
  "divide-x", "divide-y", "divide-gray-200",
  // Effects
  "shadow", "shadow-sm", "shadow-md", "shadow-lg", "shadow-xl", "shadow-2xl", "shadow-none",
  "opacity-0", "opacity-25", "opacity-50", "opacity-75", "opacity-100",
  "blur", "blur-sm", "blur-md", "blur-lg",
  "backdrop-blur", "backdrop-blur-sm", "backdrop-blur-md", "backdrop-blur-lg",
  // Transitions
  "transition", "transition-all", "transition-colors", "transition-opacity", "transition-transform",
  "duration-100", "duration-150", "duration-200", "duration-300", "duration-500", "duration-700",
  "ease-in", "ease-out", "ease-in-out",
  "animate-spin", "animate-ping", "animate-pulse", "animate-bounce",
  // Transforms
  "scale-0", "scale-50", "scale-75", "scale-90", "scale-95", "scale-100", "scale-105", "scale-110", "scale-125", "scale-150",
  "rotate-0", "rotate-1", "rotate-2", "rotate-3", "rotate-6", "rotate-12", "rotate-45", "rotate-90", "rotate-180",
  "translate-x-0", "translate-x-1", "translate-x-2", "translate-x-4",
  "translate-y-0", "translate-y-1", "translate-y-2", "translate-y-4",
  // Position
  "relative", "absolute", "fixed", "sticky", "static",
  "inset-0", "top-0", "right-0", "bottom-0", "left-0",
  "z-0", "z-10", "z-20", "z-30", "z-40", "z-50",
  // Overflow
  "overflow-hidden", "overflow-auto", "overflow-scroll", "overflow-visible",
  "overflow-x-auto", "overflow-y-auto", "overflow-x-hidden", "overflow-y-hidden",
  // Interactivity
  "cursor-pointer", "cursor-default", "cursor-not-allowed",
  "select-none", "select-text", "select-all",
  "pointer-events-none", "pointer-events-auto",
  // Hover/Focus prefixes
  "hover:opacity-100", "hover:opacity-80", "hover:scale-105", "hover:scale-110",
  "hover:bg-gray-100", "hover:bg-gray-700", "hover:bg-emerald-600", "hover:bg-blue-600",
  "hover:text-white", "hover:shadow-lg", "hover:underline",
  "focus:outline-none", "focus:ring-2", "focus:ring-blue-500", "focus:ring-emerald-500",
  "active:scale-95",
  // Responsive
  "sm:flex", "sm:hidden", "sm:grid-cols-2",
  "md:flex", "md:hidden", "md:grid-cols-2", "md:grid-cols-3", "md:text-xl",
  "lg:flex", "lg:hidden", "lg:grid-cols-3", "lg:grid-cols-4",
  // Dark mode
  "dark:bg-gray-800", "dark:bg-gray-900", "dark:text-white", "dark:text-gray-300",
  "dark:border-gray-700",
];

type SuggestionContext = { type: "tag"; prefix: string } | { type: "attr"; prefix: string } | { type: "class"; prefix: string } | null;

function getAutocompleteContext(text: string, cursorPos: number): SuggestionContext {
  const before = text.slice(0, cursorPos);

  // Check if inside class="..."
  const classMatch = before.match(/class="([^"]*)$/);
  if (classMatch) {
    const classStr = classMatch[1];
    const parts = classStr.split(/\s+/);
    const prefix = parts[parts.length - 1] || "";
    return { type: "class", prefix };
  }

  // Check if typing an attribute (inside a tag, after space)
  const attrMatch = before.match(/<\w+[^>]*\s+(\w*)$/);
  if (attrMatch) {
    return { type: "attr", prefix: attrMatch[1] };
  }

  // Check if typing a tag name (after <)
  const tagMatch = before.match(/<(\w*)$/);
  if (tagMatch) {
    return { type: "tag", prefix: tagMatch[1] };
  }

  return null;
}

function getSuggestions(ctx: SuggestionContext): string[] {
  if (!ctx) return [];
  const prefix = ctx.prefix.toLowerCase();

  let pool: string[];
  switch (ctx.type) {
    case "tag": pool = HTML_TAGS; break;
    case "attr": pool = HTML_ATTRS; break;
    case "class": pool = TW_CLASSES; break;
  }

  if (!prefix) return pool.slice(0, 8);
  return pool.filter((item) => item.toLowerCase().startsWith(prefix)).slice(0, 8);
}

/* ─── HTML Preview ─── */

function HtmlPreview() {
  const [html, setHtml] = useState("<div class=\"flex flex-col items-center gap-4 p-8\">\n  <h1 class=\"text-4xl font-bold text-emerald-400\">Hello World!</h1>\n  <p class=\"text-gray-400\">Tailwind CSS is supported here.</p>\n  <button class=\"px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition\">\n    Click me\n  </button>\n</div>");
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const highlightRef = useRef<HTMLPreElement>(null);
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [selectedSuggestion, setSelectedSuggestion] = useState(0);
  const [autocompleteCtx, setAutocompleteCtx] = useState<SuggestionContext>(null);
  const [caretPos, setCaretPos] = useState<{ top: number; left: number }>({ top: 0, left: 0 });
  const { t } = useI18n();
  const strings = t.utils.htmlPreview;

  // Calculate caret pixel position using a mirror element
  const getCaretCoords = useCallback(() => {
    const ta = textareaRef.current;
    if (!ta) return { top: 0, left: 0 };

    const mirror = document.createElement("div");
    const style = window.getComputedStyle(ta);

    // Copy textarea styles to mirror
    const props = [
      "fontFamily", "fontSize", "fontWeight", "lineHeight", "letterSpacing",
      "wordSpacing", "whiteSpace", "wordBreak", "padding", "paddingTop",
      "paddingRight", "paddingBottom", "paddingLeft", "boxSizing", "width",
      "borderWidth", "borderStyle",
    ];
    for (const prop of props) {
      (mirror.style as unknown as Record<string, string>)[prop] = style.getPropertyValue(
        prop.replace(/[A-Z]/g, (m) => "-" + m.toLowerCase())
      );
    }
    mirror.style.position = "absolute";
    mirror.style.visibility = "hidden";
    mirror.style.overflow = "hidden";
    mirror.style.height = "auto";
    mirror.style.whiteSpace = "pre";
    mirror.style.overflowWrap = "normal";

    const text = ta.value.substring(0, ta.selectionStart);

    // Use innerHTML with proper newline handling
    const escaped = text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n/g, "<br/>");
    mirror.innerHTML = escaped;

    // Add a span at cursor to measure position
    const span = document.createElement("span");
    span.textContent = "|";
    mirror.appendChild(span);

    document.body.appendChild(mirror);
    const top = span.offsetTop - ta.scrollTop;
    const left = span.offsetLeft - ta.scrollLeft;
    document.body.removeChild(mirror);

    return { top, left };
  }, []);

  // Build srcdoc content for iframe (sandboxed without same-origin)
  const srcdoc = useMemo(() => {
    return `<!DOCTYPE html><html><head><script src="https://cdn.tailwindcss.com"><\/script><style>body{font-family:system-ui,sans-serif;padding:16px;margin:0;color:#ededed;background:#0a0a0a;}@media(prefers-color-scheme:light){body{color:#171717;background:#ffffff;}}</style></head><body>${html}</body></html>`;
  }, [html]);

  // Syntax highlight with Prism
  const highlighted = useMemo(() => {
    return Prism.highlight(html, Prism.languages.markup, "markup");
  }, [html]);

  // Sync scroll between textarea and highlight overlay
  const handleScroll = useCallback(() => {
    if (textareaRef.current && highlightRef.current) {
      highlightRef.current.scrollTop = textareaRef.current.scrollTop;
      highlightRef.current.scrollLeft = textareaRef.current.scrollLeft;
    }
  }, []);

  // Update autocomplete on cursor change
  const updateAutocomplete = useCallback(() => {
    const ta = textareaRef.current;
    if (!ta) return;
    const ctx = getAutocompleteContext(ta.value, ta.selectionStart);
    setAutocompleteCtx(ctx);
    const items = getSuggestions(ctx);
    setSuggestions(items);
    setSelectedSuggestion(0);
    if (items.length > 0) {
      setCaretPos(getCaretCoords());
    }
  }, [getCaretCoords]);

  const applySuggestion = useCallback((suggestion: string) => {
    const ta = textareaRef.current;
    if (!ta || !autocompleteCtx) return;

    const cursorPos = ta.selectionStart;
    const prefix = autocompleteCtx.prefix;
    const before = html.slice(0, cursorPos - prefix.length);
    const after = html.slice(cursorPos);

    let insertion = suggestion;
    // Auto-complete tag with closing bracket and attributes
    if (autocompleteCtx.type === "tag") {
      insertion = suggestion;
    }
    // Add ="" after attribute
    if (autocompleteCtx.type === "attr") {
      insertion = suggestion + '="';
    }
    // Add space after class for next class
    if (autocompleteCtx.type === "class") {
      insertion = suggestion;
    }

    const newHtml = before + insertion + after;
    setHtml(newHtml);
    setSuggestions([]);

    // Set cursor position after insertion
    requestAnimationFrame(() => {
      const newPos = before.length + insertion.length;
      ta.selectionStart = newPos;
      ta.selectionEnd = newPos;
      ta.focus();
    });
  }, [html, autocompleteCtx]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (suggestions.length === 0) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedSuggestion((prev) => (prev + 1) % suggestions.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedSuggestion((prev) => (prev - 1 + suggestions.length) % suggestions.length);
    } else if (e.key === "Tab" || e.key === "Enter") {
      if (suggestions[selectedSuggestion]) {
        e.preventDefault();
        applySuggestion(suggestions[selectedSuggestion]);
      }
    } else if (e.key === "Escape") {
      setSuggestions([]);
    }
  }, [suggestions, selectedSuggestion, applySuggestion]);

  return (
    <div className="p-6 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Code editor with syntax highlighting */}
        <div className="flex flex-col">
          <div className="flex items-center gap-2 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 opacity-40">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
            </svg>
            <span className="text-xs uppercase tracking-wider opacity-40 font-medium">{strings.code}</span>
          </div>
          <div className="relative">
            <div className="rounded-xl border !border-[var(--header-border-color)] overflow-hidden h-[300px] md:h-[400px] bg-[#1a1a2e] relative">
              {/* Highlighted code (visual layer) */}
              <pre
                ref={highlightRef}
                className="absolute inset-0 p-4 text-sm font-mono leading-relaxed overflow-hidden pointer-events-none m-0"
                aria-hidden="true"
                dangerouslySetInnerHTML={{ __html: highlighted + "\n" }}
                style={{ whiteSpace: "pre" }}
              />
              {/* Textarea (input layer) */}
              <textarea
                ref={textareaRef}
                value={html}
                onChange={(e) => {
                  setHtml(e.target.value);
                  requestAnimationFrame(updateAutocomplete);
                }}
                onClick={updateAutocomplete}
                onKeyDown={handleKeyDown}
                onScroll={handleScroll}
                onBlur={() => setTimeout(() => setSuggestions([]), 150)}
                placeholder={strings.placeholder}
                className="absolute inset-0 w-full h-full p-4 bg-transparent text-transparent caret-indigo-400 text-sm font-mono leading-relaxed focus:outline-none resize-none z-10"
                spellCheck={false}
                style={{ whiteSpace: "pre", overflowX: "auto", overflowWrap: "normal" }}
              />
            </div>

            {/* Autocomplete dropdown — follows caret */}
            {suggestions.length > 0 && (
              <div className="absolute z-20 w-64 bg-[#12122a] border !border-indigo-500/20 rounded-lg shadow-xl shadow-black/40 overflow-hidden"
                style={{ maxHeight: "200px", top: caretPos.top + 24, left: Math.min(caretPos.left, 200) }}
              >
                {suggestions.map((s, i) => (
                  <button
                    key={s}
                    type="button"
                    onMouseDown={(e) => { e.preventDefault(); applySuggestion(s); }}
                    className={`w-full text-left px-3 py-1.5 text-xs font-mono transition-colors duration-75 flex items-center gap-2 ${
                      i === selectedSuggestion
                        ? "bg-indigo-500/20 text-indigo-300"
                        : "text-gray-400 hover:bg-white/5"
                    }`}
                  >
                    <span className={`shrink-0 w-4 h-4 rounded text-[9px] font-bold flex items-center justify-center ${
                      autocompleteCtx?.type === "tag" ? "bg-pink-500/20 text-pink-400" :
                      autocompleteCtx?.type === "attr" ? "bg-purple-500/20 text-purple-400" :
                      "bg-teal-500/20 text-teal-400"
                    }`}>
                      {autocompleteCtx?.type === "tag" ? "T" : autocompleteCtx?.type === "attr" ? "A" : "C"}
                    </span>
                    {s}
                  </button>
                ))}
                <div className="px-3 py-1 text-[10px] opacity-25 border-t !border-white/5">
                  Tab / Enter
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Preview */}
        <div className="flex flex-col">
          <div className="flex items-center gap-2 mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 opacity-40">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-xs uppercase tracking-wider opacity-40 font-medium">{strings.preview}</span>
          </div>
          <div className="rounded-xl border !border-[var(--header-border-color)] overflow-hidden h-[300px] md:h-[400px]">
            <iframe
              title="HTML Preview"
              sandbox="allow-scripts"
              srcDoc={srcdoc}
              className="w-full h-full border-0 bg-[var(--background)]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

/* ─── Text Diff ─── */

interface DiffLine {
  type: "added" | "removed" | "unchanged";
  text: string;
}

function computeDiff(original: string, modified: string): DiffLine[] {
  const origLines = original.split("\n");
  const modLines = modified.split("\n");

  const m = origLines.length;
  const n = modLines.length;

  // LCS via DP
  const dp: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = origLines[i - 1] === modLines[j - 1]
        ? dp[i - 1][j - 1] + 1
        : Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }

  const result: DiffLine[] = [];
  let i = m, j = n;
  const stack: DiffLine[] = [];

  while (i > 0 || j > 0) {
    if (i > 0 && j > 0 && origLines[i - 1] === modLines[j - 1]) {
      stack.push({ type: "unchanged", text: origLines[i - 1] });
      i--; j--;
    } else if (j > 0 && (i === 0 || dp[i][j - 1] >= dp[i - 1][j])) {
      stack.push({ type: "added", text: modLines[j - 1] });
      j--;
    } else {
      stack.push({ type: "removed", text: origLines[i - 1] });
      i--;
    }
  }

  while (stack.length) result.push(stack.pop()!);
  return result;
}

function TextDiff() {
  const [original, setOriginal] = useState("");
  const [modified, setModified] = useState("");
  const { t } = useI18n();
  const strings = t.utils.textDiff;

  const diff = useMemo(() => {
    if (!original && !modified) return [];
    return computeDiff(original, modified);
  }, [original, modified]);

  const stats = useMemo(() => {
    let added = 0, removed = 0;
    diff.forEach((d) => {
      if (d.type === "added") added++;
      if (d.type === "removed") removed++;
    });
    return { added, removed };
  }, [diff]);

  return (
    <div className="p-6 md:p-8 space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Original */}
        <div className="flex flex-col">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400/60" />
            <span className="text-xs uppercase tracking-wider opacity-40 font-medium">{strings.original}</span>
            <span className="text-[10px] font-mono opacity-25 ml-auto">{original.length}</span>
          </div>
          <textarea
            value={original}
            onChange={(e) => setOriginal(e.target.value)}
            placeholder={strings.originalPlaceholder}
            className="w-full h-[200px] md:h-[250px] p-4 rounded-xl border !border-[var(--header-border-color)] bg-transparent text-sm font-mono leading-relaxed opacity-70 focus:opacity-100 focus:outline-none focus:!border-teal-400/40 transition-all duration-300 resize-none"
            spellCheck={false}
          />
        </div>

        {/* Modified */}
        <div className="flex flex-col">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/60" />
            <span className="text-xs uppercase tracking-wider opacity-40 font-medium">{strings.modified}</span>
            <span className="text-[10px] font-mono opacity-25 ml-auto">{modified.length}</span>
          </div>
          <textarea
            value={modified}
            onChange={(e) => setModified(e.target.value)}
            placeholder={strings.modifiedPlaceholder}
            className="w-full h-[200px] md:h-[250px] p-4 rounded-xl border !border-[var(--header-border-color)] bg-transparent text-sm font-mono leading-relaxed opacity-70 focus:opacity-100 focus:outline-none focus:!border-teal-400/40 transition-all duration-300 resize-none"
            spellCheck={false}
          />
        </div>
      </div>

      {/* Diff output */}
      {diff.length > 0 && (
        <div className="space-y-3">
          {/* Stats */}
          <div className="flex items-center gap-4">
            <span className="text-xs opacity-40 flex items-center gap-1.5">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400" />
              +{stats.added} {strings.added}
            </span>
            <span className="text-xs opacity-40 flex items-center gap-1.5">
              <span className="inline-block w-2 h-2 rounded-full bg-red-400" />
              -{stats.removed} {strings.removed}
            </span>
          </div>

          {/* Diff view */}
          <div className="rounded-xl border !border-[var(--header-border-color)] overflow-hidden">
            <div className="max-h-[400px] overflow-auto">
              {diff.map((line, idx) => (
                <div
                  key={idx}
                  className={`flex text-sm font-mono ${
                    line.type === "added"
                      ? "bg-emerald-400/10"
                      : line.type === "removed"
                      ? "bg-red-400/10"
                      : ""
                  }`}
                >
                  <span
                    className={`shrink-0 w-8 text-center text-xs leading-6 select-none ${
                      line.type === "added"
                        ? "text-emerald-400/60"
                        : line.type === "removed"
                        ? "text-red-400/60"
                        : "opacity-20"
                    }`}
                  >
                    {line.type === "added" ? "+" : line.type === "removed" ? "−" : " "}
                  </span>
                  <pre className="flex-1 px-3 py-0.5 leading-6 whitespace-pre-wrap break-words opacity-70">
                    {line.text || " "}
                  </pre>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {original && modified && diff.length > 0 && stats.added === 0 && stats.removed === 0 && (
        <div className="text-center py-4">
          <p className="text-sm opacity-40">{strings.noDifferences}</p>
        </div>
      )}
    </div>
  );
}
