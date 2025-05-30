import axios from "axios";

export const api = axios.create({
  baseURL: "https://almacenadora-api.vercel.app/api",
  withCredentials: true,
});
