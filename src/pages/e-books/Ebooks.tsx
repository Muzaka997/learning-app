import React, { useState, useRef, useEffect } from "react";
import { EBooksContainer } from "./Ebooks.styled";
import axios from "axios";

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

          <input
            ref={inputRef}
            type="text"
            placeholder="Search e-books..."
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSubmit();
            }}
          />
          <button type="button" onClick={handleSubmit}>
            Search
          </button>

          {submitted && filteredBooks.length === 0 && (
            <p style={{ color: "red" }}>No results found.</p>
          )}

          <ul>
            {filteredBooks.map((book) => (
              <li key={book.id}>
                <strong>{book.title}</strong> by {book.author}
                <img
                  src={`http://localhost:5001/uploads/${book.image}`}
                  alt={`${book.title} image`}
                />
                {book.pdf && (
                  <button onClick={() => setActivePdf(book.pdf!)}>Read</button>
                )}
              </li>
            ))}
          </ul>
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
