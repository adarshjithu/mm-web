import toast from "react-hot-toast";
import BASE_URL, { errorHandler } from "./baseUrl";

export const login = async (credentials: { email: string; password: string }) => {
    try {
        const response = await BASE_URL.post("/auth/signin", credentials);
        return response;
    } catch (error) {
        const message = errorHandler(error);
        toast.error(message);
        throw new Error(message);
    }
};
