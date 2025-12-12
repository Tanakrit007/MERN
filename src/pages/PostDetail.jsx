import React from "react";
import { useState } from "react";
import dompurify from "daisyui";

const PostDetail = () => {
  const [post, setPost] = useState({
    id: 1,
    title: "Sample Post Title",
    cover: " ",
    author: "Author Name",
    createdAt: "2024-06-01",
    summary:
      "This is the detailed content of the sample post.</p><p>It can include <strong>HTML</strong> formatting.",
  });
  return (
    <div className="card lg:card-side bg-base-100 shadow-sm">
      <div className="card-body">
        <h2 className="card-title">{post.title}</h2>
        <p>{post.createdAt}</p>
        <p>By {post.author}</p>
        <div
          className="content text-gray-700"
          dangeterouslySetInnerHTML={{
            __html: dompurify.sanitize(post.content),
          }}
        ></div>
      </div>
    </div>
  );
};

export default PostDetail;
