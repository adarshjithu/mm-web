import axios from "axios";

const BASE_URL = axios.create({
  baseURL: "http://localhost:3000/v1",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
});

// Example: attaching token dynamically
BASE_URL.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken"); // or from cookies
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default BASE_URL;



export const errorHandler = (error: any) => {
    if (axios.isAxiosError(error)) {
        const axiosError = error;
        if (axiosError?.response?.data?.message) {
            return axiosError?.response?.data?.message
        }
    }

    return "An enexpected error occured" as string
};
