import { useMemo, useState } from "react";

export function usePagination<T>(items: T[], itemsPerPage: number) {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const totalPages = useMemo(
    () => Math.max(1, Math.ceil(items.length / itemsPerPage)),
    [items.length, itemsPerPage],
  );

  const currentItems = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return items.slice(start, start + itemsPerPage);
  }, [items, itemsPerPage, currentPage]);

  const next = () => setCurrentPage((p) => Math.min(totalPages, p + 1));
  const prev = () => setCurrentPage((p) => Math.max(1, p - 1));

  return {
    currentPage,
    setCurrentPage,
    totalPages,
    currentItems,
    next,
    prev,
    canPrev: currentPage > 1,
    canNext: currentPage < totalPages,
  } as const;
}
