import { authHeader } from '../helpers';
import axios from 'axios';
require('dotenv').config();

export const userService = {
    login,
    logout,
    register,
    getAll,
    update,
    delete: _delete
};

async function login(email, password) {
  return await axios.post(`/auth/login`, { email, password });
}
async function logout() {
  return await axios.get(`/auth/logout`);
}
async function register(user) {
  return await axios.post(`/auth/register`, user);
}
async function getAll() {
  return await axios.get(`/api/users`);
}
async function update(id) {
  return await axios.patch(`/api/${id}`);
}
async function _delete(id) {
  return await axios.delete(`/api/${id}`);
}
