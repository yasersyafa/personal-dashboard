import { Link, useNavigate } from "react-router"
import { Bounce, toast } from 'react-toastify'
import useLogin from "../../hooks/useLogin"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const loginFormSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8)
})

type LoginFormSchema = z.infer<typeof loginFormSchema>

const LoginPage = () => {
    const navigate = useNavigate()
    const { register, handleSubmit, formState } = useForm<LoginFormSchema>({
        resolver: zodResolver(loginFormSchema)
    })

    const loginMutation = useLogin()

    const onSubmit = handleSubmit(async (data) => {
        loginMutation.mutate(data, {
            onSuccess: (response) => {
                localStorage.setItem("token", response.token)
                navigate("/dashboard")
            },
            onError: () => toast.error('Invalid credentials', {
                position: "bottom-right",
                closeOnClick: true,
                pauseOnHover: true,
                transition: Bounce
            })
        })
    })
    return (
        <div className="border rounded-lg border-blue-300 bg-white p-10 max-w-2xl">
            <div className="flex flex-col items-center justify-center gap-1 mb-5">
                <h1 className="text-center font-bold text-2xl">Hello Again</h1>
                <span className="text-center font-light text-sm">Please fill the fields below to continue the app</span>
            </div>
            <form onSubmit={onSubmit} className="flex flex-col justify-center gap-3">
                <div>
                    <label htmlFor="email" className="font-light">Email</label>
                    <input type="text" id="email" className="w-full rounded-md border border-slate-500 focus:border-blue-200 p-2" autoComplete="off" {...register("email")} disabled={loginMutation.isPending} />
                    {formState.errors.email && (
                        <p className="text-red-500 italic text-xs">{formState.errors.email.message}</p>
                    )}
                </div>
                <div>
                    <label htmlFor="password" className="font-light">Password</label>
                    <input type="password" id="password" className="w-full rounded-md border border-slate-500 focus:border-blue-200 p-2" {...register("password")} disabled={loginMutation.isPending} />
                    {formState.errors.password && (
                        <p className="text-red-500 italic text-xs">{formState.errors.password.message}</p>
                    )}
                </div>
                <button type="submit" disabled={loginMutation.isPending} className="mt-4 w-full p-3 disabled:bg-blue-400 disabled:text-blue-100 transition-all duration-200 rounded-md hover:shadow-md bg-blue-500 text-blue-50 font-semibold cursor-pointer disabled:cursor-progress">{loginMutation.isPending ? 'Signing in...' : 'Sign in'}</button>
                <p className="text-sm text-center">Already have an account? <Link to="/register" className="text-blue-500 hover:underline">Sign up</Link></p>
            </form>
        </div>
    )
}

export default LoginPage