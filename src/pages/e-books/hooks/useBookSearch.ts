import { useMemo, useRef, useState } from "react";
import type { Book } from "../types";

export function useBookSearch(allBooks: Book[]) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");

  const filteredBooks = useMemo(() => {
    const value = query.trim().toLowerCase();
    if (!value) return allBooks;
    return allBooks.filter(
      (book) =>
        book.title.toLowerCase().includes(value) ||
        book.author.toLowerCase().includes(value),
    );
  }, [allBooks, query]);

  const handleRead = () => {
    setSubmitted(true);
    const value = inputRef.current?.value ?? "";
    setQuery(value);
  };

  return {
    inputRef,
    submitted,
    setSubmitted,
    query,
    setQuery,
    filteredBooks,
    handleRead,
  } as const;
}
