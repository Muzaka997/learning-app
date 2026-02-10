import axios from "axios";
import config from "../../config";

const contactApi = axios.create({ baseURL: config.apiBaseURL });

// Always include credentials (cookies) if present and attach Bearer token from localStorage
contactApi.defaults.withCredentials = true;
contactApi.interceptors.request.use((req) => {
  try {
    const token = localStorage.getItem("token");
    if (token) {
      req.headers = req.headers || {};
      req.headers["Authorization"] = `Bearer ${token}`;
    }
  } catch {}
  return req;
});

export const sendContactMessage = async (data: {
  name: string;
  email: string;
  message: string;
}) => {
  return contactApi.post("/contact", data);
};

export default contactApi;
