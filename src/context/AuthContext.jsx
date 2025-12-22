// src/context/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from "react";
import tokenService from "../services/token.service";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = tokenService.getUser();
    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  const login = (userData) => {
    tokenService.setUser(userData); // เพิ่มบรรทัดนี้เพื่อเซ็ต Cookie
    setUser(userData);
  };

  const logout = () => {
    tokenService.removeUser();
    setUser(null);
    // แนะนำให้ใช้ useNavigate ในคอมโพเนนต์แทน window.location ถ้าเป็นไปได้
    window.location.href = "/login";
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// ตรวจสอบให้แน่ใจว่ามีการ export ตัวนี้
export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw Error("useAuthContext must be used inside an AuthContextProvider");
  }
  return context;
};
