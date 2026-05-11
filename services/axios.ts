import axios from "axios"

export const axiosInstant = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
})