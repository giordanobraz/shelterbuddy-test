import {
  Table,
  TableContainer,
  TableHead,
  TablePagination,
  TableProps,
  styled,
  tableCellClasses,
} from "@mui/material";

import { Data } from "../../utils/createData.util";
import { TableBodyRow } from "./TableBodyRow";
import { TableHeadRow } from "./TableHeadRow";
import { useState } from "react";

const StyledTable = styled(Table)<TableProps>(({ theme }) => ({
  borderCollapse: "separate",
  borderSpacing: "0px 12px",
  [`& .${tableCellClasses.root}`]: {
    borderBottom: "none",
  },
}));

export type Order = "asc" | "desc";

interface TableAnimalsProps {
  filteredAnimalList: Data[];
}

export function TableAnimals({ filteredAnimalList }: TableAnimalsProps) {
  const rows = filteredAnimalList;
  const [order, setOrder] = useState<Order>("asc");
  const [orderBy, setOrderBy] = useState<keyof Data>("name");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer>
      <StyledTable>
        <TableHead>
          <TableHeadRow
            orderBy={orderBy}
            order={order}
            setOrder={setOrder}
            setOrderBy={setOrderBy}
          />
        </TableHead>
        <TableBodyRow
          orderBy={orderBy}
          order={order}
          page={page}
          rowsPerPage={rowsPerPage}
          rows={rows}
        />
      </StyledTable>
      <TablePagination
        component="div"
        rowsPerPageOptions={[5, 10]}
        colSpan={3}
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        SelectProps={{
          inputProps: {
            "aria-label": "rows per page",
          },
          native: true,
        }}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  );
}
