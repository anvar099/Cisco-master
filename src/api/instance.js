import axios from "axios";
const instance = axios.create({
  baseURL: "/api",
  withCredentials: true,
  headers: {
    authorization: `Bearer ${localStorage.token}`,
  },
});

axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.withCredentials = true;
axios.defaults.crossDomain = true;

export default instance;
