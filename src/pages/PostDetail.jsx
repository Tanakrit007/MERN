import { useState, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import DOMPurify from "dompurify";
import postService from "../service/post.service";
import Swal from "sweetalert2";
import { UserContext } from "../context/UserContext";

const PostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { userInfo } = useContext(UserContext);
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await postService.getById(id);
        if (response.status === 200) {
          setPost(response.data);
        }
      } catch (error) {
        Swal.fire({
          icon: "error",
          text: error?.response?.data?.message || error.message,
        });
      }
    };
    fetchPost();
  }, [id]);

  // ฟังก์ชันสำหรับการลบโพสต์
  const handleDelete = async () => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        const response = await postService.deletePost(id);
        if (response.status === 200) {
          await Swal.fire("Deleted!", "Your post has been deleted.", "success");
          navigate("/"); // ลบเสร็จแล้วกลับหน้าแรก
        }
      } catch (error) {
        Swal.fire("Error", error.response?.data?.message || "Delete failed", "error");
      }
    }
  };

  if (!post) return <div className="p-10 text-center">Loading...</div>;

  return (
    <div className="card lg:card-side bg-base-100 shadow-xl m-5">
      <figure className="lg:w-1/2">
        {/* ใช้ post.cover ให้ตรงกับที่แก้ใน Backend */}
        <img 
          src={post.cover || "/default-cover.jpg"} 
          alt={post.title} 
          className="w-full h-full object-cover"
        />
      </figure>

      <div className="card-body lg:w-1/2">
        <h2 className="card-title text-3xl">{post.title}</h2>
        <p className="text-gray-500">{new Date(post.createdAt).toLocaleString()}</p>

        <div className="author mb-4">
          By <span className="text-blue-500 font-bold">@{post?.author?.username}</span>
        </div>

        {userInfo?.id?.toString() === post?.author?._id?.toString() && (
      <div className="flex gap-2 mb-4">
      <a className="btn btn-warning" href={`/edit/${post?._id}`}>
        Edit Post
      </a>
      <button className="btn btn-error" onClick={handleDelete}>
        Delete Post
      </button>
    </div>
  )}

        <div
          className="content prose lg:prose-xl"
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content) }}
        ></div>

        {/* ปุ่ม Listen ถูกลบออกแล้วเพื่อความสะอาด */}
      </div>
    </div>
  );
};

export default PostDetail;