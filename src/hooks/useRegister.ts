import { useMutation } from "@tanstack/react-query"
import AxiosInstance from "../plugins/Axios"

interface RegisterRequest {
    name: string,
    email: string,
    password: string,
    passwordConf: string
}

interface RegisterResponse {
    name: string,
    email: string
}

const useRegister = () => {
    return useMutation<RegisterResponse, Error, RegisterRequest>({
        mutationFn: async (credentials) => {
            const response = await AxiosInstance.post(`/register`, credentials)
            return response.data
        }
    })
}

export default useRegister