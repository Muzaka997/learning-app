import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import React, { useState, useRef, useEffect } from "react";
import {
  EBooksContainer,
  StyledBooksContainer,
  StyledSearchContainer,
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

const EBooks: React.FC = () => {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const [activePdf, setActivePdf] = useState<string | null>(null);

  const handleSubmit = () => {
    setSubmitted(true);
    handleRead();
  };

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await axios.get("http://localhost:5001/api/v1/books");

      const backendBooks = response.data.data;

      // 🔁 Map backend data → frontend Book interface
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const mappedBooks: Book[] = backendBooks.map((book: any) => ({
        id: book._id,
        title: book.title,
        author: book.author,
        description: book.description,
        image: book.image,
        pdf: book.pdf,
      }));
      setFilteredBooks(mappedBooks);
    };
    fetchBooks();
  }, []);

  const handleRead = () => {
    const value = inputRef.current?.value.toLowerCase() || "";
    const results = filteredBooks.filter(
      (book) =>
        book.title.toLowerCase().includes(value) ||
        book.author.toLowerCase().includes(value)
    );
    setFilteredBooks(results);
  };

  return (
    <EBooksContainer $darkMode={false}>
      {!activePdf ? (
        /* ================= LIBRARY VIEW ================= */
        <>
          <h1>E-Books Collection</h1>
          <StyledSearchContainer>
            <TextField
              inputRef={inputRef}
              label="Search e-books"
              variant="outlined"
              size="small"
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSubmit();
              }}
              sx={{ marginRight: 2 }}
            />

            <Button variant="contained" onClick={handleSubmit}>
              Search
            </Button>
          </StyledSearchContainer>

          {submitted && filteredBooks.length === 0 && (
            <p style={{ color: "red" }}>No results found.</p>
          )}

          <StyledBooksContainer>
            {filteredBooks.map((book) => (
              <BookCard
                book={book}
                key={book.id}
                onRead={(pdf) => setActivePdf(pdf)}
              />
            ))}
          </StyledBooksContainer>
        </>
      ) : (
        /* ================= PDF VIEW ================= */
        <>
          <button
            onClick={() => setActivePdf(null)}
            style={{ marginBottom: "12px" }}
          >
            ← Back to library
          </button>

          <iframe
            src={`http://localhost:5001/uploads/${activePdf}`}
            width="100%"
            height="50%"
            style={{ border: "none" }}
            title="PDF Reader"
          />
        </>
      )}
    </EBooksContainer>
  );
};

export default EBooks;
