import { useState, useEffect } from "react";
import { useNavigate } from "react-router"; // ใช้จาก react-router ตาม package.json
import AuthService from "../services/authentication.service";
import Swal from "sweetalert2";
import { useAuthContext } from "../context/AuthContext"; // นำเข้าเพื่อเช็คสถานะการล็อกอิน

const Register = () => {
  const navigate = useNavigate();
  const { user: userInfo } = useAuthContext(); // ดึงสถานะ user ปัจจุบันมาตรวจสอบ

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  // ส่วนป้องกัน: ถ้าล็อกอินอยู่แล้ว (userInfo มีค่า) ให้ดีดไปหน้า Home ทันที
  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [userInfo, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await AuthService.register(
        user.username,
        user.email,
        user.password
      );

      if (response.status === 200) {
        Swal.fire({
          title: "ลงทะเบียนสำเร็จ",
          text: "ระบบกำลังนำคุณไปหน้าเข้าสู่ระบบ",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        }).then(() => {
          navigate("/login"); // เมื่อสมัครเสร็จให้ไปหน้า Login
        });
      }
    } catch (error) {
      Swal.fire({
        title: "ลงทะเบียนล้มเหลว",
        text: error.response?.data?.message || "เกิดข้อผิดพลาดในการลงทะเบียน",
        icon: "error",
      });
    }
  };

  // ถ้าล็อกอินแล้ว ไม่ต้องแสดงผลหน้า Register ให้เห็นเลย
  if (userInfo) return null;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          สมัครสมาชิก
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              name="username"
              value={user.username}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1 outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1 outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              รหัสผ่าน
            </label>
            <input
              type="password"
              name="password"
              value={user.password}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 mt-1 outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            ลงทะเบียน
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            มีบัญชีอยู่แล้ว?{" "}
            <button
              onClick={() => navigate("/login")}
              className="text-blue-600 hover:underline"
            >
              เข้าสู่ระบบ
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
