import React from "react";
// ปรับเส้นทางตามโครงสร้างไฟล์ของคุณ
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

const Login = () => {
  // ฟังก์ชันสำหรับจัดการเมื่อกดปุ่ม Sign In
  const handleLogin = (e) => {
    e.preventDefault();
    // ⚠️ โค้ดส่วนนี้คือส่วนที่คุณต้องเพิ่ม Logic การยืนยันตัวตนจริง ๆ
    console.log("Login button clicked! Time to authenticate.");
    alert("กำลังเข้าสู่ระบบ..."); // แสดงข้อความชั่วคราว
  };

  return (
    // 1. พื้นหลังหลัก: ใช้ min-h-screen และพื้นหลังไล่เฉดสี
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main
        className="flex-grow flex items-center justify-center p-4"
        style={{
          // พื้นหลังไล่เฉดสีม่วงน้ำเงินตามภาพ
          background:
            "linear-gradient(135deg, #4b0082 0%, #8a2be2 40%, #7b68ee 60%, #4682b4 100%)",
        }}
      >
        {/* 2. Form Card: กล่องสีขาวอยู่ตรงกลาง */}
        <div className="card w-full max-w-sm bg-white shadow-xl p-8">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
            Login
          </h2>

          <form onSubmit={handleLogin}>
            {/* 3. Input Username */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text text-gray-700">Username</span>
              </label>
              <input
                type="text"
                placeholder="Username"
                className="input input-bordered w-full bg-gray-100"
                required
              />
            </div>

            {/* 4. Input Password */}
            <div className="form-control mb-6">
              <label className="label">
                <span className="label-text text-gray-700">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered w-full bg-gray-100"
                required
              />
            </div>

            {/* 5. ปุ่ม Sign In */}
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn text-white"
                // ใช้ Tailwind Custom Gradient สำหรับปุ่ม (ตัวอย่างสีเดียว)
                style={{ background: "#4c6ef5", borderColor: "#4c6ef5" }}
              >
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

export default Login;
