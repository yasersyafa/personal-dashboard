import { createBrowserRouter } from "react-router"
import HomePage from "../pages/home/HomePage"
import DashboardLayout from "../layouts/admin/DashboardLayout"
import DashboardPage from "../pages/admin/DashboardPage"
import ProjectListPage from "../pages/admin/projects/ProjectListPage"
import RegisterPage from "../pages/auth/RegisterPage"
import AuthLayout from "../layouts/auth/AuthLayout"
import LoginPage from "../pages/auth/LoginPage"


export const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: '/dashboard',
        element: <DashboardLayout />,
        children: [
            {
                path: '',
                element: <DashboardPage />
            },
            {
                path: 'projects',
                element: <ProjectListPage />
            }
        ]
    },
    {
        path: '/',
        element: <AuthLayout />,
        children: [
            {
                path: 'register',
                element: <RegisterPage />
            },
            {
                path: 'login',
                element: <LoginPage />
            }
        ]
    },
    {
        path: '/register',
        element: <RegisterPage />
    },
    {
        path: '*',
        element: <>Not Found</>
    }
])