import { FaCalendarDay } from "react-icons/fa6"

const Avatar = ({username = ""}) => {
    return (
        <section className="flex justify-between items-center py-2">
            <h5 className="font-bold text-3xl">Hello, {username}</h5>
            <div className="flex items-center justify-center gap-2">
                <span className="text-sm text-gray-500">26 February, 2024</span>
                <div className="bg-gray-200 p-2 rounded-full">
                    <FaCalendarDay size={20} />
                </div>
            </div>
        </section>
    )
}

export default Avatar