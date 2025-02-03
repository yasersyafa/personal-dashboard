import { useState, useEffect } from "react"
import AxiosInstance from "../plugins/Axios"

const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(() => {
        const token = localStorage.getItem("token")
        if(token) {
            AxiosInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`
            setIsAuthenticated(true)
        }
        else {
            setIsAuthenticated(false)
        }
    }, [])

    return {isAuthenticated}
}

export default useAuth