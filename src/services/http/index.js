import { axiosinstance } from "../interceptors";

export const login = (data) => {
 return axiosinstance.post("auth/login",data);
};

export const getposts = (data) => {
    return axiosinstance.get("users");
 };


