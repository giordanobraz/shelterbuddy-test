import axios from "axios";

const AXIOS = axios.create({
  baseURL: "https://shelterbuddy.vercel.app/assets/data/",
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
