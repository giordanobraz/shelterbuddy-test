import { Stack, useMediaQuery } from "@mui/material";

import { PaginationItem } from "./PaginationItem";

interface PaginationProps {
  totalRegisters: number;
  rowsPerPage: number;
  currentPage: number;
  setCurrentPage: (page: number) => void;
}

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => from + index)
    .filter((page) => page > 0);
}

export function Pagination({
  totalRegisters,
  rowsPerPage,
  currentPage,
  setCurrentPage,
}: PaginationProps) {
  const mediaQuery = useMediaQuery("(max-width:810px)");

  const lastPage = Math.ceil(totalRegisters / rowsPerPage);

  const previousPages =
    currentPage > 0 ? generatePagesArray(0, currentPage) : [];

  const nextPages =
    currentPage < lastPage ? generatePagesArray(currentPage + 1, lastPage) : [];

  return (
    <Stack direction="row" overflow={mediaQuery ? "scroll" : "hidden"}>
      {currentPage > 0 && (
        <PaginationItem number={0} onPageChange={setCurrentPage} />
      )}

      {previousPages.map((page) => (
        <PaginationItem
          key={page}
          number={page}
          onPageChange={setCurrentPage}
        />
      ))}

      <PaginationItem
        number={currentPage}
        isCurrent
        onPageChange={setCurrentPage}
      />

      {nextPages.map((page) => (
        <PaginationItem
          key={page}
          number={page}
          onPageChange={setCurrentPage}
        />
      ))}
    </Stack>
  );
}
