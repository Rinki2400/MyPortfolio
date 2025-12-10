import API from "./axios";

export const loginAdmin = (data) => API.post("/auth/login", data);
