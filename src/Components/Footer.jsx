// tanakrit007/mern/MERN-9b5356adf459c3c22d4aa4983023ebcaf3791fef/src/Components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    // Footer หลัก
    <footer className="bg-[#202330] text-white">
      {/* แถบสีไล่เฉดด้านบน */}
      <div className="h-1 w-full bg-gradient-to-r from-fuchsia-600 via-purple-500 to-violet-600"></div>

      {/* ✅ ใช้ PURE Tailwind Flexbox แทน DaisyUI Footer */}
      <div className="flex justify-center items-center w-full p-4">
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