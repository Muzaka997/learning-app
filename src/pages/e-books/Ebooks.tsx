import React from "react";
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
import BookCard from "./components/Ebook/BookCard";
import { useEbooksData } from "./hooks/useEbooksData";
import { useBookSearch } from "./hooks/useBookSearch";
import { usePagination } from "./hooks/usePagination";
import { usePdfViewer } from "./hooks/usePdfViewer";

const EBooks: React.FC = () => {
  const { allBooks } = useEbooksData();
  const { inputRef, submitted, setSubmitted, filteredBooks, handleRead } =
    useBookSearch(allBooks);
  const {
    currentPage,
    totalPages,
    currentItems: currentBooks,
    next: handleNextPage,
    prev: handlePreviousPage,
    canNext,
    canPrev,
    setCurrentPage,
  } = usePagination(filteredBooks, 10);
  const { activePdf, pdfName, zoom, setZoom, openPdf, closePdf, downloadPdf } =
    usePdfViewer(allBooks);

  const handleSubmit = () => {
    setSubmitted(true);
    handleRead();
    setCurrentPage(1);
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
              disabled={!canPrev}
            >
              Previous
            </StyledButton>
            <span style={{ margin: "0 10px" }}>
              Page {currentPage} of {totalPages}
            </span>
            <StyledButton
              $darkMode={false}
              onClick={handleNextPage}
              disabled={!canNext}
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
