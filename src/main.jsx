// ในไฟล์ src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
// ✅ แก้ไข Path: จาก "./router" เป็น "./routes/routes.jsx"
import router from "./routes/routes.jsx"; 
// ✅ ต้อง Import CSS หลัก
import "./index.css"; 

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);