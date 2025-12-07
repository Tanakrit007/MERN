// Navbar ที่ใช้ PURE Tailwind Flexbox และปรับขนาด font
import React from "react";

const Navbar = ({ showAuthLinks = true, showPostLinks = false, userName = "wutthaj" }) => {
  return (
    <header className="bg-[#202330] text-white">
      <div className="flex justify-between items-center container mx-auto px-4 py-3">
        <div className="flex-shrink-0">
          <a href="/" className="text-xl font-bold normal-case text-white">
            SE NPRU Blog
          </a>
        </div>

        <nav className="flex space-x-5">
            {/* Links สำหรับ Home/Login/Register */}
            {showAuthLinks && (
                <>
                    <a href="/login" className="text-sm opacity-80 hover:opacity-100 transition duration-200">
                        Login
                    </a>
                    <a href="/register" className="text-sm opacity-80 hover:opacity-100 transition duration-200">
                        Register
                    </a>
                </>
            )}

            {/* Links สำหรับหน้า Admin/เจ้าของบทความ */}
            {showPostLinks && (
                <>
                    <a href="/create-post" className="text-sm text-gray-300 hover:text-white transition duration-200">
                        Create new post
                    </a>
                    <span className="text-sm text-gray-400">Logout ({userName})</span>
                </>
            )}
        </nav>
      </div>
      <div className="h-1 w-full bg-gradient-to-r from-violet-600 via-purple-500 to-fuchsia-600"></div>
    </header>
  );  
};
export default Navbar;