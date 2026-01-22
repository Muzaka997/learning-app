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
} from "./Ebooks.styled";
import axios from "axios";
import BookCard from "./components/Ebook/BookCard";

type Book = {
  id: string;
  title: string;
  author: string;
  description: string;
  image: string;
  pdf?: string;
};

// type ResponeBookType = {
//   _id: string;
//   title: string;
//   author: string;
//   description: string;
//   image: string;
//   pdf?: string;
// };
const EBooks: React.FC = () => {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);
  const [allBooks, setAllBooks] = useState<Book[]>([]); // Store the original books here
  const inputRef = useRef<HTMLInputElement>(null);
  const [activePdf, setActivePdf] = useState<string | null>(null);

  // Pagination state
  const [currentPage, setCurrentPage] = useState<number>(1);
  const booksPerPage = 10; // Number of books per page

  const handleSubmit = () => {
    setSubmitted(true);
    handleRead();
  };

  // Fetch books from the backend
  useEffect(() => {
    const fetchBooks = async () => {
      const response = await axios.get("http://localhost:5001/api/v1/books");

      const backendBooks = response.data.data as Book[];

      // Map backend data → frontend Book interface
      const mappedBooks: Book[] = backendBooks.map((book) => ({
        id: book.id,
        title: book.title,
        author: book.author,
        description: book.description,
        image: book.image,
        pdf: book.pdf,
      }));
      setAllBooks(mappedBooks); // Save the original books
      setFilteredBooks(mappedBooks); // Initially display all books
    };
    fetchBooks();
  }, []);

  // Handle the search and filter
  const handleRead = () => {
    const value = inputRef.current?.value.toLowerCase() || "";
    if (value === "") {
      // If the input is empty, reset the filtered books to the original list
      setFilteredBooks(allBooks);
    } else {
      // Otherwise, filter the books by title or author
      const results = allBooks.filter(
        (book) =>
          book.title.toLowerCase().includes(value) ||
          book.author.toLowerCase().includes(value),
      );
      setFilteredBooks(results);
    }
    // Reset the page to 1 when the search changes
    setCurrentPage(1);
  };

  // Calculate the current page books
  const currentBooks = filteredBooks.slice(
    (currentPage - 1) * booksPerPage,
    currentPage * booksPerPage,
  );

  // Handle page change
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

  return (
    <EBooksContainer $darkMode={false}>
      {!activePdf ? (
        /* ================= LIBRARY VIEW ================= */
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
                onRead={(pdf) => setActivePdf(pdf)}
              />
            ))}
          </StyledBooksContainer>

          {/* Pagination controls */}
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
        /* ================= PDF VIEW ================= */
        <PdfOverlay onClick={() => setActivePdf(null)}>
          <PdfCard onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={() => setActivePdf(null)}>✕</CloseButton>

            <iframe
              src={`http://localhost:5001/uploads/${activePdf}`}
              title="PDF Reader"
              style={{
                width: "100%",
                height: "100%",
                border: "none",
              }}
            />
          </PdfCard>
        </PdfOverlay>
      )}
    </EBooksContainer>
  );
};

export default EBooks;
