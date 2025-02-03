import { useMutation } from '@tanstack/react-query'
import AxiosInstance from '../plugins/Axios'

interface LoginRequest {
    email: string,
    password: string
}

interface LoginResponse {
    message: string,
    data: {
        uuid: string,
        email: string,
        name: string
    },
    token: string
}

const useLogin = () => {
    return useMutation<LoginResponse, Error, LoginRequest>({
        mutationFn: async (credentials) => {
            const response = await AxiosInstance.post<LoginResponse>(`/login`, credentials)
            return response.data
        },
    })
}

export default useLogin