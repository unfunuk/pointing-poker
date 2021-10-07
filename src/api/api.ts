import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://damp-eyrie-94079.herokuapp.com/api",
  timeout: 5000,
});
export default axiosInstance;
