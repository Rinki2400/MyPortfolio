import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:2000/api",
});

// If future requests need authorization token:
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default API;
