import axios from "axios";

export const BASE_URL = "https://shelterbuddy.vercel.app/assets/data/";

const AXIOS = axios.create({
  baseURL: BASE_URL,
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
});

const fetchAnimalsData = async () => {
  try {
    const response = await AXIOS.get("AnimalList.json");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const fetchAnimalsPhotoData = async () => {
  try {
    const response = await AXIOS.get("AnimalPhotoList.json");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export { fetchAnimalsData, fetchAnimalsPhotoData };
