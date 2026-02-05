import React, { useState, useRef, useEffect } from "react";
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

const EBooks: React.FC = () => {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);
  const [allBooks, setAllBooks] = useState<Book[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const [activePdf, setActivePdf] = useState<string | null>(null);
  const [pdfName, setPdfName] = useState<string | null>(null);
  const [zoom, setZoom] = useState(1);

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
      const backendBooks = response.data.data as Book[];
      const mappedBooks: Book[] = backendBooks.map((book) => ({
        id: book.id,
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
  const openPdf = (pdf: string) => {
    const url = pdf.startsWith("http")
      ? pdf
      : `${config.apiBaseURL}/uploads/${pdf}`;
    setActivePdf(url);
    setPdfName(pdf);
    setZoom(1);
  };

  // Download PDF via fetch + blob (avoids popup issues)
  const downloadPdf = async () => {
    if (!activePdf) return;

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
                onRead={(pdf) => openPdf(pdf)}
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
        <PdfOverlay onClick={() => setActivePdf(null)}>
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
              <CloseButton onClick={() => setActivePdf(null)}>
                Close
              </CloseButton>
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
