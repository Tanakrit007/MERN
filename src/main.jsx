// src/main.jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routers/Router.jsx";
import { AuthProvider } from "./context/AuthContext"; // แก้ไขจาก AuthContextProvider เป็น AuthProvider
import { NewsProvider } from "./context/NewsContext";
import { UserContextProvider } from "./context/UserContextProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      {" "}
      {/* ใช้ชื่อ AuthProvider */}
      <NewsProvider>
        <UserContextProvider>
          <RouterProvider router={router} />
        </UserContextProvider>
      </NewsProvider>
    </AuthProvider>
  </StrictMode>
);
