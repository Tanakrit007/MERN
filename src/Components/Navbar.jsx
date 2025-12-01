import React from "react";

const Navbar = () => {
  return (
    // Header หลัก
    <header className="bg-[#202330] text-white">
      {/* Container หลัก: ใช้ "navbar" component ของ DaisyUI */}
      <div className="navbar container mx-auto px-4">
        {/* ส่วนโลโก้/ชื่อ Blog (อยู่ด้านซ้ายมือ) */}
        <div className="navbar-start">
          <a href="/" className="text-xl font-bold normal-case text-white">
            SE NPRU Blog
          </a>
        </div>

        {/* ส่วนปุ่ม Login / Register (อยู่ด้านขวามือ) */}
        <div className="navbar-end">
          <a
            href="/login"
            className="btn btn-ghost text-sm opacity-80 hover:opacity-100"
          >
            Login
          </a>
          <a
            href="/register"
            className="btn btn-ghost text-sm opacity-80 hover:opacity-100"
          >
            Register
          </a>
        </div>
      </div>

      {/* แถบสีไล่เฉดด้านล่าง */}
      {/* ใช้ "bg-gradient-to-r" เพื่อสร้างแถบไล่เฉดสีตามที่คุณต้องการ */}
      <div className="h-1 w-full bg-gradient-to-r from-violet-600 via-purple-500 to-fuchsia-600"></div>
    </header>
  );
};

export default Navbar;
