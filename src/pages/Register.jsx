import { useState } from "react";
import AuthService from "../services/authentication.service";
import Swal from "sweetalert2";

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((user) => ({ ...user, [name]: value }));
  };

  const handleSubmit = async () => {
    if (!user.username || !user.password) {
      Swal.fire({
        title: "password หรือ username ไม่ถูกต้อง",
        icon: "error",
        draggable: true,
      });
    } else {
      try {
        const response = await AuthService.register(
          user.username,
          user.password
        );
        if (response.status === 201 || response.status === 200) {
          Swal.fire({
            title: "สมัครสมาชิกสำเร็จ",
            text: response.data.message,
            icon: "success",
            draggable: true,
          }).then(() => {
            // ใช้คำสั่งนี้แทนการ navigate ครับ
            window.location.href = "/login";
          });
        }
      } catch (error) {
        Swal.fire({
          title: "เกิดข้อผิดพลาด",
          text: error.response?.data?.message || "ไม่สามารถสมัครได้",
          icon: "error",
        });
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-semibold mb-4">สมัครสมาชิก</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          className="space-y-4"
        >
          <div>
            <label className="block text-sm font-medium mb-1">Username</label>
            <input
              type="text"
              name="username"
              value={user.username}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              placeholder="Username"
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
              placeholder="รหัสผ่าน"
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
          มีบัญชีอยู่แล้ว?
          <a href="/login" className="text-blue-600 hover:underline ml-1">
            เข้าสู่ระบบ
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
