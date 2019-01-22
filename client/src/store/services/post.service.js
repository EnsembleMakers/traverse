import axios from 'axios';
import { authHeader } from '../helpers';
require('dotenv').config();

export const postService = {
  register,
  getPost,
  getPostList,
  update,
  delete: _delete,
};

async function register(post) {
  return await axios.post('/api/posts', post);
}
async function getPost(id) {
  return await axios.get(`/api/posts/${id}`);
}
async function getPostList() {
  return await axios.get('/api/posts');
}
async function update(post) {
  return await axios.patch(`/api/posts/${post._id}`, post);
}
async function _delete(id) {
  return await axios.delete(`/api/posts/${id}`);
}
