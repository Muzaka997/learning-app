import React, { useState, useRef } from "react";
import { EBooksContainer } from "./Ebooks.styled";
import orwell from "../../assets/1984.jpg";
import austen from "../../assets/pride.jpg";
import gatsby from "../../assets/gatsby.jpg";
import salinger from "../../assets/rye.png";
import orwelBook from "../../assets/1984.pdf";

type Book = {
  id: number;
  title: string;
  author: string;
  image: string;
  pdf?: string;
};

const ebooks: Book[] = [
  {
    id: 1,
    title: "1984",
    author: "George Orwell",
    image: orwell,
    pdf: orwelBook,
  },
  { id: 2, title: "Pride and Prejudice", author: "Jane Austen", image: austen },
  {
    id: 3,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    image: gatsby,
  },
  {
    id: 4,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    image: salinger,
  },
];

const EBooks: React.FC = () => {
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [filteredBooks, setFilteredBooks] = useState<Book[]>(ebooks);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    setSubmitted(true);
    handleRead();
  };

  const handleRead = () => {
    const value = inputRef.current?.value.toLowerCase() || "";
    const results = ebooks.filter(
      (book) =>
        book.title.toLowerCase().includes(value) ||
        book.author.toLowerCase().includes(value)
    );
    setFilteredBooks(results);
  };

  return (
    <EBooksContainer $darkMode={false}>
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
            <img src={book.image} alt={`${book.title} image`} />
            {book.pdf && (
              <a href={book.pdf} target="_blank" rel="noopener noreferrer">
                Open pdf
              </a>
            )}
          </li>
        ))}
      </ul>
    </EBooksContainer>
  );
};

export default EBooks;
