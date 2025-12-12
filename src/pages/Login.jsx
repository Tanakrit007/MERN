import React, { useState } from "react";
import { useNavigate, Link } from "react-router";

const Login = () => {
  const [Username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // แบบง่าย ๆ สำหรับตอนนี้จะเก็บเป็นการจำลองการล็อกอิน
    if (!Username || !password) {
      alert("กรุณากรอกอีเมลและรหัสผ่าน");
      return;
    }
    // จำลองความสำเร็จ
    alert(`ยินดีต้อนรับ ${Username}`);
    navigate(`/`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-semibold mb-4">เข้าสู่ระบบ</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
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

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            เข้าสู่ระบบ
          </button>
        </form>

        <p className="text-sm text-gray-600 mt-4">
          ยังไม่มีบัญชี?{" "}
          <Link to="/register" className="text-blue-600 hover:underline">
            สมัครสมาชิก
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
