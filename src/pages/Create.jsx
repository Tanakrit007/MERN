import React, { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: ส่งข้อมูลไป backend หรือ context
    alert("โพสต์ถูกสร้างแล้ว!");
    setTitle("");
    setContent("");
    setAuthor("");
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">สร้างโพสต์ใหม่</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="หัวข้อโพสต์"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <textarea
          placeholder="เนื้อหาโพสต์"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="border p-2 rounded"
          rows={6}
          required
        />
        <input
          type="text"
          placeholder="ชื่อผู้เขียน"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          สร้างโพสต์
        </button>
      </form>
    </div>
  );
};

export default Create;
