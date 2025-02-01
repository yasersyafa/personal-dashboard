import Card from "../../components/Card"
import { FaRegFolderOpen } from "react-icons/fa";
import { FaRegNoteSticky } from "react-icons/fa6";
import { RiTodoLine } from "react-icons/ri";

const DashboardPage = () => {
    return (
        <div>
            <h1>Organize your project, task, and notes in one app</h1>
            <div className="py-2 mt-12 grid grid-cols-3 gap-5">
                {/* Project */}
                <Card title="Number of Projects" count={500} icon={FaRegFolderOpen} />
                <Card title="Number of Task" count={150} icon={RiTodoLine} />
                <Card title="Number of Notes" count={5000} icon={FaRegNoteSticky} />
            </div>
            <div className="py-2 mt-5 grid grid-cols-3 gap-5">
                
            </div>
        </div>
    )
}

export default DashboardPage