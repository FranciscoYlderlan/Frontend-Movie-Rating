import axios from "axios";

export const api = axios.create({
    baseURL:"https://movie-rating-api-7gn1.onrender.com"
    // baseURL: 'http://localhost:8000'
})