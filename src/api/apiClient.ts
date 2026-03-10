import axios from 'axios'

const baseURL = "http://localhost:8001/api"

const apiClient = axios.create({
    headers:{
        "Content-Type":"application/json"
    },
    baseURL
})

export default apiClient