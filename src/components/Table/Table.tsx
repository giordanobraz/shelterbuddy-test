import {
  Table as BaseTable,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableProps,
  TableRow,
  Typography,
  styled,
  tableCellClasses,
} from "@mui/material";

import { Data } from "../../utils/createData.util";
import { Pagination } from "../Pagination";
import { TableBodyRow } from "./TableBodyRow";
import { TableHeadRow } from "./TableHeadRow";
import { useState } from "react";

const CustomTable = styled(BaseTable)<TableProps>({
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

export function Table({ filteredAnimalList }: TableAnimalsProps) {
  const rows = filteredAnimalList;
  const [order, setOrder] = useState<Order>("asc");
  const [orderBy, setOrderBy] = useState<keyof Data>("name");
  const [page, setPage] = useState(0);

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
            rowsPerPage={10}
            rows={rows}
          />
        )}
      </CustomTable>
      <Pagination
        currentPage={page}
        setCurrentPage={setPage}
        totalRegisters={rows.length}
        rowsPerPage={10}
      />
    </TableContainer>
  );
}
