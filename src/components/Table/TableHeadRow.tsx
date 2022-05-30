import { Box, TableCell, TableRow, TableSortLabel } from "@mui/material";

import { Data } from "../../utils/createData.util";
import { Order } from "./Table";
import { visuallyHidden } from "@mui/utils";

interface TableHeadRowProps {
  orderBy: keyof Data;
  order: Order;
  setOrderBy: (property: keyof Data) => void;
  setOrder: (order: Order) => void;
}

export function TableHeadRow({
  orderBy,
  order,
  setOrder,
  setOrderBy,
}: TableHeadRowProps) {
  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Data
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const createSortHandler =
    (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
      handleRequestSort(event, property);
    };

  return (
    <TableRow>
      {headCells.map((headCell) => (
        <TableCell
          key={headCell.id}
          align={headCell.numeric ? "right" : "left"}
          sortDirection={orderBy === headCell.id ? order : false}
        >
          <TableSortLabel
            active={orderBy === headCell.id}
            direction={orderBy === headCell.id ? order : "asc"}
            onClick={createSortHandler(headCell.id)}
          >
            {headCell.label}
            {orderBy === headCell.id ? (
              <Box component="span" sx={visuallyHidden}>
                {order === "desc" ? "sorted descending" : "sorted ascending"}
              </Box>
            ) : null}
          </TableSortLabel>
        </TableCell>
      ))}
    </TableRow>
  );
}

interface IHeadCell {
  disablePadding: boolean;
  id: keyof Data | any;
  label: string;
  numeric: boolean;
}

const headCells: IHeadCell[] = [
  {
    id: "photo",
    numeric: false,
    disablePadding: true,
    label: "",
  },
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "Name",
  },
  {
    id: "type",
    numeric: false,
    disablePadding: true,
    label: "Type",
  },
  {
    id: "breed",
    numeric: false,
    disablePadding: true,
    label: "Breed",
  },
  {
    id: "gender",
    numeric: false,
    disablePadding: true,
    label: "Gender",
  },
  {
    id: "color",
    numeric: false,
    disablePadding: true,
    label: "Color",
  },
];
