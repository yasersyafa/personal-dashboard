import Banner from "../../../components/Banner"

const ProjectListPage = () => {
    return (
        <div className="">
            <h1 className="">Keep track your project so you can make a portfolio here</h1>
            <div className="p-2 mt-12">
                <Banner total={5} path="/dashboard/projects/create" />
            </div>
        </div>
    )
}

export default ProjectListPage