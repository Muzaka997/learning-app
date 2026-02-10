import axios from "axios";
import config from "../../config";

const contactApi = axios.create({ baseURL: config.apiBaseURL });

// This endpoint is public; do NOT send cookies or auth headers to avoid CORS credential requirements
// If you later secure it, prefer using the existing authApi instead of modifying this client

export const sendContactMessage = async (data: {
  name: string;
  email: string;
  message: string;
}) => {
  return contactApi.post("/contact", data);
};

export default contactApi;
