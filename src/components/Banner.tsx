import CountUp from "react-countup"
import { FaPlus, FaRegFolderOpen } from "react-icons/fa6"
import { Link } from "react-router"

const Banner = () => {
    return (
        <div className="rounded-lg bg-slate-50 border border-blue-100 text-blue-500 py-6 px-10">
            <div className="flex justify-between items-center">
                <div className="flex flex-col gap-2">
                    {/* title */}
                    <h1 className="text-sm">Total Projects</h1>
                    <div className="flex items-center gap-5">
                        <div className="p-2 rounded-full bg-white border border-blue-300">
                            <FaRegFolderOpen className="text-blue-500 text-2xl" />
                        </div>
                        <CountUp start={0} end={500} duration={2} className="text-3xl font-bold" />
                    </div>
                </div>
                <div className="flex gap-3 items-center">
                    <Link to="/dashbord/projects/create" className="py-2 px-5 bg-blue-500 rounded-lg text-blue-50 flex items-center gap-2">
                        <FaPlus size={14} />
                        <span>Add</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Banner