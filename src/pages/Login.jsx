import { useState } from "react";
import AuthService from "../services/authentication.service";
import Swal from "sweetalert2";

const Login = () => {
  // ปรับ State ให้เป็น Object เหมือนหน้า Register เพื่อความง่ายในการส่งข้อมูล
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

    if (!user.username || !user.password) {
      Swal.fire({
        title: "กรุณากรอกข้อมูลให้ครบถ้วน",
        icon: "warning",
      });
      return;
    }

    try {
      // เรียกใช้ AuthService (สมมติว่าคุณมีฟังก์ชัน login เตรียมไว้)
      const response = await AuthService.login(user.username, user.password);

      if (response.status === 200) {
        Swal.fire({
          title: "เข้าสู่ระบบสำเร็จ",
          text: `ยินดีต้อนรับคุณ ${user.username}`,
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        }).then(() => {
          // ใช้ window.location แทน navigate
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
              name="username" // เพิ่ม name ให้ตรงกับ key ใน state
              value={user.username}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              placeholder="กรอกชื่อผู้ใช้"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">รหัสผ่าน</label>
            <input
              type="password"
              name="password" // เพิ่ม name ให้ตรงกับ key ใน state
              value={user.password}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              placeholder="รหัสผ่าน"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition-colors"
          >
            เข้าสู่ระบบ
          </button>
        </form>

        <p className="text-sm text-gray-600 mt-4">
          ยังไม่มีบัญชี? {/* เปลี่ยนจาก Link เป็นแท็ก a */}
          <a href="/register" className="text-blue-600 hover:underline ml-1">
            สมัครสมาชิก
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
