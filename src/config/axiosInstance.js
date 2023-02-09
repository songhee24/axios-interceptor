import axios from "axios";
import {baseURL} from "../constants/general";



const headers = {
    'Content-Type': 'application/json',
}

const axiosInstance = axios.create({
    baseURL,
    headers,
})

axiosInstance.interceptors.request.use(
    (config) => {
        const updatedConfig = { ...config }
        // need to get token from store
        // const token = authState.getState().auth.token
        const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJyb2xlIjoiQURNSU4iLCJwaG9uZU51bWJlciI6Iig2MjkpIDU1NS0wMTI5IiwiZXhwIjoxNjc2NzMyNjU0LCJpYXQiOjE2NzU4Njg2NTQsImVtYWlsIjoiYWRtaW5AZ21haWwuY29tIn0.Sz63OlUjRwm0kzmXkd5txAEbELqZ5PtLlerejPE3DdCDUmiukyAfh-vpODwzb0hsyExLzznlvg1kCOiailZLYA'
        if(token) {
            updatedConfig.headers.Authorization = `Bearer ${token}`
            return updatedConfig
        }
    },

    (error) => {
        return Promise.reject(error)
    }
)

axiosInstance.interceptors.response.use(
    (response) => {
        return Promise.resolve(response)
    },
    (error) => {
        if (error.response?.status === 401) {
            // we also can check is that response contains 401 error
            // we need to remove old token and logout
            // removeItemFromStorage(JWT_TOKEN_KEY)
            throw new Error('401 unauthotized')
        }
        return Promise.reject(error)
    }
)

export default axiosInstance
