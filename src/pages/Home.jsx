import { useState, useEffect } from "react";
import Post from "../Components/Post"; // ตรวจสอบชื่อโฟลเดอร์ให้ตรง (Components ตัวใหญ่)
import postService from "../services/post.service"; // ตรวจสอบ Path ของไฟล์ service ของคุณ

const Home = () => {
  // 1. เปลี่ยนค่าเริ่มต้นของ posts ให้เป็น Array ว่าง []
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // 2. ใช้ useEffect เพื่อดึงข้อมูลทันทีที่หน้าเว็บโหลด
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        // เรียกใช้ฟังก์ชัน getAllPosts จาก postService
        const response = await postService.getAllPosts();

        // ตรวจสอบว่า response มีข้อมูลหรือไม่ (ปกติข้อมูลจะอยู่ใน response.data)
        if (response.data) {
          setPosts(response.data);
        }
      } catch (error) {
        console.error("เกิดข้อผิดพลาดในการดึงข้อมูลโพสต์:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []); // [] หมายถึงให้รันแค่รอบเดียวตอนโหลดหน้า

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <span className="loading loading-dots loading-lg">
          กำลังโหลดข้อมูล...
        </span>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {posts.length > 0 ? (
        posts.map((post, index) => (
          <Post postDetail={post} key={post.id || index} index={index} />
        ))
      ) : (
        <div className="text-center py-10">
          <p className="text-gray-500 italic">ยังไม่มีโพสต์ในขณะนี้</p>
        </div>
      )}
    </div>
  );
};

export default Home;
