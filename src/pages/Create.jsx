import React, { useState } from "react";
import { useNews } from "../context/NewsContext"; // ดึงฟังก์ชันเพิ่มข่าว
import { useAuth } from "../context/AuthContext"; // ดึงข้อมูลผู้เขียน
import Swal from "sweetalert2";

const Create = () => {
  const { addNews } = useNews();
  const { user } = useAuth();

  const [post, setPost] = useState({
    title: "",
    summary: "",
    content: "",
    cover: "", // URL รูปภาพ
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ข้อมูลที่จะส่งไปบันทึก
    const newPost = {
      ...post,
      author: user?.username || "Anonymous", // ใช้ชื่อผู้ใช้ที่ล็อกอินอยู่
      createdAt: new Date().toLocaleDateString(),
    };

    addNews(newPost); // บันทึกลงใน NewsContext

    Swal.fire({
      title: "สร้างโพสต์สำเร็จ!",
      icon: "success",
      timer: 1500,
      showConfirmButton: false,
    }).then(() => {
      window.location.href = "/"; // กลับไปหน้าแรกเพื่อดูโพสต์ที่สร้าง
    });
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-xl mt-10">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b pb-2">
        สร้างโพสต์ใหม่
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* ส่วนหัวข้อ */}
        <div className="form-control">
          <label className="label font-semibold text-gray-700">
            หัวข้อโพสต์
          </label>
          <input
            type="text"
            name="title"
            placeholder="ใส่หัวข้อที่น่าสนใจ..."
            value={post.title}
            onChange={handleChange}
            className="input input-bordered w-full focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* ส่วนคำอธิบายย่อ */}
        <div className="form-control">
          <label className="label font-semibold text-gray-700">
            สรุปเนื้อหา (Summary)
          </label>
          <input
            type="text"
            name="summary"
            placeholder="สรุปเนื้อหาสั้นๆ สำหรับหน้าแรก..."
            value={post.summary}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* ส่วน URL รูปภาพ */}
        <div className="form-control">
          <label className="label font-semibold text-gray-700">
            URL รูปภาพหน้าปก
          </label>
          <input
            type="text"
            name="cover"
            placeholder="https://example.com/image.jpg"
            value={post.cover}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </div>

        {/* ส่วนเนื้อหาหลัก */}
        <div className="form-control">
          <label className="label font-semibold text-gray-700">
            เนื้อหาโพสต์ทั้งหมด
          </label>
          <textarea
            name="content"
            placeholder="เขียนเนื้อหาที่นี่..."
            value={post.content}
            onChange={handleChange}
            className="textarea textarea-bordered h-48 focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* ปุ่มกดยืนยัน */}
        <div className="flex justify-end gap-2 pt-4">
          <button
            type="button"
            onClick={() => window.history.back()}
            className="btn btn-ghost"
          >
            ยกเลิก
          </button>
          <button
            type="submit"
            className="btn btn-primary px-8 text-white shadow-md hover:scale-105 transition-transform"
          >
            สร้างโพสต์เลย
          </button>
        </div>
      </form>
    </div>
  );
};

export default Create;
