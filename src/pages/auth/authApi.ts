import axios from "axios";
import config from "../../config";

const authApi = axios.create({
  baseURL: config.apiBaseURL,
});

export default authApi;
