import React from "react";
import { Link } from "react-router";
import { useAuth } from "../context/AuthContext"; //

const NavBar = () => {
  const { user, logout } = useAuth(); // ดึงข้อมูล user และฟังก์ชัน logout จาก context

  const menuItems = [
    { link: "/", text: "Home" },
    { link: "/", text: "Posts" },
  ];

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        {/* ... (โค้ด Dropdown เดิม) ... */}
        <Link to="/" className="btn btn-ghost text-xl">
          MERN Blog
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {menuItems.map((item, idx) => (
            <li key={idx}>
              <a href={item.link}>{item.text}</a>
            </li>
          ))}
          {/* แสดงเมนู Create เมื่อล็อกอินแล้วเท่านั้น */}
          {user && (
            <li>
              <Link to="/create">Create Post</Link>
            </li>
          )}
        </ul>
      </div>

      <div className="navbar-end space-x-2">
        {user ? (
          // กรณีล็อกอินแล้ว: แสดงชื่อผู้ใช้ และปุ่ม Logout
          <div className="flex items-center gap-4">
            <span className="font-semibold text-primary">
              ยินดีต้อนรับ: {user.username}
            </span>
            <button
              onClick={logout}
              className="btn btn-outline btn-error btn-sm"
            >
              Logout
            </button>
          </div>
        ) : (
          // กรณีไม่ได้ล็อกอิน: แสดงปุ่ม Register และ Login ตามเดิม
          <>
            <a href="/register" className="btn btn-sm">
              Register
            </a>
            <a href="/login" className="btn btn-sm">
              Login
            </a>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
