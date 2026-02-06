import React, { useState, useRef, useEffect } from "react";
import { useSearchParams, useNavigate, useLocation } from "react-router-dom";
import {
  EBooksContainer,
  StyledBooksContainer,
  StyledSearchContainer,
  StyledButton,
  StyledTextField,
  PdfCard,
  PdfOverlay,
  CloseButton,
  PdfToolbar,
  PdfTitle,
  ToolbarButton,
  PdfFrameWrapper,
} from "./Ebooks.styled";
import axios from "axios";
import BookCard from "./components/Ebook/BookCard";
import config from "../../config";

type Book = {
  id: string;
  title: string;
  author: string;
  description: string;
  image: {
    url: string;
    publicId: string;
  };
  pdf?: string;
};

// Shape returned by backend (may use _id)
type BackendBook = {
  _id?: string;
  id?: string;
  title: string;
  author: string;
  description: string;
  image: {
    url: string;
    publicId: string;
  };
  pdf?: string;
};

const EBooks: React.FC = () => {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);
  const [allBooks, setAllBooks] = useState<Book[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const [activePdf, setActivePdf] = useState<string | null>(null);
  const [pdfName, setPdfName] = useState<string | null>(null);
  const [zoom, setZoom] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();
  const isClosingRef = useRef(false);

  // Pagination
  const [currentPage, setCurrentPage] = useState<number>(1);
  const booksPerPage = 10;

  const handleSubmit = () => {
    setSubmitted(true);
    handleRead();
  };

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await axios.get(`${config.apiBaseURL}/books`);
      const backendBooks = response.data.data as BackendBook[];
      const mappedBooks: Book[] = backendBooks.map((book: BackendBook, i) => ({
        id: book._id ?? book.id ?? String(i),
        title: book.title,
        author: book.author,
        description: book.description,
        image: book.image,
        pdf: book.pdf,
      }));
      setAllBooks(mappedBooks);
      setFilteredBooks(mappedBooks);
    };
    fetchBooks();
  }, []);

  const handleRead = () => {
    const value = inputRef.current?.value.toLowerCase() || "";
    if (value === "") {
      setFilteredBooks(allBooks);
    } else {
      const results = allBooks.filter(
        (book) =>
          book.title.toLowerCase().includes(value) ||
          book.author.toLowerCase().includes(value),
      );
      setFilteredBooks(results);
    }
    setCurrentPage(1);
  };

  const currentBooks = filteredBooks.slice(
    (currentPage - 1) * booksPerPage,
    currentPage * booksPerPage,
  );

  const handleNextPage = () => {
    if (currentPage < Math.ceil(filteredBooks.length / booksPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Open pdf in overlay (already used by BookCard)
  const openPdf = async (pdf: string, id?: string) => {
    const url = pdf.startsWith("http")
      ? pdf
      : `${config.apiURL}/uploads/${pdf}`; // <-- use apiURL (no /api/v1)
    try {
      const res = await fetch(url, { credentials: "include" });
      if (!res.ok) throw new Error("Failed to fetch PDF");
      const blob = await res.blob();
      const blobUrl = URL.createObjectURL(blob);
      setActivePdf(blobUrl);
      setPdfName(pdf);
      setZoom(1);
      // reflect opened pdf in URL using navigate for reliability
      if (id) {
        const next = new URLSearchParams(location.search);
        next.set("pdf", id);
        const newUrl = `${location.pathname}?${next.toString()}`;
        navigate(newUrl, { replace: false });
        // also sync via setSearchParams to ensure router state updates everywhere
        setSearchParams(next, { replace: false });
      }
      // revoke when closed: URL.revokeObjectURL(blobUrl) in close handler
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
        // invalid id -> clean param
        const next = new URLSearchParams(searchParams);
        next.delete("pdf");
        setSearchParams(next, { replace: true });
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [allBooks, searchParams, activePdf]);

  const closePdf = () => {
    isClosingRef.current = true;
    // Remove URL param first to prevent auto-reopen race
    const next = new URLSearchParams(location.search);
    next.delete("pdf");
    const search = next.toString();
    const newUrl = `${location.pathname}${search ? `?${search}` : ""}`;
    navigate(newUrl, { replace: true });
    // also update search params hook for consistency
    setSearchParams(next, { replace: true });

    if (activePdf?.startsWith("blob:")) URL.revokeObjectURL(activePdf);
    setActivePdf(null);
    setPdfName(null);

    // allow re-open from URL again next tick
    setTimeout(() => {
      isClosingRef.current = false;
    }, 0);
  };

  // Download PDF via fetch + blob (avoids popup issues)
  const downloadPdf = async () => {
    if (!activePdf) return;

    // if already a blob URL, just trigger download
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

  return (
    <EBooksContainer $darkMode={false}>
      {!activePdf ? (
        <>
          <h1>E-Books Collection</h1>
          <StyledSearchContainer>
            <StyledTextField
              placeholder="Search by title or author"
              $darkMode={false}
              ref={inputRef}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSubmit();
              }}
            />
            <StyledButton $darkMode={false} onClick={handleSubmit}>
              Search
            </StyledButton>
          </StyledSearchContainer>

          {submitted && filteredBooks.length === 0 && (
            <p style={{ color: "red" }}>No results found.</p>
          )}

          <StyledBooksContainer>
            {currentBooks.map((book) => (
              <BookCard
                book={book}
                key={book.id}
                onRead={(pdf) => openPdf(pdf, book.id)}
              />
            ))}
          </StyledBooksContainer>

          <div style={{ marginTop: "20px" }}>
            <StyledButton
              $darkMode={false}
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
            >
              Previous
            </StyledButton>
            <span style={{ margin: "0 10px" }}>
              Page {currentPage} of{" "}
              {Math.ceil(filteredBooks.length / booksPerPage)}
            </span>
            <StyledButton
              $darkMode={false}
              onClick={handleNextPage}
              disabled={
                currentPage === Math.ceil(filteredBooks.length / booksPerPage)
              }
            >
              Next
            </StyledButton>
          </div>
        </>
      ) : (
        <PdfOverlay onClick={closePdf}>
          <PdfCard onClick={(e) => e.stopPropagation()}>
            <PdfToolbar>
              <PdfTitle>{pdfName}</PdfTitle>
              <ToolbarButton
                onClick={() => setZoom((z) => Math.max(0.5, z - 0.25))}
              >
                −
              </ToolbarButton>
              <ToolbarButton
                onClick={() => setZoom((z) => Math.min(3, z + 0.25))}
              >
                +
              </ToolbarButton>
              <ToolbarButton onClick={downloadPdf}>Download</ToolbarButton>
              <CloseButton onClick={closePdf}>Close</CloseButton>
            </PdfToolbar>

            <PdfFrameWrapper>
              <iframe
                src={activePdf}
                title="PDF Reader"
                style={{
                  width: "100%",
                  height: "100%",
                  border: "none",
                  transform: `scale(${zoom})`,
                  transformOrigin: "top center",
                }}
              />
            </PdfFrameWrapper>
          </PdfCard>
        </PdfOverlay>
      )}
    </EBooksContainer>
  );
};

export default EBooks;
