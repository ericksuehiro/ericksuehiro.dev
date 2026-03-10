"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { useI18n } from "../i18n/context";

export default function Utils() {
  const [mounted, setMounted] = useState(false);
  const [activeTool, setActiveTool] = useState<string | null>(null);
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
  ];

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
        {tools.map((tool, index) => (
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
              onClick={() => setActiveTool(activeTool === tool.id ? null : tool.id)}
              className="group relative block w-full text-left"
            >
              <div
                className={`absolute -inset-px bg-gradient-to-r ${tool.gradient} rounded-2xl transition-all duration-500`}
                style={{ opacity: activeTool === tool.id ? 0.6 : 0 }}
              />
              <div
                className={`relative rounded-2xl bg-[var(--background)] p-6 md:p-8 transition-all duration-500 overflow-hidden ${
                  activeTool === tool.id ? "rounded-b-none" : ""
                }`}
              >
                <div
                  className={`absolute top-0 left-0 h-px bg-gradient-to-r ${tool.gradient} transition-all duration-700 ease-out`}
                  style={{ width: activeTool === tool.id ? "100%" : "0%" }}
                />
                <div className="relative flex items-center gap-5">
                  <div
                    className={`shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${tool.gradient} text-white flex items-center justify-center shadow-lg transition-all duration-500`}
                    style={{
                      transform: activeTool === tool.id ? "scale(1.1) rotate(-3deg)" : "scale(1)",
                      boxShadow: activeTool === tool.id ? `0 8px 30px ${tool.accentColor}33` : "0 4px 12px rgba(0,0,0,0.1)",
                    }}
                  >
                    {tool.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-xl md:text-2xl font-bold tracking-tight">{tool.title}</h2>
                    <p className="text-sm opacity-45 mt-1">{tool.description}</p>
                  </div>
                  <div
                    className="shrink-0 w-8 h-8 rounded-lg border !border-[var(--header-border-color)] flex items-center justify-center transition-all duration-300"
                    style={{ transform: activeTool === tool.id ? "rotate(180deg)" : "rotate(0deg)" }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 opacity-40">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                  </div>
                </div>
              </div>
            </button>

            <div
              className="overflow-hidden transition-all duration-500 ease-out"
              style={{
                maxHeight: activeTool === tool.id ? "2000px" : "0px",
                opacity: activeTool === tool.id ? 1 : 0,
              }}
            >
              <div className="border !border-[var(--header-border-color)] border-t-0 rounded-b-2xl bg-[var(--background)]">
                {tool.id === "pdf-to-text" && <PdfToText />}
              </div>
            </div>
          </div>
        ))}
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

function PdfToText() {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [extractedText, setExtractedText] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { t } = useI18n();
  const pdf = t.utils.pdfToText;

  const processFile = useCallback(async (pdfFile: File) => {
    setFile(pdfFile);
    setError(null);
    setExtractedText("");
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

      let fullText = "";
      const totalPages = pdfDoc.numPages;

      for (let i = 1; i <= totalPages; i++) {
        const page = await pdfDoc.getPage(i);
        const textContent = await page.getTextContent();
        const pageText = textContent.items
          .map((item) => ("str" in item ? item.str : ""))
          .join(" ");

        fullText += `--- Page ${i} ---\n${pageText}\n\n`;
        setProgress(Math.round((i / totalPages) * 100));
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
        <div className="flex flex-col items-center gap-4 py-8">
          <div className="w-full max-w-xs h-1.5 rounded-full bg-[var(--header-border-color)] overflow-hidden">
            <div className="h-full rounded-full bg-gradient-to-r from-orange-400 to-pink-500 transition-all duration-300 ease-out" style={{ width: `${progress}%` }} />
          </div>
          <p className="text-sm opacity-50">
            {pdf.processing} {file?.name}... {progress}%
          </p>
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
