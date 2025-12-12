import React, { useState } from "react";
import Post from "../components/Post";

const Home = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "Sample Post",
      cover:
        "https://tse3.mm.bing.net/th/id/OIP.XWg3dHcV8p2tHkRlofEFkQHaEo?cb=ucfimg2&ucfimg=1&w=1600&h=1000&rs=1&pid=ImgDetMain&o=7&rm=3",
      author: "Author Name",
      createdAt: "2024-06-01",
      summary: "This is a summary of the sample post.",
    },
    {
      id: 2,
      title: "เพิ่มเติม: ข่าวใหม่",
      cover:
        "https://mir-s3-cdn-cf.behance.net/projects/max_808/5d7b08147314711.Y3JvcCwyMjI5LDE3NDQsMzM2LDA.jpg",
      author: "ผู้เขียนใหม่",
      createdAt: "2025-12-08",
      summary: "นี่คือสรุปของข่าวที่เพิ่มเข้ามาอีกหนึ่งรายการ",
    },
  ]);

  return (
    <div className="space-y-4">
      {posts.map((post, index) => (
        <Post postDetail={post} key={post.id} />
      ))}
    </div>
  );
};

export default Home;
