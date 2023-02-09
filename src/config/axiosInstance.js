import axios from "axios";


const baseURL = 'http://159.65.142.42/api/branches'

const headers = {
    'Content-Type': 'application/json',
}

const axiosInstance = axios.create({
    baseURL,
    headers,
})
