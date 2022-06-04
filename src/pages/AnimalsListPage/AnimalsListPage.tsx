import {
  Box,
  BoxProps,
  Grid,
  Typography,
  styled,
  useMediaQuery,
} from "@mui/material";
import { Data, createData } from "../../utils/createData.util";
import { addAnimal, getAnimalsList } from "../../domain/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { List } from "../../components/List/List";
import { Search } from "../../components/Search/Search";
import { Table } from "../../components/Table";
import { fetchAnimalsData } from "../../services/axios";

const CustomBadge = styled(Box)<BoxProps>({
  color: "#fff",
  backgroundColor: "#f47500",
  borderRadius: 100,
  padding: "4px 8px",
  fontSize: 13,
  fontWeight: "bold",
  margin: "0 8px",
});

export function AnimalsListPage() {
  const dispatch = useDispatch();
  const animalData = useSelector(getAnimalsList);
  const [searchValue, setSearchValue] = useState("");
  const mediaQuery = useMediaQuery("(max-width:810px)");

  useEffect(() => {
    if (animalData.length === 0) {
      fetchAnimalsData().then((response) => {
        const animalsList = response?.Data;
        let createRows: Data[] = [];

        animalsList.forEach((animal: any) => {
          createRows.push(
            createData(
              animal.Id,
              animal.Name ? animal.Name : "z",
              animal.Type.Name,
              animal.Breed.Primary.Name,
              animal.Sex.Name,
              animal.Features.PrimaryColour
            )
          );
        });

        dispatch(addAnimal(createRows));
      });
    }
  }, [dispatch, animalData]);

  const filteredAnimalList =
    searchValue.length < 1
      ? animalData
      : animalData.filter((animal: Data) => {
          return animal.name.toLowerCase().includes(searchValue.toLowerCase());
        });

  return (
    <Box px={{ xs: 2, sm: 6, lg: 12 }} pt={12}>
      <Box bgcolor="white" p={4} borderRadius={3} width="100%">
        <Grid container spacing={3}>
          <Grid item xs={12} md={7} alignSelf="center">
            <Box display="flex" alignItems="center" alignSelf="center">
              <Typography variant="h1" fontWeight={600} fontSize={22}>
                Your Animals
              </Typography>
              <CustomBadge component="span">{animalData.length}</CustomBadge>
            </Box>
          </Grid>
          <Grid item xs={12} md={5}>
            <Search searchValue={searchValue} setSearchValue={setSearchValue} />
          </Grid>
        </Grid>
        <Box display="flex" mt={2}>
          <Box flexGrow={1} overflow={mediaQuery ? "scroll" : "hidden"}>
            {mediaQuery ? (
              <List filteredAnimalList={filteredAnimalList} />
            ) : (
              <Table filteredAnimalList={filteredAnimalList} />
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
