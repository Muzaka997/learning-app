import React from "react";
import { EBooksContainer } from "./Ebooks.styled";

type Book = {
  id: number;
  title: string;
  author: string;
};

const ebooks: Book[] = [
  { id: 1, title: "1984", author: "George Orwell" },
  { id: 2, title: "Pride and Prejudice", author: "Jane Austen" },
  { id: 3, title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
  { id: 4, title: "The Catcher in the Rye", author: "J.D. Salinger" },
];

const EBooks: React.FC = () => {
  return (
    <EBooksContainer $darkMode={false}>
      <h1>E-Books Collection</h1>
      <ul>
        {ebooks.map((book) => (
          <li key={book.id}>
            <strong>{book.title}</strong> by {book.author}
          </li>
        ))}
      </ul>
    </EBooksContainer>
  );
};

export default EBooks;
