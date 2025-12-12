import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./routers/Router.jsx";
import { AuthProvider } from "./context/AuthContext";
import { NewsProvider } from "./context/NewsContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <NewsProvider>
        <RouterProvider router={router} />
      </NewsProvider>
    </AuthProvider>
  </StrictMode>
);
