// src/Page/Post.jsx
// ... (imports)
const PostPage = () => {
    const post = mockPostData; // ใช้ข้อมูลจำลอง

    return (
        <div className="min-h-screen flex flex-col bg-white"> 
            <Navbar showAuthLinks={false} showPostLinks={post.isOwner} />

            <main className="container mx-auto p-4 flex-grow">
                <article className="max-w-4xl mx-auto py-10 bg-white shadow-xl rounded-lg p-6 lg:p-10 mt-8">
                    
                    <header className="mb-6">
                        {/* ✅ H1 ขนาด 3xl หรือ 4xl */}
                        <h1 className="text-4xl font-extrabold mb-3 leading-tight text-gray-800">
                            {post.title}
                        </h1>
                        <div className="text-sm text-gray-600 mb-4">
                            {post.date} By @{post.author}
                        </div>
                        
                        {/* ปุ่ม Edit Post */}
                        {post.isOwner && (
                            <a href="/edit-post" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-700 hover:bg-gray-800 transition duration-150 mt-2">
                                ✏️ Edit Post
                            </a>
                        )}
                    </header>
                    
                    {/* เนื้อหา (ใช้ prose ที่ต้องติดตั้ง plugin) */}
                    <div 
                        className="prose max-w-none text-gray-700"
                        dangerouslySetInnerHTML={{ __html: post.content }}
                    />
                    
                </article>
            </main>
            <Footer />
        </div>
    );
};
export default PostPage;