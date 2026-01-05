import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router";
import postService from "../services/post.service";
import Swal from "sweetalert2";
import { UserContext } from "../context/UserContext";
import dompurify from "dompurify";

const PostDetail = () => {
  const { id } = useParams();
  const { userInfo } = useContext(UserContext);
  const [post, setPost] = useState(null); // เริ่มต้นเป็น null เพื่อเช็คสถานะโหลดจริง

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await postService.getPostById(id);
        if (response.data) {
          setPost(response.data);
        }
      } catch (error) {
        console.error("API Error:", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Failed to fetch post details.",
        });
      }
    };
    fetchPost();
  }, [id]);

  // แสดง Loading ถ้ายังโหลดข้อมูลไม่เสร็จ
  if (!post) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  // --- ส่วนที่แก้ไขให้ปุ่มโชว์แน่นอน ---

  // 1. ดึงข้อมูล User จาก LocalStorage มาเช็ค (เพราะ userInfo ใน Context ตอนนี้เป็น undefined)
  const userFromStorage = JSON.parse(localStorage.getItem("user"));

  // 2. พยายามหา ID จากทุกที่ที่เป็นไปได้ (userInfo หรือ localStorage)
  const currentUserId =
    userInfo?.id ||
    userInfo?._id ||
    userFromStorage?.id ||
    userFromStorage?._id;

  // 3. ดึง ID เจ้าของโพสต์
  const authorId = post.author?._id || post.author?.id || post.author;

  // 4. เทียบโดยบังคับแปลงเป็น String และเช็คว่าต้องมีค่าทั้งคู่
  const isOwner =
    currentUserId && authorId && String(currentUserId) === String(authorId);

  // DEBUG สำหรับดูค่าจริง:
  console.log("Check Match:", {
    current: String(currentUserId),
    author: String(authorId),
    isOwner: isOwner,
  });

  return (
    <div className="max-w-4xl mx-auto my-8 p-4">
      <div className="card bg-base-100 shadow-xl overflow-hidden">
        {post.cover && (
          <figure className="w-full">
            <img
              src={post.cover}
              alt={post.title}
              className="w-full h-auto max-h-[500px] object-cover"
            />
          </figure>
        )}

        <div className="card-body">
          <div className="flex justify-between items-start gap-4">
            <h2 className="card-title text-3xl font-bold text-gray-800">
              {post.title}
            </h2>
          </div>

          <div className="flex gap-2 text-sm text-gray-500 mt-2 border-b pb-4">
            <span className="font-semibold text-blue-600">
              {typeof post.author === "object"
                ? post.author.username
                : "Author"}
            </span>
            <span>|</span>
            <span>{new Date(post.createdAt).toLocaleDateString()}</span>
          </div>

          {/* ส่วนปุ่ม Edit และ Delete */}
          {isOwner && (
            <div className="edit-row text-center flex items-center justify-end gap-2 mt-4">
              <a className="btn btn-warning" href={`/edit/${id}`}>
                Edit
              </a>
              <a className="btn btn-error" href={`/delete/${id}`}>
                Delete
              </a>
            </div>
          )}

          <div
            className="content text-gray-700 mt-6 leading-relaxed prose max-w-none"
            dangerouslySetInnerHTML={{
              __html: dompurify.sanitize(post.content || post.summary),
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
