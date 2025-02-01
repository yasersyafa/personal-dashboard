import { FaGear, FaChartPie, FaFolderOpen, FaNoteSticky } from "react-icons/fa6";

export const menuConfig = [
    {
        path: '/dashboard',
        label: 'Dashboard',
        icon: FaChartPie
    },
    {
        path: '/dashboard/projects',
        label: 'Projects',
        icon: FaFolderOpen
    },
    {
        path: '/dashboard/notes',
        label: 'Notes',
        icon: FaNoteSticky
    },
    {
        path: '/dashboard/settings',
        label: 'Settings',
        icon: FaGear
    }
]