import { useEffect, useState } from "react";
import AuthService from "../services/authentication.service";
import Swal from "sweetalert2";
import { useAuthContext } from "../context/AuthContext"; // นำเข้า Custom Hook ที่เราสร้างไว้ใน AuthContext
import { useNavigate } from "react-router"; // นำเข้าจาก react-router ตามที่ระบุใน package.json

const Login = () => {
  const { login, user: userInfo } = useAuthContext(); // ดึงสถานะ user และฟังก์ชัน login มาจาก Context
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  // ส่วนป้องกัน: ถ้าตรวจสอบพบว่ามีการ Login อยู่แล้ว (userInfo ไม่เป็น null)
  // ให้ดีด (navigate) ผู้ใช้กลับไปหน้าแรกทันทีเพื่อไม่ให้เห็นหน้า Login ซ้ำ
  useEffect(() => {
    if (userInfo) {
      navigate("/");
    }
  }, [userInfo, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await AuthService.login(user.username, user.password); // เรียก API login

      if (response.status === 200) {
        // เรียกใช้ฟังก์ชัน login จาก AuthContext เพื่อบันทึกข้อมูลลง State และ Cookie
        login(response.data);

        Swal.fire({
          title: "เข้าสู่ระบบสำเร็จ",
          text: `ยินดีต้อนรับคุณ ${response.data.username}`,
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        }).then(() => {
          // เปลี่ยนหน้าไปยัง Home โดยไม่รีโหลด Browser ทั้งหมด (Client-side routing)
          navigate("/");
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
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          เข้าสู่ระบบ
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <input
              type="text"
              name="username"
              placeholder="กรอกชื่อผู้ใช้ของคุณ"
              value={user.username}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              รหัสผ่าน
            </label>
            <input
              type="password"
              name="password"
              placeholder="กรอกรหัสผ่าน"
              value={user.password}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition-colors shadow-sm"
          >
            เข้าสู่ระบบ
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-600">
          ยังไม่มีบัญชีสมาชิก?{" "}
          <button
            onClick={() => navigate("/register")}
            className="text-blue-600 font-medium hover:underline focus:outline-none"
          >
            สมัครสมาชิกใหม่
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
