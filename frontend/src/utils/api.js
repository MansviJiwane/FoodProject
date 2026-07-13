import axios from "axios";
import qs from "qs";

const api = axios.create({
  baseURL: "http://localhost:4000/api",
  withCredentials: true,
  paramsSerializer: (params) =>
    qs.stringify(params, { arrayFormat: "repeat" }),
});

console.log(api.defaults.baseURL); // ✅ yahan niche

export default api;