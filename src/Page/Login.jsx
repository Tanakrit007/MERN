// tanakrit007/mern/MERN-9b5356adf459c3c22d4aa4983023ebcaf3791fef/src/Page/Login.jsx
import React from "react";
// ✅ แก้ไข Path ให้ถูกต้อง: "../Components/ชื่อไฟล์"
import Navbar from "../Components/Navbar.jsx"; 
import Footer from "../Components/Footer.jsx";
// ✅ แก้ชื่อ Component จาก Login เป็น LoginPage
const LoginPage = () => {
  // ... handleLogin function
  // ... Pure Tailwind HTML/JSX structure (ตามที่เคยให้ไว้ก่อนหน้านี้)
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main
        className="flex-grow flex items-center justify-center p-4"
        style={{
          background: "linear-gradient(135deg, #4b0082 0%, #8a2be2 40%, #7b68ee 60%, #4682b4 100%)",
        }}
      >
        {/* ✅ PURE Tailwind Form Card */}
        <div className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-sm">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
            Login
          </h2>

          <form>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Username</label>
              <input type="text" placeholder="Username" className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            </div>
            
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input type="password" placeholder="Password" className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            </div>

            <div className="mt-6">
              <button type="submit" className="w-full py-2 px-4 rounded-lg font-semibold text-white transition duration-200" style={{ background: "#4c6ef5", borderColor: "#4c6ef5" }} >
                Sign In
              </button>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LoginPage; // ✅ เปลี่ยน Export