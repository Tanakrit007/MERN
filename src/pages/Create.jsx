import React, { useState, useEffect } from "react";
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router";
import postService from "../services/post.service"; // นำเข้า service
import Swal from "sweetalert2";

const Create = () => {
  const { user } = useAuthContext();
  const navigate = useNavigate();

  const [post, setPost] = useState({
    title: "",
    summary: "",
    content: "",
    cover: "",
  });

  // ป้องกันผู้ที่ไม่ได้ล็อกอิน
  useEffect(() => {
    if (!user) {
      Swal.fire({
        title: "กรุณาเข้าสู่ระบบ",
        icon: "warning",
      }).then(() => {
        navigate("/login");
      });
    }
  }, [user, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // เรียกใช้ API ผ่าน postService
      const response = await postService.createPost(post);

      if (response.status === 200 || response.status === 201) {
        Swal.fire({
          title: "สร้างโพสต์สำเร็จ!",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        }).then(() => {
          navigate("/");
        });
      }
    } catch (error) {
      Swal.fire({
        title: "เกิดข้อผิดพลาด",
        text:
          error.response?.data?.message ||
          "ไม่สามารถติดต่อ Server ได้ (404 Not Found)",
        icon: "error",
      });
    }
  };

  if (!user) return null;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-xl mt-10">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b pb-2">
        สร้างโพสต์ใหม่
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="form-control">
          <label className="label font-semibold">หัวข้อโพสต์</label>
          <input
            type="text"
            name="title"
            placeholder="ใส่หัวข้อที่น่าสนใจ..."
            value={post.title}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>

        <div className="form-control">
          <label className="label font-semibold">สรุปเนื้อหา (Summary)</label>
          <input
            type="text"
            name="summary"
            placeholder="สรุปสั้นๆ..."
            value={post.summary}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>

        <div className="form-control">
          <label className="label font-semibold">URL รูปภาพหน้าปก</label>
          <input
            type="text"
            name="cover"
            placeholder="https://..."
            value={post.cover}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </div>

        <div className="form-control">
          <label className="label font-semibold">เนื้อหาโพสต์ทั้งหมด</label>
          <textarea
            name="content"
            placeholder="เขียนเนื้อหาที่นี่..."
            value={post.content}
            onChange={handleChange}
            className="textarea textarea-bordered h-48"
            required
          />
        </div>

        <div className="flex justify-end gap-2 pt-4">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="btn btn-ghost"
          >
            ยกเลิก
          </button>
          <button type="submit" className="btn btn-primary px-8 text-white">
            สร้างโพสต์เลย
          </button>
        </div>
      </form>
    </div>
  );
};

export default Create;
