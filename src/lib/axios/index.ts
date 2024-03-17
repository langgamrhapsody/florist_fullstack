import axios from "axios";
import { getJWT } from "../../utils/helpers/helpers";

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
  (config) => {
    const token = getJWT();
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
