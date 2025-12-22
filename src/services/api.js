import axios from "axios";
import tokenService from "./token.service";
const baseURL = import.meta.env.VITE_BASE_URL || "http://localhost:5000/api/v1";

const instance = axios.create({
  baseURL,
});

instance.interceptors.request.use((config) => {
  const token = tokenService.getAccessToken();
  if (token) {
    config.headers["x-access-token"] = token;
  }
  return config;
});

export default instance;