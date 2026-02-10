import { useEffect, useRef, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import config from "../../../config";
import type { Book } from "../types";

export function usePdfViewer(allBooks: Book[]) {
  const [activePdf, setActivePdf] = useState<string | null>(null);
  const [pdfName, setPdfName] = useState<string | null>(null);
  const [zoom, setZoom] = useState(1);

  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();
  const isClosingRef = useRef(false);

  const openPdf = async (pdf: string, id?: string) => {
    const url = pdf.startsWith("http")
      ? pdf
      : `${config.apiURL}/uploads/${pdf}`;
    try {
      const res = await fetch(url, { credentials: "include" });
      if (!res.ok) throw new Error("Failed to fetch PDF");
      const blob = await res.blob();
      const blobUrl = URL.createObjectURL(blob);
      setActivePdf(blobUrl);
      setPdfName(pdf);
      setZoom(1);

      if (id) {
        const next = new URLSearchParams(location.search);
        next.set("pdf", id);
        const newUrl = `${location.pathname}?${next.toString()}`;
        navigate(newUrl, { replace: false });
        setSearchParams(next, { replace: false });
      }
    } catch (err) {
      console.error("openPdf error", err);
    }
  };

  // If URL already has ?pdf=ID, open it after books load
  useEffect(() => {
    const idFromUrl = searchParams.get("pdf");
    if (isClosingRef.current) return; // prevent immediate reopen after closing
    if (!activePdf && idFromUrl && allBooks.length > 0) {
      const match = allBooks.find((b) => b.id === idFromUrl);
      if (match?.pdf) {
        openPdf(match.pdf, match.id);
      } else {
        const next = new URLSearchParams(searchParams);
        next.delete("pdf");
        setSearchParams(next, { replace: true });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allBooks, searchParams, activePdf]);

  const closePdf = () => {
    isClosingRef.current = true;
    const next = new URLSearchParams(location.search);
    next.delete("pdf");
    const search = next.toString();
    const newUrl = `${location.pathname}${search ? `?${search}` : ""}`;
    navigate(newUrl, { replace: true });
    setSearchParams(next, { replace: true });

    if (activePdf?.startsWith("blob:")) URL.revokeObjectURL(activePdf);
    setActivePdf(null);
    setPdfName(null);

    setTimeout(() => {
      isClosingRef.current = false;
    }, 0);
  };

  const downloadPdf = async () => {
    if (!activePdf) return;

    if (activePdf.startsWith("blob:")) {
      const a = document.createElement("a");
      a.href = activePdf;
      a.download = pdfName || "document.pdf";
      document.body.appendChild(a);
      a.click();
      a.remove();
      return;
    }

    const res = await fetch(activePdf, { credentials: "include" });
    if (!res.ok) throw new Error("Failed to fetch PDF");
    const blob = await res.blob();
    const blobUrl = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = blobUrl;
    a.download = pdfName || "document.pdf";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(blobUrl);
  };

  return {
    activePdf,
    pdfName,
    zoom,
    setZoom,
    openPdf,
    closePdf,
    downloadPdf,
    searchParams, // expose in case needed by caller
  } as const;
}
