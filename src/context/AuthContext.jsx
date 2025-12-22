import { createContext, useContext, useState, useEffect } from "react";
import tokenService from "../services/token.service"; // นำเข้า tokenService

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // โหลดข้อมูลผู้ใช้จาก Cookies เมื่อเปิดเว็บ
    const currentUser = tokenService.getUser();
    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    tokenService.removeUser(); // ลบ Cookies
    setUser(null);
    window.location.href = "/login";
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
