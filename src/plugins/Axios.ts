import axios from 'axios'

const AxiosInstance = axios.create({
    baseURL: import.meta.env.REACT_APP_API_URL ?? 'http://localhost:8000/api/v1',
    headers: {
        "Content-Type": "application/json"
    }
})

export default AxiosInstance