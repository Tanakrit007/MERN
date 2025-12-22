import api from "./api.js";
const API_URL = import.meta.env.VITE_AUTH_URL;
import tokenService from "./token.service.js";

const register = async (username, password) => {
  return await api.post(API_URL + "/register", { username, password });
};

const login = async (username, password) => {
  const response = await api.post(API_URL + "/login", { username, password });
  const { status, data } = response;
  if (status === 200) {
    if (data?.accessToken) {
      tokenService.setUser(data);
    }
  }
  return response;
};

const logout = () => {
  tokenService.removeUser();
};

const AuthService = {
  register,
  login,
  logout,
};

export default AuthService;
