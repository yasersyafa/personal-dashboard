import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Link, useNavigate } from "react-router"
import useRegister from "../../hooks/useRegister"
import { toast } from "react-toastify"

const registerFormSchema = z.object({
    name: z.string().min(3, 'Username must contain least 3 characters'),
    email: z.string().email('Email invalid'),
    password: z.string().min(8, 'Password must contain at least 8 characters'),
    passwordConf: z.string().min(8)
}).refine((data) => data.password === data.passwordConf, {
    message: 'Password confirmation did not match',
    path: ["passwordConf"]
})

type TRegisterFormSchema = z.infer<typeof registerFormSchema>

const RegisterPage = () => {
    
    const registerMutation = useRegister()
    const navigate = useNavigate()

    const { register, handleSubmit, formState } = useForm<TRegisterFormSchema>({
        resolver: zodResolver(registerFormSchema)
    })

    const onSubmit = handleSubmit(async (data) => {
        registerMutation.mutate(data, {
            onSuccess: () => {
                toast.success('Create account successfully')
                navigate('/login')
            },
            onError: () => {
                toast.error('Create account failed')
            }
        })
    })

    return (
        <div className="border rounded-lg border-blue-300 bg-white p-10 max-w-2xl">
            {/* title of forms */}
            <div className="flex flex-col items-center justify-center gap-1 mb-5">
                <h1 className="text-center font-bold text-2xl">Create Account</h1>
                <span className="text-center font-light text-sm">Please fill the fields below</span>
            </div>
            <form onSubmit={onSubmit} className="flex flex-col justify-center gap-3">
                <div>
                    <label htmlFor="username" className="font-light">Username</label>
                    <input type="text" id="username" className="w-full rounded-md border border-slate-500 focus:border-blue-200 p-2" autoComplete="off" {...register("name")} disabled={registerMutation.isPending} />
                    {formState.errors.name && (
                        <p className="text-red-500 italic text-xs">{formState.errors.name.message}</p>
                    )}
                </div>
                <div>
                    <label htmlFor="email" className="font-light">Email</label>
                    <input type="text" id="email" className="w-full rounded-md border border-slate-500 in-focus:border-blue-200 focus:border-blue-200 p-2" autoComplete="email" {...register("email")} disabled={registerMutation.isPending} />
                    {formState.errors.email && (
                        <p className="text-red-500 italic text-xs">{formState.errors.email.message}</p>
                    )}
                </div>
                <div>
                    <label htmlFor="password" className="font-light">Password</label>
                    <input type="password" id="password" className="w-full rounded-md border border-slate-500 focus:border-blue-200 p-2" {...register("password")} disabled={registerMutation.isPending} />
                    {formState.errors.password && (
                        <p className="text-red-500 italic text-xs">{formState.errors.password.message}</p>
                    )}
                </div>
                <div>
                    <label htmlFor="passwordConf" className="font-light">Confirm Password</label>
                    <input type="password" id="passwordConf" className="w-full rounded-md border border-slate-500 focus:border-blue-200 p-2" {...register("passwordConf")} disabled={registerMutation.isPending} />
                    {formState.errors.passwordConf && (
                        <p className="text-red-500 italic text-xs">{formState.errors.passwordConf.message}</p>
                    )}
                </div>
                <button type="submit" disabled={registerMutation.isPending} className="mt-4 w-full p-3 disabled:bg-blue-400 disabled:text-blue-100 transition-all duration-200 rounded-md hover:shadow-md bg-blue-500 text-blue-50 font-semibold cursor-pointer disabled:cursor-progress">Sign in</button>
                <p className="text-sm text-center">Already have an account? <Link to="/login" className="text-blue-500 hover:underline">Sign in</Link></p>
            </form>
        </div>
    )
}

export default RegisterPage