import { useEffect, useState } from "react";
import axios from "axios";
import config from "../../../config";
import type { BackendBook, Book } from "../types";

export function useEbooksData() {
  const [allBooks, setAllBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`${config.apiBaseURL}/books`);
        const backendBooks = response.data.data as BackendBook[];
        const mappedBooks: Book[] = backendBooks.map(
          (book: BackendBook, i) => ({
            id: book._id ?? book.id ?? String(i),
            title: book.title,
            author: book.author,
            description: book.description,
            image: book.image,
            pdf: book.pdf,
          }),
        );
        setAllBooks(mappedBooks);
      } catch (e: unknown) {
        setError(e instanceof Error ? e.message : "Failed to load books");
      } finally {
        setLoading(false);
      }
    };
    fetchBooks();
  }, []);

  return { allBooks, loading, error } as const;
}
