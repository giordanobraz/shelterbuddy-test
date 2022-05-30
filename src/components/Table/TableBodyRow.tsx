import {
  Avatar,
  Button,
  TableBody,
  TableCell,
  TableRow,
  styled,
} from "@mui/material";
import { useEffect, useState } from "react";

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

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  backgroundColor: "#f8f8fc",
  borderRadius: "15px",
}));

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
            <StyledTableRow key={index}>
              <TableCell>
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
              </TableCell>
              <TableCell component="th" id={labelId} scope="row">
                {row.name !== "z" ? row.name : "-"}
              </TableCell>
              <TableCell component="th" id={labelId} scope="row">
                {row.type}
              </TableCell>
              <TableCell component="th" id={labelId} scope="row">
                {row.breed}
              </TableCell>
              <TableCell component="th" id={labelId} scope="row">
                {row.gender}
              </TableCell>
              <TableCell component="th" id={labelId} scope="row">
                {row.color}
              </TableCell>
              <TableCell component="th" id={labelId} scope="row">
                <Button variant="text" color="primary">
                  Details
                </Button>
              </TableCell>
            </StyledTableRow>
          );
        })}
    </TableBody>
  );
}
