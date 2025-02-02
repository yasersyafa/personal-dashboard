import { Outlet } from "react-router"

const AuthLayout = () => {
    return (
        <div className="w-full h-full min-h-screen flex items-center bg-slate-50 justify-center">
            <Outlet />
        </div>
    )
}

export default AuthLayout