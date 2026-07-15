import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client/react";
import type { BackendBook, Book } from "../types";

export const BOOKS_QUERY = gql`
  query Books {
    books {
      id
      title
      author
      description
      image {
        url
        publicId
      }
      pdf
    }
  }
`;

interface BooksQueryData {
  books: BackendBook[];
}

export function useEbooksData() {
  const { data, loading, error } = useQuery<BooksQueryData>(BOOKS_QUERY, {
    fetchPolicy: "cache-and-network",
  });

  const allBooks: Book[] = (data?.books ?? []).map((book, i) => ({
    id: book._id ?? book.id ?? String(i),
    title: book.title,
    author: book.author,
    description: book.description,
    image: book.image,
    pdf: book.pdf,
  }));

  return {
    allBooks,
    loading,
    error: error ? error.message : null,
  } as const;
}
