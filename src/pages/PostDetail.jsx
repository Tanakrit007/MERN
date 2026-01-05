// src/pages/PostDetail.jsx
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import postService from "../services/post.service";
import tokenService from "../services/token.service";
import Swal from "sweetalert2";
import DOMPurify from "dompurify";

const PostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await postService.getPostById(id);
        if (response.status === 200) {
          setPost(response.data);
        }
      } catch (error) {
        console.error("API Error:", error);
        setPost(null);
      }
    };
    if (id) fetchPost();
  }, [id]);

  if (!post) {
    return (
      <div className="text-white text-center py-10">
        Loading or Post Not Found (404)...
      </div>
    );
  }

  // --- ส่วนที่แก้ไขให้ปุ่มโชว์แน่นอน ---
  // ดึงข้อมูลผู้ใช้จาก Cookie โดยตรงเพื่อให้ปุ่มโชว์ทันที
  const userFromCookie = tokenService.getUser();
  const currentUserId = userFromCookie?.id || userFromCookie?._id;

  // ดึง ID ของเจ้าของโพสต์ (author อาจเป็น Object หรือ ID String)
  const authorId = post.author?._id || post.author?.id || post.author;

  // เทียบ ID โดยแปลงเป็น String ทั้งคู่ เพื่อป้องกันปัญหา Data Type ไม่ตรงกัน
  const isOwner =
    currentUserId && authorId && String(currentUserId) === String(authorId);

  const handleDelete = async () => {
    const result = await Swal.fire({
      title: "ยืนยันการลบโพสต์?",
      text: "คุณจะไม่สามารถกู้คืนโพสต์นี้ได้!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "ลบเลย",
      cancelButtonText: "ยกเลิก",
    });

    if (result.isConfirmed) {
      try {
        await postService.deletePost(id);
        await Swal.fire("สำเร็จ!", "โพสต์ของคุณถูกลบเรียบร้อย", "success");
        navigate("/");
      } catch (error) {
        Swal.fire("Error", "ไม่สามารถลบโพสต์ได้", "error");
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto my-8 bg-white rounded-lg shadow-lg overflow-hidden">
      {post.cover && (
        <div className="w-full h-64 md:h-96 overflow-hidden">
          <img
            src={post.cover}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <div className="p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{post.title}</h1>

        <div className="flex gap-4 mb-6 p-3 bg-gray-50 rounded-lg">
          <span className="text-gray-700 font-medium">
            By{" "}
            <span className="text-blue-600">
              {typeof post.author === "object"
                ? post.author.username
                : "Author"}
            </span>
          </span>
          <span className="text-gray-500 text-sm border-l pl-4">
            {new Date(post.createdAt).toLocaleDateString()}
          </span>
        </div>

        <div
          className="prose max-w-none text-gray-700 mb-8 leading-relaxed"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(post.content || post.summary),
          }}
        />

        <div className="border-t pt-4 flex gap-2">
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
          >
            ← Back
          </button>

          {/* ปุ่มจะแสดงผลเฉพาะเจ้าของโพสต์ */}
          {isOwner && (
            <>
              <a
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                href={`/edit/${id}`}
              >
                Edit Post
              </a>
              <button
                onClick={handleDelete}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
              >
                Delete Post
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
