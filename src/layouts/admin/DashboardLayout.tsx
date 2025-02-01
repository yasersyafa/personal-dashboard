import { Outlet } from "react-router"
import Sidebar from "./components/Sidebar"
import Avatar from "./components/Avatar"


const DashboardLayout = () => {
    return (
        <div className="flex w-full border-white border">
            <Sidebar />
            <main className="absolute left-56 top-4 bottom-4 right-4 bg-[#F5F5F5] rounded-xl py-4 px-10">
                <Avatar username="Yaser Syafa" />
                <Outlet />
            </main>
        </div>
    )
}

export default DashboardLayout