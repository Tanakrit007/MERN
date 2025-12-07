// tanakrit007/mern/MERN-9b5356adf459c3c22d4aa4983023ebcaf3791fef/tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    // ⚠️ Path ถูกต้องแล้ว
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"), 
    // ✅ เพิ่ม plugins ที่จำเป็นสำหรับการแสดงผล
    require('@tailwindcss/typography'), 
    require('@tailwindcss/line-clamp'), 
  ],
  // ...
}