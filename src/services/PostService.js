import API from '../api/api';

const URL_POSTS = '/posts';

const getPosts = async (limit = 10, page = 0) => {
  const response = await API.get(`${URL_POSTS}?_limit=${limit}&_page=${page}`);
  if (response.error) {
    throw new Error('an error occurred');
  }
  return response;
};

const getPost = async (id) => {
  const response = await API.get(`${URL_POSTS}/${id}`);
  if (response.error) {
    throw new Error('an error occurred');
  }
  return response;
};

const addPost = async (post) => {
  const response = await API.post(`${URL_POSTS}`, post);
  if (response.error) {
    throw new Error('an error occurred');
  }
  return response;
};

const updatePost = async (post) => {
  const response = await API.put(`${URL_POSTS}/${post.id}`, post);
  if (response.error) {
    throw new Error('an error occurred');
  }
  return response;
};

const deletePost = async (id) => {
  const response = await API.delete(`${URL_POSTS}/${id}`);
  if (response.error) {
    throw new Error('an error occurred');
  }
  return response;
};

export default {
  getPosts,
  getPost,
  addPost,
  updatePost,
  deletePost,
};
