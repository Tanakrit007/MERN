import api from "./api.js";
const API_URL = import.meta.env.VITE_POST_URL;

const getAllPosts = async () => {
  return await api.get(`${API_URL}`);
};
const getPostById = async (id) => {
  return await api.get(`${API_URL}/${id}`);
};
const getByAuthorId = async (id) => {
  return await api.get(`${API_URL}/author/${id}`);
};
const createPost = async (posts) => {
  return await api.post(`${API_URL}/create`, posts,{
    headers: {
      ""
    }
  });
};
const updatePost = async (id, post) => {
  return await api.put(`${API_URL}/${id}`, post);
};
const deletePost = async (id) => {
  return await api.delete(`${API_URL}/${id}`);
};

const postService = {
  getAllPosts,
  getPostById,
  getByAuthorId,
  createPost,
  updatePost,
  deletePost,
};

export default postService;
