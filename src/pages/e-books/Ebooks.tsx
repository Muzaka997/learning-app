import React from "react";
import { Document, Page } from "react-pdf";
import "./pdfSetup";
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
  Pagination,
  PageButton,
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
  } = usePagination(filteredBooks, 8);
  const {
    activePdf,
    pdfName,
    zoom,
    setZoom,
    numPages,
    pageNumber,
    onDocumentLoadSuccess,
    nextPage,
    prevPage,
    openPdf,
    closePdf,
    downloadPdf,
  } = usePdfViewer(allBooks);

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

          {totalPages > 1 && (
            <Pagination>
              <PageButton onClick={handlePreviousPage} disabled={!canPrev}>
                ‹
              </PageButton>
              <span>
                Page {currentPage} of {totalPages}
              </span>
              <PageButton onClick={handleNextPage} disabled={!canNext}>
                ›
              </PageButton>
            </Pagination>
          )}
        </>
      ) : (
        <PdfOverlay>
          <PdfCard>
            <PdfToolbar>
              <PdfTitle>{pdfName}</PdfTitle>
              <ToolbarButton onClick={prevPage} disabled={pageNumber <= 1}>
                ‹
              </ToolbarButton>
              <PdfTitle style={{ flex: "0 0 auto", minWidth: 0 }}>
                {pageNumber} / {numPages ?? "…"}
              </PdfTitle>
              <ToolbarButton
                onClick={nextPage}
                disabled={!!numPages && pageNumber >= numPages}
              >
                ›
              </ToolbarButton>
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
              <Document
                file={activePdf}
                onLoadSuccess={onDocumentLoadSuccess}
                loading={<div style={{ padding: 24 }}>Loading PDF…</div>}
                error={
                  <div style={{ padding: 24, color: "#ef4444" }}>
                    Failed to load PDF.
                  </div>
                }
              >
                <Page
                  pageNumber={pageNumber}
                  scale={zoom}
                  renderTextLayer
                  renderAnnotationLayer
                />
              </Document>
            </PdfFrameWrapper>
          </PdfCard>
        </PdfOverlay>
      )}
    </EBooksContainer>
  );
};

export default EBooks;
