import { useState } from "react"
import { Link, Navigate } from "react-router"

const LoginPage = () => {
    const [isLoading, setIsLoading] = useState(false)

    const onSubmit = () => {
        setIsLoading(true)
        return <Navigate to={`/dashboard`} />
    }
    return (
        <div className="border rounded-lg border-blue-300 bg-white p-10 max-w-2xl">
            <div className="flex flex-col items-center justify-center gap-1 mb-5">
                <h1 className="text-center font-bold text-2xl">Hello Again</h1>
                <span className="text-center font-light text-sm">Please fill the fields below to continue the app</span>
            </div>
            <form onSubmit={onSubmit} className="flex flex-col justify-center gap-3">
                <div>
                    <label htmlFor="username" className="font-light">Email</label>
                    <input type="text" id="username" className="w-full rounded-md border border-slate-500 focus:border-blue-200 p-2" autoComplete="off" disabled={isLoading} />
                    {/* {formState.errors.username && (
                        <p className="text-red-500 italic text-xs">{formState.errors.username.message}</p>
                    )} */}
                </div>
                <div>
                    <label htmlFor="password" className="font-light">Password</label>
                    <input type="password" id="password" className="w-full rounded-md border border-slate-500 focus:border-blue-200 p-2" disabled={isLoading} />
                    {/* {formState.errors.password && (
                        <p className="text-red-500 italic text-xs">{formState.errors.password.message}</p>
                    )} */}
                </div>
                <button type="submit" disabled={isLoading} className="mt-4 w-full p-3 disabled:bg-blue-400 disabled:text-blue-100 transition-all duration-200 rounded-md hover:shadow-md bg-blue-500 text-blue-50 font-semibold cursor-pointer disabled:cursor-progress">Sign in</button>
                <p className="text-sm text-center">Already have an account? <Link to="/register" className="text-blue-500 hover:underline">Sign up</Link></p>
            </form>
        </div>
    )
}

export default LoginPage