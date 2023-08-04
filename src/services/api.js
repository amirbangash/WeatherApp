import axios from "axios";
export const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
const cityApiKey = process.env.REACT_APP_CITY_API_KEY;

export const citiesApi = axios.create({
  baseURL: "https://wft-geo-db.p.rapidapi.com/v1/",
  headers: {
    "X-RapidAPI-Key": cityApiKey,
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
});

export const weatherApi = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
});
