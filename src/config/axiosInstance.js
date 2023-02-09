import axios from "axios";


const baseURL = 'http://159.65.142.42/api/branches'

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
        }
    }
)
