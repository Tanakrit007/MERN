import { createBrowserRouter } from "react-router-dom";
// ✅ Path ถูกต้องตามโครงสร้าง: "../Page/ชื่อไฟล์"
import Home from "../Page/Home.jsx";
import LoginPage from "../Page/Login.jsx"; // เปลี่ยนชื่อ Component เป็น LoginPage
// import RegisterPage from "../Page/Regis.jsx"; // เปลี่ยนชื่อ Component เป็น RegisterPage

// โค้ดสำหรับ Router ที่แก้ไขแล้ว
const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/login",
        element: <LoginPage />, // ใช้ชื่อ Component ที่ถูกต้อง
    },
    // {
    //     path: "/register",
    //     element: <RegisterPage />, // ใช้ชื่อ Component ที่ถูกต้อง
    // },
    // คุณสามารถเพิ่ม path อื่นๆ ได้ที่นี่
    // { path: "/post/:id", element: <PostPage /> },
]);

export default router;