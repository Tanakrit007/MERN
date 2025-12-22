import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router"; //
import postService from "../services/post.service";
import { useAuthContext } from "../context/AuthContext"; //
import Swal from "sweetalert2"; //

const Edit = () => {
  const { id } = useParams(); // ดึง id จาก URL เช่น /edit/123
  const navigate = useNavigate();
  const { user } = useAuthContext(); //

  const [post, setPost] = useState({
    title: "",
    summary: "",
    content: "",
    cover: "",
  });

  const [loading, setLoading] = useState(true);

  // 1. ดึงข้อมูลเดิมมาใส่ในฟอร์ม
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await postService.getById(id);
        if (response.data) {
          setPost({
            title: response.data.title,
            summary: response.data.summary,
            content: response.data.content,
            cover: response.data.cover,
          });
        }
      } catch (error) {
        Swal.fire("ผิดพลาด", "ไม่สามารถดึงข้อมูลโพสต์ได้", "error");
        navigate("/");
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [id, navigate]);

  // 2. ป้องกันคนไม่ได้ Login หรือไม่ใช่เจ้าของ (ถ้า API รองรับการเช็ค)
  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // เรียกใช้ updatePost จาก service
      const response = await postService.updatePost(id, post);

      if (response.status === 200) {
        Swal.fire({
          title: "แก้ไขสำเร็จ!",
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        }).then(() => {
          navigate("/postDetail/" + id); // แก้ไขเสร็จกลับไปหน้าดูรายละเอียด
        });
      }
    } catch (error) {
      Swal.fire(
        "เกิดข้อผิดพลาด",
        error.response?.data?.message || "ไม่สามารถอัปเดตโพสต์ได้",
        "error"
      );
    }
  };

  if (loading)
    return <div className="text-center py-10">กำลังโหลดข้อมูล...</div>;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-xl mt-10">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 border-b pb-2">
        แก้ไขโพสต์
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="form-control">
          <label className="label font-semibold text-gray-700">
            หัวข้อโพสต์
          </label>
          <input
            type="text"
            name="title"
            value={post.title}
            onChange={handleChange}
            className="input input-bordered w-full focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div className="form-control">
          <label className="label font-semibold text-gray-700">
            สรุปเนื้อหา (Summary)
          </label>
          <input
            type="text"
            name="summary"
            value={post.summary}
            onChange={handleChange}
            className="input input-bordered w-full"
            required
          />
        </div>

        <div className="form-control">
          <label className="label font-semibold text-gray-700">
            URL รูปภาพหน้าปก
          </label>
          <input
            type="text"
            name="cover"
            value={post.cover}
            onChange={handleChange}
            className="input input-bordered w-full"
          />
        </div>

        <div className="form-control">
          <label className="label font-semibold text-gray-700">
            เนื้อหาโพสต์ทั้งหมด
          </label>
          <textarea
            name="content"
            value={post.content}
            onChange={handleChange}
            className="textarea textarea-bordered h-48 focus:ring-2 focus:ring-blue-500"
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
          <button
            type="submit"
            className="btn btn-success px-8 text-white shadow-md hover:scale-105 transition-transform"
          >
            บันทึกการแก้ไข
          </button>
        </div>
      </form>
    </div>
  );
};

export default Edit;
