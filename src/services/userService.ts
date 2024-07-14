import { AxiosInstance } from "axios";
import http from "../lib/axios/http";

// Get All User Service:
export const getAllUsers = async () => {
    try {
        const res = await http.get("/user/get-all-users");
        return res;
    } catch (error) {
        console.log(error);
    }
};

// Get All User Service:
export const getSuggestedUsers = async (privateHttp: AxiosInstance) => {
    try {
        const res = await privateHttp.get("/user/get-suggested-users");
        return res;
    } catch (error) {
        console.log(error);
    }
};
