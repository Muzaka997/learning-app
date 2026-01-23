import type { FC } from "react";
import { BookCardStyles, StyledButton, StyledImage } from "./BookCard.styles";

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

const BookCard: FC<{ book: Book; onRead: (pdf: string) => void }> = ({
  book,
  onRead,
}) => {
  return (
    <BookCardStyles key={book.id}>
      <StyledImage
        src={book.image?.url || "/placeholder.jpg"}
        alt={`${book.title} cover`}
        loading="lazy"
      />
      <strong>{book.title}</strong> by {book.author}
      <StyledButton
        type="button"
        disabled={!book.pdf}
        onClick={() => onRead(book.pdf!)}
      >
        Read
      </StyledButton>
    </BookCardStyles>
  );
};

export default BookCard;
