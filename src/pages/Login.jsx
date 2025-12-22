import { useState } from "react";
import AuthService from "../services/authentication.service";
import Swal from "sweetalert2";
import { useAuth } from "../context/AuthContext"; // 1. นำเข้า useAuth

const Login = () => {
  const { login } = useAuth(); // 2. ดึงฟังก์ชัน login มาใช้
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await AuthService.login(user.username, user.password);

      if (response.status === 200) {
        // 3. ส่งข้อมูลผู้ใช้เข้า Context (เพื่อให้ Navbar อัปเดต)
        login(response.data);

        Swal.fire({
          title: "เข้าสู่ระบบสำเร็จ",
          text: `ยินดีต้อนรับคุณ ${response.data.username}`,
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        }).then(() => {
          window.location.href = "/";
        });
      }
    } catch (error) {
      Swal.fire({
        title: "เข้าสู่ระบบล้มเหลว",
        text:
          error.response?.data?.message || "Username หรือ Password ไม่ถูกต้อง",
        icon: "error",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-semibold mb-4">เข้าสู่ระบบ</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1">Username</label>
            <input
              type="text"
              name="username"
              value={user.username}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">รหัสผ่าน</label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
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
          <a href="/register" className="text-blue-600 hover:underline ml-1">
            สมัครสมาชิก
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
