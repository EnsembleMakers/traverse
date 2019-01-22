import axios from 'axios';
import { authHeader } from '../helpers';

require('dotenv').config();

export const userService = {
  login,
  logout,
  register,
  getAll,
  update,
  delete: _delete,
};

async function login(email, password) {
  return axios.post('/auth/login', { email, password });
}
async function logout() {
  return axios.get('/auth/logout');
}
async function register(user) {
  return axios.post('/auth/register', user);
}
async function getAll() {
  return axios.get('/api/users');
}
async function update(id) {
  return axios.patch(`/api/${id}`);
}
async function _delete(id) {
  return axios.delete(`/api/${id}`);
}
