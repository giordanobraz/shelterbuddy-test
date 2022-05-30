import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Data } from "../utils/createData.util";

interface IAnimalsStoreData {
  list: Data[];
}

const initialState: IAnimalsStoreData = {
  list: [],
};

const animalsDataSlice = createSlice({
  name: "animals",
  initialState,
  reducers: {
    addAnimal(state, action) {
      return {
        ...state,
        list: action.payload,
      };
    },
  },
});

export const { addAnimal } = animalsDataSlice.actions;
export const getAnimalsList = (state: any) => state.list;

const store = configureStore({
  reducer: animalsDataSlice.reducer,
});

export default store;
