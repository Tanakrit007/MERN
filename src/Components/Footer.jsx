import React from "react";

const Footer = () => {
  return (
    // Footer หลัก: ใช้พื้นหลังสีเข้มเดียวกันกับ Navbar
    <footer className="bg-[#202330] text-white">
      {/* แถบสีไล่เฉดด้านบน (กลับด้านกับ Navbar) */}
      <div className="h-1 w-full bg-gradient-to-r from-fuchsia-600 via-purple-500 to-violet-600"></div>

      {/* ส่วนเนื้อหา Footer (ใช้ Footer component ของ DaisyUI) */}
      {/* "footer-center" ช่วยจัดเนื้อหาให้อยู่ตรงกลาง */}
      <div className="footer footer-center p-4">
        <aside>
          {/* ข้อความ Copyright */}
          <p className="text-sm opacity-80">
            © 2024 Software Engineering, NPRU. All rights reserved.
          </p>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
