import { authHeader } from '../helpers';
import axios from 'axios';
require('dotenv').config();

export const portionService = {
  register,
  getPortion,
  list,
  update,
  delete: _delete
};

async function register(portion) {
  return await axios.post(`/api/portions`, portion);
}
async function getPortion(id) {
  return await axios.get(`/api/portions/${id}`);
}
async function list() {
  return await axios.get(`/api/portions`);
}
async function update(portion) {
  return await axios.patch(`/api/portions/${portion._id}`, portion);
}
async function _delete(id) {
  return await axios.delete(`/api/portions/${id}`);
}

