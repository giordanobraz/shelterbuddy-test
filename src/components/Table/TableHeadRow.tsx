import {
  Box,
  TableCell,
  TableCellProps,
  TableRow,
  TableSortLabel,
  styled,
} from "@mui/material";

import { Data } from "../../utils/createData.util";
import { Order } from "./Table";
import { visuallyHidden } from "@mui/utils";

interface TableHeadRowProps {
  orderBy: keyof Data;
  order: Order;
  setOrderBy: (property: keyof Data) => void;
  setOrder: (order: Order) => void;
}

const CustomTableCell = styled(TableCell)<TableCellProps>({
  fontFamily: "Roboto",
  fontWeight: 400,
  fontSize: 16,
  border: "none",
  color: "#707183",
});

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
      {headCells.map(({ id, numeric, label }) => (
        <CustomTableCell
          key={id}
          align={numeric ? "right" : "left"}
          sortDirection={orderBy === id ? order : false}
        >
          <TableSortLabel
            active={orderBy === id}
            direction={orderBy === id ? order : "asc"}
            onClick={createSortHandler(id)}
          >
            {label}
            {orderBy === id ? (
              <Box component="span" sx={visuallyHidden}>
                {order === "desc" ? "sorted descending" : "sorted ascending"}
              </Box>
            ) : null}
          </TableSortLabel>
        </CustomTableCell>
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
