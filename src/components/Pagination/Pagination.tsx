import { Stack, useMediaQuery } from "@mui/material";

import { PaginationItem } from "./PaginationItem";

export interface PaginationProps {
  totalRegisters: number;
  rowsPerPage: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

export function Pagination({
  totalRegisters,
  rowsPerPage,
  currentPage,
  setCurrentPage,
}: PaginationProps) {
  const mediaQuery = useMediaQuery("(max-width:810px)");

  const totalPageCount = Math.ceil(totalRegisters / rowsPerPage);

  const range = (start: number, end: number) => {
    let length = end - start + 1;
    return Array.from({ length }, (_, i) => i + start);
  };

  const pages = range(0, totalPageCount - 1);

  return (
    <Stack direction="row" overflow={mediaQuery ? "scroll" : "hidden"}>
      {pages.map((page) => (
        <PaginationItem
          key={page}
          number={page}
          isCurrent={page === currentPage}
          onPageChange={setCurrentPage}
        />
      ))}
    </Stack>
  );
}
