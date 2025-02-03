import { Link } from "react-router"
import { menuConfig } from "../../../config/MenuConfig"
import { FaPowerOff } from "react-icons/fa6"
import useLogout from "../../../hooks/useLogout"

const Sidebar = () => {
    const { logout } = useLogout()
    return (
        <aside className="w-56 bg-white fixed left-0 top-0 bottom-0 p-4">
            {/* Title */}
            <h1 className="text-2xl font-bold text-center py-5 rounded-lg text-blue-500 bg-blue-100">Archive Board</h1>
            <div className="flex flex-col justify-between h-full pb-24">
                <ul className="flex flex-col gap-1 justify-center items-start mt-16">
                {menuConfig.map(
                        (item) => {
                            const Icon = item.icon
                            return (
                                <Link key={item.path} to={item.path} className="w-full p-2 rounded-md flex items-center hover:bg-blue-500 group">
                                    <Icon className={`group-hover:text-blue-500 group-hover:bg-blue-200 rounded-sm w-10 h-10 p-2`} />
                                    <span className="ms-3 font-medium group-hover:text-white">{item.label}</span>
                                </Link>
                            )
                        }
                    )} 
                </ul>
                <button type="button" className="w-full p-2 rounded-md flex items-center hover:bg-red-100 hover:shadow-lg group" onClick={logout}>
                    <FaPowerOff className="w-10 h-10 p-2 text-red-500 rounded-sm" />
                    <span className="ms-3 font-medium group-hover:text-red-500">Log out</span>
                </button>
            </div>
        </aside>
    )
}

export default Sidebar