import React from "react";

const PostCard = ({ title, author, date, excerpt, imageUrl, isImageLeft }) => {
  // กำหนดลำดับการแสดงผล (รูปซ้าย/ขวา)
  const contentOrder = isImageLeft ? "lg:flex-row" : "lg:flex-row-reverse";

  return (
    // 1. การ์ดหลัก: ใช้ Tailwind เพื่อสร้างกรอบสีไล่เฉด
    <div
      className="relative mb-10 p-1 rounded-xl group"
      style={{
        background: "linear-gradient(to right, #6a5acd, #8a2be2, #4b0082)",
      }}
    >
      {/* 2. เนื้อหาภายใน: ใช้สีพื้นหลังเข้มเพื่อให้กรอบสีไล่เฉดแสดงออกมา */}
      <div
        className={`card lg:card-side shadow-2xl bg-[#202330] rounded-xl overflow-hidden`}
      >
        <div className={`flex flex-col lg:flex ${contentOrder} w-full`}>
          {/* ส่วนรูปภาพ */}
          <figure className="lg:w-2/5 w-full">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover aspect-video"
            />
          </figure>

          {/* ส่วนเนื้อหา */}
          <div className="card-body p-6 lg:w-3/5 w-full text-white">
            {/* หัวข้อ */}
            <h2 className="card-title text-2xl font-bold leading-snug text-violet-300">
              {title}
            </h2>

            {/* รายละเอียดผู้เขียน/วันที่ */}
            <div className="text-sm text-gray-400 mb-2">
              <span className="font-semibold text-violet-400">{author}</span> |{" "}
              <span className="text-sm">{date}</span>
            </div>

            {/* สรุปเนื้อหา */}
            <p className="text-base text-gray-300 line-clamp-3">{excerpt}</p>

            {/* ปุ่มอ่านต่อ (Optional) */}
            <div className="card-actions justify-end mt-4">
              <a
                href="#"
                className="text-sm font-semibold text-violet-400 hover:text-violet-300 transition-colors"
              >
                อ่านต่อ »
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
