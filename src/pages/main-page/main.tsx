import axios from "axios";
import CoursesPage from "../courses/Courses";
import BookCard from "../e-books/components/Ebook/BookCard";

import {
  StyledAppWrapper,
  StyledContainer,
  BooksCarousel,
  CarouselWrapper,
  CarouselButton,
} from "./Main.styles";
import config from "../../config";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

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

type BackendBook = {
  _id?: string;
  id?: string;
  title: string;
  author: string;
  description: string;
  image: {
    url: string;
    publicId: string;
  };
  pdf?: string;
};

const MainPage: React.FC = () => {
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);
  const navigate = useNavigate();
  const rowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await axios.get(`${config.apiBaseURL}/books`);
      const backendBooks = response.data.data as BackendBook[];
      const mappedBooks: Book[] = backendBooks.map((book, i) => ({
        id: book._id ?? book.id ?? String(i),
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

  const openFromMain = (book: Book) => {
    if (!book.pdf) return;
    navigate(`/e-books?pdf=${book.id}`);
  };

  const scrollByAmount = 260; // roughly one card width with gap
  const scrollLeft = () =>
    rowRef.current?.scrollBy({ left: -scrollByAmount, behavior: "smooth" });
  const scrollRight = () =>
    rowRef.current?.scrollBy({ left: scrollByAmount, behavior: "smooth" });

  return (
    <StyledAppWrapper>
      <h1>My Learning App</h1>
      <StyledContainer>
        <p>
          Discover literature step by step in a space designed for thoughtful
          learning. Explore structured courses that guide you through literary
          movements, authors, and ideas. Deepen your understanding with
          carefully selected eBooks that support and expand each topic.{" "}
        </p>

        <p>
          As you progress, apply what you've learned through assignments that
          encourage close reading, critical thinking, and interpretation.
          Whether you are studying independently or following a guided path, the
          platform helps you build knowledge gradually and meaningfully.
        </p>

        <p>
          Register to unlock full access to courses, readings, and assignments,
          and to track your learning journey from start to finish.
        </p>
      </StyledContainer>
      <CoursesPage></CoursesPage>
      {/* Featured eBooks - single row with horizontal scroll */}
      {filteredBooks.length > 0 && (
        <>
          <h2>Featured eBooks</h2>
          <CarouselWrapper>
            <CarouselButton
              className="left"
              aria-label="Scroll left"
              onClick={scrollLeft}
            >
              ‹
            </CarouselButton>
            <BooksCarousel ref={rowRef}>
              {filteredBooks.map((book) => (
                <BookCard
                  key={book.id}
                  book={book}
                  onRead={() => openFromMain(book)}
                />
              ))}
            </BooksCarousel>
            <CarouselButton
              className="right"
              aria-label="Scroll right"
              onClick={scrollRight}
            >
              ›
            </CarouselButton>
          </CarouselWrapper>
        </>
      )}
    </StyledAppWrapper>
  );
};

export default MainPage;
