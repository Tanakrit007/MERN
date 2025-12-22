import React from "react";
import { Link } from "react-router"; // ใช้ react-router ตามเวอร์ชันใน package.json
import { useAuthContext } from "../context/AuthContext"; // แก้ไขชื่อให้ตรงกับไฟล์ AuthContext

const NavBar = () => {
  // ดึงข้อมูล user และฟังก์ชัน logout จาก useAuthContext
  const { user, logout } = useAuthContext();

  const menuItems = [
    { link: "/", text: "Home" },
    { link: "/", text: "Posts" },
  ];

  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems.map((item, idx) => (
              <li key={idx}>
                <Link to={item.link}>{item.text}</Link>
              </li>
            ))}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          MERN Blog
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {menuItems.map((item, idx) => (
            <li key={idx}>
              <Link to={item.link}>{item.text}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar-end space-x-2">
        {user ? (
          // กรณีล็อกอินแล้ว: แสดงปุ่ม Create และ Logout
          <div className="flex items-center gap-4">
            <Link to="/create" className="btn btn-sm">
              Create a New Post
            </Link>
            <button
              onClick={logout}
              className="btn btn-outline btn-error btn-sm"
            >
              Logout
            </button>
          </div>
        ) : (
          // กรณีไม่ได้ล็อกอิน: แสดงปุ่ม Register และ Login
          <>
            <Link to="/register" className="btn btn-sm">
              Register
            </Link>
            <Link to="/login" className="btn btn-sm">
              Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
