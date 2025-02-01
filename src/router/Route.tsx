import { createBrowserRouter } from "react-router"
import HomePage from "../pages/home/HomePage"
import DashboardLayout from "../layouts/admin/DashboardLayout"
import DashboardPage from "../pages/admin/DashboardPage"
import ProjectListPage from "../pages/admin/projects/ProjectListPage"


export const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />
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
    }
])