import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import PostCard from "../Components/PostCard"; // ต้อง Import เป็น PostCard

// ข้อมูลจำลองสำหรับแสดงผล (จากตัวอย่างเดิม)
const mockPosts = [
  {
    id: 1,
    title:
      "ซีอีโอคนใหม่ของ Intel บอก ซีอีโอคนใหม่ต้องมีพื้นฐานในกระบวนการผลิตชิป",
    author: "wutthaj",
    date: "05 December 2024 - 23:26",
    excerpt:
      "หลังจากเดินหน้าได้ตัดสินใจปลดซีอีโอ Pat Gelsinger ออกจากตำแหน่ง ประเด็นหนึ่งที่ตลาดคอยจับตาคือซีอีโอคนใหม่ อาจะนำไปสู่การตลาดผลิตภัณฑ์อินเทลแตกต่างจาก Gelsinger ที่มีพื้นฐานจากสายวิศวกรรม (Rob Swan มีมีพื้นฐานจากสายวิศวกรรม (Rob Swan มีพื้นฐานจากสายวิศวกรรม) มากจากสายการเงิน...",
    imageUrl: "https://via.placeholder.com/600x337?text=Intel+Post+Image",
    isImageLeft: true,
  },
  {
    id: 2,
    title:
      "KBTG วางเป้าด้วย Agentic AI ในปี 2025 ทำงานร่วมกับ AI เหมือนเป็นคน ๆ หนึ่ง",
    author: "wutthaj",
    date: "05 December 2024 - 21:11",
    excerpt:
      "ในช่วงปีที่ผ่านมา AI ถือเป็นเทคโนโลยีที่เข้ามาเปลี่ยนแปลงองค์กรอย่างรวดเร็ว และที่สำคัญคือมีการปรับไปในการดำเนินธุรกิจหลากหลายอุตสาหกรรม ศูนย์เทคโนโลยี ของ Kasikorn Business Technology Group (KBTG) ได้เปิดเผยว่า ในมุมของ KBTG เอง การปรับไปใช้ AI ทะยานจาก 30% สู่ 75% ภายในเวลาแค่ 9 เดือน...",
    imageUrl: "https://via.placeholder.com/600x337?text=KBTG+Post+Image",
    isImageLeft: false,
  },
];

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#202330]">
      <Navbar />

      <main className="container mx-auto p-4 flex-grow">
        <div className="py-8">
          {mockPosts.map((post, index) => (
            // ✅ ส่วนนี้เรียกใช้ PostCard ได้อย่างถูกต้องแล้ว
            <PostCard
              key={post.id}
              title={post.title}
              author={post.author}
              date={post.date}
              excerpt={post.excerpt}
              imageUrl={post.imageUrl}
              // สลับตำแหน่งรูปภาพระหว่างซ้ายและขวา
              isImageLeft={index % 2 === 0}
            />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
