import axios from "axios";

export const FetchPlaces = axios.create({
  baseURL: "https://smarty.kerzz.com:4004/api/mock",
  headers: {
    "Content-Type": "application/json",
    apiKey: "bW9jay04ODc3NTU2NjExMjEyNGZmZmZmZmJ2",
  },
});

export const fetchPlas = async (
  skip,
  limit,
  latitude,
  longitude,
  setPlaces
) => {
  const { data } = await FetchPlaces.post("/getFeed", {
    skip: skip,
    limit: limit,
    latitude: latitude,
    longitude: longitude,
  }).catch((err) => {
    console.log("Fetch API Error: ", err.response.data);
  });
  setPlaces(data.response);
};
