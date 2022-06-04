import {
  Accordion,
  AccordionDetails,
  AccordionProps,
  AccordionSummary,
  AccordionSummaryProps,
  Avatar,
  Box,
  Button,
  ButtonProps,
  Typography,
  accordionClasses,
  accordionSummaryClasses,
  buttonClasses,
  styled,
} from "@mui/material";
import { useEffect, useState } from "react";

import { ChevronRight } from "@mui/icons-material";
import { Data } from "../../utils/createData.util";
import { GridExpandMoreIcon } from "@mui/x-data-grid";
import { Pagination } from "../Pagination";
import PlaceholderImg from "../../assets/placeholder.png";
import { fetchAnimalsPhotoData } from "../../services/axios";
import { getComparator } from "../../utils/comparator.util";

interface ListProps {
  filteredAnimalList: Data[];
}

const BASE_PHOTO_URL = "https://shelterbuddy-us-uat.shelterbuddy.io";

const CustomAccordion = styled(Accordion)<AccordionProps>({
  [`&.${accordionClasses.root}`]: {
    backgroundColor: "#f8f8fc",
    borderRadius: "12px",
    margin: "12px 0",
    padding: "12px",
    boxShadow: "none",
    [`&:before`]: {
      display: "none",
    },
  },
});

const CustomAccordionSumary = styled(AccordionSummary)<AccordionSummaryProps>({
  marginBottom: 0,
  [`& .${accordionSummaryClasses.expanded}`]: {
    marginBottom: "0",
  },
  [`& .${accordionSummaryClasses.expandIconWrapper}`]: {
    backgroundColor: "#002fd6",
    color: "#fff",
    borderRadius: 100,
  },
});

const CustomButton = styled(Button)<ButtonProps>({
  [`&.${buttonClasses.root}`]: {
    backgroundColor: "#002fd6",
    color: "#fff",
    fontSize: "16px",
    fontWeight: 600,
    borderRadius: "8px",
  },
});

function buildDetails(title: string, data: string) {
  return (
    <Box
      display="flex"
      flexDirection="row"
      gap={1}
      fontSize="16px"
      fontWeight={500}
      color="#707183"
    >
      <Typography>{title}: </Typography>
      <Typography
        sx={{
          color: "#000121",
        }}
      >
        {data}
      </Typography>
    </Box>
  );
}

export function List({ filteredAnimalList }: ListProps) {
  const rows = filteredAnimalList;
  const [page, setPage] = useState(0);
  const [photos, setPhotos] = useState<any>([]);

  useEffect(() => {
    fetchAnimalsPhotoData().then((response) => {
      setPhotos(response?.Data);
    });
  }, []);

  const slicedRows = rows
    .slice()
    .sort(getComparator("asc", "name"))
    .slice(page * 10, page * 10 + 10);

  return (
    <Box>
      {slicedRows.map((row, index) => {
        const photo = photos.find((photo: any) => photo.Animal.Id === row.id);

        return (
          <CustomAccordion key={index}>
            <CustomAccordionSumary
              expandIcon={<GridExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Box
                component="div"
                display="flex"
                flexWrap="wrap"
                alignItems="center"
                gap={2}
              >
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
                <Typography>{row.name !== "z" ? row.name : "-"}</Typography>
              </Box>
            </CustomAccordionSumary>
            <AccordionDetails>
              <Box display="flex" flexDirection="column" gap={1}>
                {buildDetails("Type", row.type)}
                {buildDetails("Breed", row.breed)}
                {buildDetails("Gender", row.gender)}
                {buildDetails("Color", row.color)}
                <CustomButton>
                  Details <ChevronRight />
                </CustomButton>
              </Box>
            </AccordionDetails>
          </CustomAccordion>
        );
      })}
      <Pagination
        currentPage={page}
        setCurrentPage={setPage}
        totalRegisters={rows.length}
        rowsPerPage={10}
      />
    </Box>
  );
}
