// ใน Component: PostCard.jsx (ใช้ Border และ Background พื้นฐานที่เสถียร)
import React from 'react';

const PostCard = ({ title, author, date, excerpt, imageUrl, isImageLeft }) => {
  const contentOrder = isImageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse';

  return (
    // การ์ดหลัก: ใช้พื้นหลังสีเข้มและขอบสีม่วงอ่อน (แทนที่จะใช้ gradient ซับซ้อน)
    <div className="mb-8 p-6 rounded-xl shadow-2xl text-white 
                    border-2 border-purple-600 bg-[#202330]"> 
      <div className={`flex flex-col lg:flex ${contentOrder} w-full gap-4`}>
        
        {/* 1. ส่วนรูปภาพ */}
        <div className="lg:w-2/5 w-full flex-shrink-0">
          <figure className="aspect-video overflow-hidden rounded-lg">
            <img 
              src={imageUrl} 
              alt={title} 
              className="w-full h-full object-cover"
            />
          </figure>
        </div>

        {/* 2. ส่วนเนื้อหา */}
        <div className="lg:w-3/5 w-full">
          {/* หัวข้อ */}
          <h2 className="text-2xl font-bold leading-snug text-violet-300 mb-2">
            {title}
          </h2>
          {/* ... ส่วนอื่น ๆ ... */}
          <p className="text-base text-gray-300 line-clamp-3 mb-4">
            {excerpt}
          </p>
          <a href="#" className="text-sm font-semibold text-violet-400 hover:text-violet-300 transition-colors">
            อ่านต่อ »
          </a>
        </div>
      </div>
    </div>
  );
};

export default PostCard;