import React, { useState, useEffect, useRef } from "react";
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router";
import postService from "../services/post.service";
import Swal from "sweetalert2";
import Editor from "../Components/Editor.jsx";

const Create = () => {
  const { user } = useAuthContext();
  const navigate = useNavigate();
  const editorRef = useRef(null);

  const [post, setPost] = useState({
    title: "",
    summary: "",
    content: "",
    file: null, // สำหรับเก็บ File Object
  });

  useEffect(() => {
    if (!user) {
      Swal.fire({ title: "กรุณาเข้าสู่ระบบ", icon: "warning" }).then(() =>
        navigate("/login")
      );
    }
  }, [user, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((prev) => ({ ...prev, [name]: value }));
  };

  // ฟังก์ชันดึงไฟล์จาก input
  const handleFileChange = (e) => {
    setPost((prev) => ({ ...prev, file: e.target.files[0] }));
  };

  // ฟังก์ชันรับค่าจาก Rich Editor
  const handleContentChange = (value) => {
    setPost((prev) => ({ ...prev, content: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // สร้าง FormData เพื่อส่งไฟล์
    const formData = new FormData();
    formData.append("title", post.title);
    formData.append("summary", post.summary);
    formData.append("content", post.content);
    if (post.file) {
      formData.append("file", post.file); // ชื่อ 'file' ต้องตรงกับที่ Backend รับ (เช่น Multer)
    }

    try {
      const response = await postService.createPost(formData);

      if (response.status === 200 || response.status === 201) {
        Swal.fire({
          title: "สร้างโพสต์สำเร็จ!",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        }).then(() => navigate("/"));
      }
    } catch (error) {
      Swal.fire({
        title: "เกิดข้อผิดพลาด",
        text: error.response?.data?.message || "ไม่สามารถติดต่อ Server ได้",
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
            value={post.summary}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>

        {/* ส่วนอัปโหลดไฟล์ */}
        <div className="form-control">
          <label className="label font-semibold">รูปภาพหน้าปก (File)</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="file-input file-input-bordered w-full"
            required
          />
        </div>

        {/* ส่วน Rich Text Editor */}
        <div className="form-control">
          <label className="label font-semibold">เนื้อหาโพสต์ทั้งหมด</label>
          <div className="min-h-[300px] mb-12">
            <Editor
              value={post.content}
              onChange={handleContentChange}
              ref={editorRef}
            />
          </div>
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
