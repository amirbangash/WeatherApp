import axios from "axios";

export const apiKey = "7863e2530289abd8451733000bed8547";

export const citiesApi = axios.create({
  baseURL: "https://wft-geo-db.p.rapidapi.com/v1/",
  headers: {
    "X-RapidAPI-Key": "a5fe049dffmsh49aa1de4e3f603ep1850f0jsn2824661ba042",
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
});

export const weatherApi = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/",
});
