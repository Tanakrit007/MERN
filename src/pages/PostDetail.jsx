import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router";
import { useAuthContext } from "../context/AuthContext"; // เปลี่ยนให้ตรงกับ export ใน AuthContext.jsx
import postService from "../services/post.service"; // นำเข้า service สำหรับดึงข้อมูล
import dompurify from "dompurify";

const PostDetail = () => {
  const { id } = useParams();
  const { user } = useAuthContext();
  const [post, setPost] = useState(null); // เริ่มต้นเป็น null เพื่อเช็คสถานะการโหลด

  // ส่วนการดึงข้อมูลจาก API
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await postService.getById(id);
        if (response.data) {
          setPost(response.data);
        }
      } catch (error) {
        console.error("Error fetching post:", error);
      }
    };
    fetchPost();
  }, [id]);

  // ถ้ายังโหลดข้อมูลไม่เสร็จ ให้แสดง Loading
  if (!post) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  // เช็คสิทธิ์เจ้าของโพสต์ (เปรียบเทียบ ID ของ user ที่ login กับ author ของโพสต์)
  const isOwner =
    user &&
    user.id ===
      (typeof post.author === "object" ? post.author._id : post.author);

  return (
    <div className="max-w-4xl mx-auto my-8 p-4">
      <div className="card bg-base-100 shadow-xl overflow-hidden">
        {/* แสดงรูปภาพปก */}
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

            {/* แสดงปุ่มแก้ไขเฉพาะเจ้าของ */}
            {isOwner && (
              <Link
                to={`/edit/${id}`}
                className="btn btn-warning btn-sm shadow-md hover:scale-105 transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 mr-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                  />
                </svg>
                แก้ไขโพสต์
              </Link>
            )}
          </div>

          <div className="flex gap-2 text-sm text-gray-500 mt-2 border-b pb-4">
            <span className="font-semibold text-blue-600">
              {typeof post.author === "object"
                ? post.author.username
                : post.author}
            </span>
            <span>|</span>
            <span>{new Date(post.createdAt).toLocaleDateString()}</span>
          </div>

          {/* แสดงเนื้อหาแบบ HTML ที่ Clean แล้ว */}
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
