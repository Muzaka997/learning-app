import axios from "axios";

const authApi = axios.create({
  baseURL: "https://devcamper-api-i20h.onrender.com/api/v1",
});

export default authApi;
