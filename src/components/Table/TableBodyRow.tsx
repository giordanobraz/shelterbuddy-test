import {
  Avatar,
  Button,
  ButtonProps,
  TableBody,
  TableCell,
  TableCellProps,
  TableRow,
  TableRowProps,
  styled,
} from "@mui/material";
import { useEffect, useState } from "react";

import { ChevronRight } from "@mui/icons-material";
import { Data } from "../../utils/createData.util";
import { Order } from "./Table";
import PlaceholderImg from "../../assets/placeholder.png";
import { fetchAnimalsPhotoData } from "../../services/axios";
import { getComparator } from "../../utils/comparator.util";

const BASE_PHOTO_URL = "https://shelterbuddy-us-uat.shelterbuddy.io";

interface TableBodyRowProps {
  orderBy: keyof Data;
  order: Order;
  page: number;
  rowsPerPage: number;
  rows: Data[];
}

const CustomTableRow = styled(TableRow)<TableRowProps>({
  backgroundColor: "#f8f8fc",
  borderRadius: "15px",
});

const CustomTableCell = styled(TableCell)<TableCellProps>({
  fontFamily: "Roboto",
  fontWeight: 500,
  color: "#000121",
  fontSize: 16,
  border: "none",
  padding: "24px",
  [`&:first-of-type`]: {
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12,
  },
  [`&:last-of-type`]: {
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
  },
});

const CustomButton = styled(Button)<ButtonProps>({
  fontFamily: "Roboto",
  fontWeight: 600,
  fontSize: 16,
  color: "#002fd6",
  textTransform: "capitalize",
});

export function TableBodyRow({
  orderBy,
  order,
  page,
  rowsPerPage,
  rows,
}: TableBodyRowProps) {
  const [photos, setPhotos] = useState<any>([]);

  useEffect(() => {
    fetchAnimalsPhotoData().then((response) => {
      setPhotos(response?.Data);
    });
  }, []);

  return (
    <TableBody>
      {rows
        .slice()
        .sort(getComparator(order, orderBy))
        .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
        .map((row, index) => {
          const labelId = `enhanced-table-checkbox-${index}`;
          const photo = photos.find((photo: any) => photo.Animal.Id === row.id);

          return (
            <CustomTableRow key={index}>
              <CustomTableCell component="th" id={labelId} scope="row">
                {photo ? (
                  <Avatar
                    alt={row.name}
                    src={`${BASE_PHOTO_URL}${photo.Photo.replace(
                      "/1024---n",
                      ""
                    )}`}
                  />
                ) : (
                  <Avatar alt={row.name} src={PlaceholderImg}></Avatar>
                )}
              </CustomTableCell>
              <CustomTableCell component="th" id={labelId} scope="row">
                {row.name !== "z" ? row.name : "-"}
              </CustomTableCell>
              <CustomTableCell component="th" id={labelId} scope="row">
                {row.type}
              </CustomTableCell>
              <CustomTableCell component="th" id={labelId} scope="row">
                {row.breed}
              </CustomTableCell>
              <CustomTableCell component="th" id={labelId} scope="row">
                {row.gender}
              </CustomTableCell>
              <CustomTableCell component="th" id={labelId} scope="row">
                {row.color}
              </CustomTableCell>
              <CustomTableCell component="th" id={labelId} scope="row">
                <CustomButton variant="text">
                  Details <ChevronRight />
                </CustomButton>
              </CustomTableCell>
            </CustomTableRow>
          );
        })}
    </TableBody>
  );
}
