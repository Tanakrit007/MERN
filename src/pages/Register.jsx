import React, { useState } from "react";
import { useNavigate, Link } from "react-router";

const Register = () => {
  // ใช้ State ชื่อเดียวกับหน้า Login เพื่อความเข้าใจง่าย
  const [Username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // ตรวจสอบว่ากรอกข้อมูลครบไหม
    if (!Username || !password || !confirmPassword) {
      alert("กรุณากรอกข้อมูลให้ครบถ้วน");
      return;
    }

    // ตรวจสอบว่ารหัสผ่านตรงกันไหม
    if (password !== confirmPassword) {
      alert("รหัสผ่านและการยืนยันรหัสผ่านไม่ตรงกัน");
      return;
    }

    // จำลองการสมัครสมาชิกสำเร็จ
    // ในโปรเจกต์จริง ตรงนี้จะเป็นการส่งข้อมูลไปยัง Backend
    console.log("Registered with:", { Username, password });
    alert("สมัครสมาชิกสำเร็จ! กรุณาเข้าสู่ระบบ");

    // เด้งกลับไปหน้า Login
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-semibold mb-4">สมัครสมาชิก</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* ส่วนของอีเมล/Username */}
          <div>
            <label className="block text-sm font-medium mb-1">Username</label>
            <input
              type="Username"
              value={Username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border rounded px-3 py-2"
              placeholder=""
              required
            />
          </div>

          {/* ส่วนของรหัสผ่าน */}
          <div>
            <label className="block text-sm font-medium mb-1">รหัสผ่าน</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border rounded px-3 py-2"
              placeholder="รหัสผ่าน"
              required
            />
          </div>

          {/* ส่วนของการยืนยันรหัสผ่าน (เพิ่มมาเพื่อให้สมบูรณ์) */}
          <div>
            <label className="block text-sm font-medium mb-1">
              ยืนยันรหัสผ่าน
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full border rounded px-3 py-2"
              placeholder="ยืนยันรหัสผ่านอีกครั้ง"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
          >
            สมัครสมาชิก
          </button>
        </form>

        <p className="text-sm text-gray-600 mt-4">
          มีบัญชีอยู่แล้ว? {/* ลิงก์กลับไปหน้า Login */}
          <Link to="/login" className="text-blue-600 hover:underline">
            เข้าสู่ระบบ
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
