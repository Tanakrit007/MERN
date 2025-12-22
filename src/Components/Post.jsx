import { Link } from "react-router";

const Post = ({ postDetail, index = 0 }) => {
  // id ใน MongoDB มักจะเป็น _id
  const { _id, id, title, cover, author, createdAt, summary } = postDetail;
  const isEven = index % 2 === 0;
  const postId = _id || id;

  return (
    <Link
      to={"/postDetail/" + postId}
      className={`card lg:card-side bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] mb-6 ${
        isEven ? "lg:flex-row-reverse" : ""
      }`}
    >
      <figure className="lg:w-1/2 flex items-center justify-center">
        <img src={cover} alt={title} className="w-full h-64 object-cover" />
      </figure>

      <div className="card-body p-6 lg:w-1/2 flex flex-col justify-between">
        <h2 className="card-title text-2xl font-bold text-gray-800">{title}</h2>

        <div className="flex gap-2 text-sm text-gray-500">
          {/* แก้ไข: เช็คว่าเป็น Object หรือไม่ ถ้าใช่ให้ดึง .username */}
          <span className="font-semibold text-blue-600">
            {typeof author === "object" ? author.username : author}
          </span>
          <span>|</span>
          <span>{new Date(createdAt).toLocaleDateString()}</span>
        </div>

        <p className="text-gray-600 line-clamp-3">{summary}</p>
      </div>
    </Link>
  );
};

export default Post;
