import type { FC } from "react";
import { BookCardStyles, StyledButton, StyledImage } from "./BookCard.styles";
import { useAuth } from "../../../auth/useAuth";

type Book = {
  id: string;
  title: string;
  author: string;
  description: string;
  image: string;
  pdf?: string;
};

const BookCard: FC<{ book: Book; onRead: (pdf: string) => void }> = ({
  book,
  onRead,
}) => {
  const { user } = useAuth();
  return (
    <BookCardStyles key={book.id}>
      <StyledImage
        src={`http://localhost:5001/uploads/${book.image}`}
        alt={`${book.title} image`}
      />
      <strong>{book.title}</strong> by {book.author}
      {user ? (
        <StyledButton onClick={() => onRead(book.pdf!)}>Read</StyledButton>
      ) : (
        <StyledButton disabled>Please log in to read this book.</StyledButton>
      )}
    </BookCardStyles>
  );
};

export default BookCard;
