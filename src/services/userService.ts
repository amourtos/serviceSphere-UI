import {ISignUp} from "../interfaces/ISignUp.ts";
import axios, {AxiosInstance} from "axios"

// bae url
const localBaseURL = import.meta.env.VITE_API_URL_LOCAL
const rootPath = "/user"
// path extensions
const paths = JSON.parse(import.meta.env.VITE_API_USER_PATHS)
const apiService: AxiosInstance = axios.create({
    baseURL: localBaseURL
})

export const userService =
{
    createUser: async (userData: ISignUp): Promise<any> => {
        try {
            const response = await apiService.post(`${rootPath}${paths.create}`, userData)
            return response.data;
        } catch (error) {
            console.error(error);
        }
    }
}