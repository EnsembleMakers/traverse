import axios from 'axios';
import { authHeader } from '../helpers';
require('dotenv').config();

export const portionService = {
  register,
  registerById,
  getPortion,
  getPortionList,
  update,
  delete: _delete,
};

async function register(portion) {
  return await axios.post('/api/portions', portion);
}
async function registerById(post_id, portion) {
  return await axios.post(`/api/portions/${post_id}`, portion);
}
async function getPortion(id) {
  return await axios.get(`/api/portions/${id}`);
}
async function getPortionList() {
  return await axios.get('/api/portions');
}
async function update(portion) {
  return await axios.patch(`/api/portions/${portion._id}`, portion);
}
async function _delete(id) {
  return await axios.delete(`/api/portions/${id}`);
}

