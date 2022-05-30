import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableProps,
  TableRow,
  Typography,
  styled,
  tableCellClasses,
} from "@mui/material";

import { Data } from "../../utils/createData.util";
import { TableBodyRow } from "./TableBodyRow";
import { TableHeadRow } from "./TableHeadRow";
import { useState } from "react";

const CustomTable = styled(Table)<TableProps>({
  borderCollapse: "separate",
  borderSpacing: "0px 12px",
  [`& .${tableCellClasses.root}`]: {
    borderBottom: "none",
  },
});

export type Order = "asc" | "desc";

interface TableAnimalsProps {
  filteredAnimalList: Data[];
}

export function TableAnimals({ filteredAnimalList }: TableAnimalsProps) {
  const rows = filteredAnimalList;
  const [order, setOrder] = useState<Order>("asc");
  const [orderBy, setOrderBy] = useState<keyof Data>("name");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

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
      <CustomTable>
        <TableHead>
          <TableHeadRow
            orderBy={orderBy}
            order={order}
            setOrder={setOrder}
            setOrderBy={setOrderBy}
          />
        </TableHead>
        {rows.length === 0 ? (
          <TableBody>
            <TableRow>
              <TableCell>
                <Typography>No results found.</Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        ) : (
          <TableBodyRow
            orderBy={orderBy}
            order={order}
            page={page}
            rowsPerPage={rowsPerPage}
            rows={rows}
          />
        )}
      </CustomTable>
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
