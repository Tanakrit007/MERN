// tanakrit007/mern/MERN-9b5356adf459c3c22d4aa4983023ebcaf3791fef/src/Page/Home.jsx
import React from "react";
// ✅ แก้ไข Path ให้ถูกต้องตามโครงสร้าง: "../Components/ชื่อไฟล์"
import Navbar from "../Components/Navbar.jsx";
import Footer from "../Components/Footer.jsx";
import PostCard from "../Components/PostCard.jsx";

// ข้อมูลจำลองสำหรับแสดงผล (เปลี่ยน URL Placeholder ที่เสถียร)
const mockPosts = [
  {
    id: 1,
    title: "ซีอีโอคนใหม่ของ Intel บอก ซีอีโอคนใหม่ต้องมีพื้นฐานในกระบวนการผลิตชิป",
    author: "wutthaj",
    date: "05 December 2024 - 23:26",
    excerpt: "...",
    imageUrl: "https://placehold.co/600x337/8b5cf6/ffffff?text=INTEL+POST", // URL ใหม่
    isImageLeft: true,
  },
  {
    id: 2,
    title: "KBTG วางเป้าด้วย Agentic AI ในปี 2025 ทำงานร่วมกับ AI เหมือนเป็นคน ๆ หนึ่ง",
    author: "wutthaj",
    date: "05 December 2024 - 21:11",
    excerpt: "...",
    imageUrl: "https://placehold.co/600x337/8b5cf6/ffffff?text=KBTG+POST", // URL ใหม่
    isImageLeft: false,
  },
];

const Home = () => {
    // ... (โค้ด Home component ที่เหลือ)
    return (
        <div className="min-h-screen flex flex-col bg-[#202330]">
            <Navbar />

            <main className="container mx-auto p-4 flex-grow">
                <div className="py-8">
                    {mockPosts.map((post, index) => (
                        <PostCard
                            key={post.id}
                            title={post.title}
                            author={post.author}
                            date={post.date}
                            excerpt={post.excerpt}
                            imageUrl={post.imageUrl}
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