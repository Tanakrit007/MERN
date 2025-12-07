// src/routes/routes.jsx
import { createBrowserRouter } from "react-router-dom";
// ✅ Path ถูกต้องตามโครงสร้าง: "../Page/ชื่อไฟล์"
import Home from "../Page/Home.jsx";
import LoginPage from "../Page/Login.jsx"; // Component ในไฟล์ Login.jsx
import RegisterPage from "../Page/Regis.jsx"; // Component ในไฟล์ Regis.jsx
import PostPage from "../Page/Post.jsx"; // สำหรับหน้าบทความเต็ม
import CreatePostPage from "../Page/Create_Post.jsx"; // สำหรับหน้าสร้างบทความ
import EditPostPage from "../Page/Edit_Post.jsx"; // สำหรับหน้าแก้ไขบทความ
// ... (Router array ที่เหลือ)

const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/login", element: <LoginPage /> },
    { path: "/register", element: <RegisterPage /> },
    
    // Route สำหรับหน้าบทความและการจัดการ (ใช้ Path parameter สำหรับ Post)
    { path: "/post/:id", element: <PostPage /> }, 
    { path: "/create-post", element: <CreatePostPage /> }, 
    { path: "/edit-post/:id", element: <EditPostPage /> }, // ใช้ ID ในการแก้ไข
]);

export default router;