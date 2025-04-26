import axios from "axios";
import { isTokenExpired } from "../utills/checkToken"; 
const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL, 
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use((config) => {
  const token = localStorage.getItem("authToken");

  if (isTokenExpired(token)) {
    localStorage.removeItem("authToken");
    window.location.href = "/login";
    return Promise.reject("Token expired");
  }

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default instance;
