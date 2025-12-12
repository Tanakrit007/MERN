const Post = ({ postDetail, index = 0 }) => {
  const { id, title, cover, author, createdAt, summary } = postDetail;
  const isEven = index % 2 === 0;

  return (
    <a
      href={"/post/" + id}
      className={`card lg:card-side bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] ${
        isEven ? "lg:flex-row-reverse" : ""
      }`}
      key={id}
    >
      <figure className="md:1/2 flex items-center justify-center ? ">
        <img src={cover} alt="Movie" className="w-full h-64 object-cover" />
      </figure>

      <div className="card-body p-6 md:1/2 flex flex-col justify-between">
        <h2 className="card-title">{title}</h2>

        <p>
          {author} | {createdAt}{" "}
        </p>

        <p>{summary}</p>
      </div>
    </a>
  );
};

export default Post;
