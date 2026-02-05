import type { FC } from "react";
import {
  Author,
  BookCardStyles,
  Description,
  Info,
  StyledButton,
  StyledImage,
  Title,
} from "./BookCard.styles";

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

const BookCard: FC<{ book: Book; onRead?: (pdf: string) => void }> = ({
  book,
  onRead,
}) => {
  const handleRead = () => {
    if (!book.pdf) return;

    // prefer parent handler, fallback to direct navigation
    if (onRead) {
      onRead(book.pdf);
      return;
    }
    const url = book.pdf.startsWith("http") ? book.pdf : `/uploads/${book.pdf}`;
    window.location.href = url;
  };

  return (
    <BookCardStyles>
      <StyledImage
        src={book.image?.url || "/placeholder.jpg"}
        alt={`${book.title} cover`}
        loading="lazy"
        onClick={handleRead}
        style={{ cursor: book.pdf ? "pointer" : "default" }}
      />

      <Info>
        <Title>{book.title}</Title>
        <Author>by {book.author}</Author>
        {book.description && (
          <Description>
            {book.description.length > 120
              ? `${book.description.slice(0, 120)}…`
              : book.description}
          </Description>
        )}
      </Info>

      <StyledButton type="button" disabled={!book.pdf} onClick={handleRead}>
        {book.pdf ? "Read" : "No PDF"}
      </StyledButton>
    </BookCardStyles>
  );
};

export default BookCard;
