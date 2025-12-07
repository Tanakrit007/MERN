// tanakrit007/mern/MERN-9b5356adf459c3c22d4aa4983023ebcaf3791fef/src/Components/PostCard.jsx
import React from 'react';

const PostCard = ({ title, author, date, excerpt, imageUrl, isImageLeft }) => {
  const contentOrder = isImageLeft ? 'lg:flex-row' : 'lg:flex-row-reverse';

  return (
    <div className="mb-10 p-6 rounded-xl shadow-2xl text-white 
                    border-2 border-purple-600 bg-[#202330]"> 
      <div className={`flex flex-col lg:flex ${contentOrder} w-full gap-4`}>
        
        {/* 1. ส่วนรูปภาพ: ควบคุมขนาด (2/5) และอัตราส่วน (16:9) */}
        <div className="lg:w-2/5 w-full flex-shrink-0">
          {/* ✅ Aspect Ratio Container: ล็อคขนาด 16:9 (56.25% คือ 9/16) */}
          <figure className="relative h-0 pb-[56.25%] overflow-hidden rounded-lg"> 
            <img 
              src={imageUrl} 
              alt={title} 
              // ⚠️ ทำให้รูปภาพยืดเต็มพื้นที่ Container ที่ล็อคขนาดไว้
              className="absolute top-0 left-0 w-full h-full object-cover" 
            />
          </figure>
        </div>

        {/* 2. ส่วนเนื้อหา: ขนาด 3/5 */}
        <div className="lg:w-3/5 w-full">
          {/* H2 และ Text Utilities */}
          <h2 className="text-2xl font-bold leading-snug text-violet-300 mb-2">
            {title}
          </h2>
          <div className="text-sm text-gray-400 mb-4">
            <span className="font-semibold text-violet-400">{author}</span> | <span>{date}</span>
          </div>
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