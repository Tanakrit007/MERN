// src/Page/Edit_Post.jsx
import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

// ข้อมูลจำลองสำหรับแก้ไข
const mockEditData = {
    title: "KBTG วางเป้าด้วย Agentic AI ในปี 2025 ทำงานร่วมกับ AI เหมือนเป็นคน ๆ หนึ่ง",
    summary: "ในช่วงปีที่ผ่านมา AI ถือเป็นเทคโนโลยีที่เข้ามาเปลี่ยนแปลงองค์กรอย่างรวดเร็ว...",
    content: "เนื้อหาฉบับเต็มของบทความ...",
};

const EditPostPage = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Updating post...");
        alert("กำลังอัปเดตบทความ...");
    };
    
    // ใช้คลาส Tailwind Form Utilities (เหมือนเดิม)
    const inputClass = "block w-full px-4 py-2 border border-gray-300 rounded-lg bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800";
    const labelClass = "block text-sm font-medium text-gray-700 mb-1";

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar showAuthLinks={false} showPostLinks={true} />

            <main 
                className="flex-grow flex items-start justify-center p-4 py-12"
                style={{ 
                    background: 'linear-gradient(135deg, #4b0082 0%, #8a2be2 40%, #7b68ee 60%, #4682b4 100%)' 
                }}>
                
                <div className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-3xl">
                    <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
                        Edit Post
                    </h2>

                    <form onSubmit={handleSubmit}>
                        
                        {/* Title */}
                        <div className="mb-4">
                            <label className={labelClass}>Title</label>
                            <input type="text" defaultValue={mockEditData.title} className={inputClass} required />
                        </div>

                        {/* Summary */}
                        <div className="mb-4">
                            <label className={labelClass}>Summary</label>
                            <input type="text" defaultValue={mockEditData.summary} className={inputClass} required />
                        </div>

                        {/* Content */}
                        <div className="mb-6">
                            <label className={labelClass}>Content</label>
                            <div className="border border-gray-300 rounded-lg p-2 bg-white">
                                <div className="flex flex-wrap text-sm text-gray-600 border-b pb-2 mb-2">
                                    [ Rich Text Editor Toolbar Placeholder ]
                                </div>
                                <textarea 
                                    rows="8" 
                                    defaultValue={mockEditData.content}
                                    className="w-full focus:outline-none resize-y text-gray-800"
                                    style={{ border: 'none' }}
                                    required
                                />
                            </div>
                        </div>

                        {/* Upload Image (ปัจจุบัน) */}
                        <div className="mb-8">
                            <label className={labelClass}>Upload Image</label>
                            <p className="text-xs text-gray-500 mb-2">Current Image: [KBTG Image]</p>
                            <input 
                                type="file" 
                                className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                            />
                        </div>
                        
                        {/* Update Post Button */}
                        <button
                            type="submit"
                            className="w-full py-3 px-4 rounded-lg font-semibold text-white transition duration-200 bg-blue-600 hover:bg-blue-700 shadow-md"
                        >
                            Update Post
                        </button>
                    </form>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default EditPostPage;