// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  // ⚠️ ตรวจสอบว่า content ครอบคลุมไฟล์ทั้งหมด
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"), // 👈 DaisyUI ต้องเปิดใช้งานที่นี่
    // แนะนำ: require('@tailwindcss/typography'), สำหรับหน้า Post.jsx
  ],
  // ...
}