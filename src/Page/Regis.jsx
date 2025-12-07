// src/Page/Regis.jsx
import React from "react";
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";

const RegisterPage = () => {
  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Register button clicked! Ready to create account.");
    alert("กำลังลงทะเบียน...");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main
        className="flex-grow flex items-center justify-center p-4"
        style={{
          background:
            "linear-gradient(135deg, #4b0082 0%, #8a2be2 40%, #7b68ee 60%, #4682b4 100%)",
        }}
      >
        {/* Form Card: สำหรับ Register */}
        <div className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-sm">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
            Register
          </h2>

          <form onSubmit={handleRegister}>
            {/* Input Username */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Username
              </label>
              <input
                type="text"
                placeholder="Username"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            
            {/* Input Email */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Input Password */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* ปุ่ม Sign Up */}
            <div className="mt-6">
              <button
                type="submit"
                className="w-full py-2 px-4 rounded-lg font-semibold text-white transition duration-200"
                style={{ background: "#4c6ef5", borderColor: "#4c6ef5" }}
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RegisterPage;