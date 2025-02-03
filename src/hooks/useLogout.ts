import Swal from 'sweetalert2'
import { useNavigate } from 'react-router'
const useLogout = () => {
    const navigate = useNavigate()
    const logout = () => {
        Swal.fire({
            title: "Are you sure",
            text: "Your data will save",
            icon: "question",
            showCancelButton: true,
            showConfirmButton: true,
            confirmButtonText: "Yes"
        })
        .then((result) => {
            if(result.isConfirmed) {
                localStorage.removeItem("token")
                navigate("/")
            }
        })
    }

    return {logout}
}

export default useLogout