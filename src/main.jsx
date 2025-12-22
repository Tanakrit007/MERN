import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./routers/Router.jsx";
import { AuthProvider } from "./context/AuthContext";
import { NewsProvider } from "./context/NewsContext";
import { UserContextProvider } from "./context/UserContextProvider";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <NewsProvider>
        {/* <UserContextProvider> */}
        <RouterProvider router={router} />
        {/* </UserContextProvider> */}
      </NewsProvider>
    </AuthProvider>
  </StrictMode>
);
