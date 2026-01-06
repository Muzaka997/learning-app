import axios from "axios";

const authApi = axios.create({
  baseURL: "http://localhost:5001/api/v1",
  withCredentials: true, // 👈 REQUIRED for cookies
});

export default authApi;
