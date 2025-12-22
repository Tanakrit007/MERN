import { useState, useEffect } from "react";
import { UserContext } from "./userContext";
import tokenService from "../services/token.service.js";

export const UserContextProvider = ({ children }) => {
  const [userInfor, setUserInfor] = useState(tokenService.getUser());
  const login = (User) => setUserInfor(User);
  const logout = () => {
    tokenService.removeUser();
    setUserInfor(null);
  };
  function getUser() {
    const savedUser = tokenService.getUser() || null;
    return savedUser;
  }
  useEffect(() => {
    tokenService.setUser(userInfor);
  }, [userInfor]);
  return (
    <UserContext.Provider
      value={{ userInfor, setUserInfor, login, logout, getUser }}
    >
      {children}
    </UserContext.Provider>
  );
};
