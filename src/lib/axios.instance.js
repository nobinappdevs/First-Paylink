// Import Packages
import axios from "axios";


const apiURL = process.env.NEXT_PUBLIC_base_url;
const appVersion = process.env.NEXT_PUBLIC_version;


// API Client Base (axios) with version
export const apiInstance = axios.create({
    baseURL: `${apiURL}/${appVersion}`,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});



// apiInstance.interceptors.request.use(
//   (config) => {
//     const token =
//       localStorage.getItem("authToken") ||
//       sessionStorage.getItem("authToken");

//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }

//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// apiInstance.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response?.status === 401) {
//       localStorage.removeItem("authToken");
//       sessionStorage.removeItem("authToken");
//     }

//     return Promise.reject(error);
//   }
// );