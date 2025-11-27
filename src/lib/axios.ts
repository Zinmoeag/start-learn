import axios from "axios";
import type {AxiosError, AxiosInstance, AxiosRequestConfig} from "axios";

export const baseURL = import.meta.env.VITE_API_ENDPOINT;
interface AuthRequestConfig extends AxiosRequestConfig {
  _retry?: boolean;
}

const api: AxiosInstance = axios.create({
  baseURL,
  timeout: 3 * 60 * 1000, // 3 minutes
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// const { logout, setAccessToken} = useAuthStore.getState();

// api.interceptors.request.use(
//   config => {
//     const token = getAccessToken();

//     if (token?.trim().length) {
//       config.headers = config.headers || {};
//       config.headers.Authorization = `Bearer ${token}`;
//     }

//     return config;
//   },
//   (error: AxiosError) => Promise.reject(error)
// );

// api.interceptors.response.use(
//   response => response,

//   async (error: AxiosError) => {
//     const originalRequest = error.config as AuthRequestConfig;

//     if (error.response?.status === 401) {
//       originalRequest._retry = true;
//       const refreshToken = getRefreshToken()?.trim();
//       if (!refreshToken) {
//         logout()
//         return Promise.reject(error);
//       }

//       try {
//         const { data: refreshData } = await axios.post("/auth/refresh-token", {
//           refreshToken,
//         }, {
//           baseURL,
//           'withCredentials': true
//         });

//         const newAccessToken = refreshData?.result?.accessToken;
//         const newRefreshToken = refreshData?.result?.refreshToken;

//         setAccessToken(newAccessToken, newRefreshToken);

//         originalRequest.headers = {
//           ...originalRequest.headers,
//           Authorization: `Bearer ${newAccessToken}`,
//         };
//         return api(originalRequest);
//       } catch (refreshError) {
//         logout();
//         return Promise.reject(refreshError);
//       }
//     }

//     return Promise.reject(error);
//   }
// );

export default api;