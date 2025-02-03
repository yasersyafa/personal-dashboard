import { Link } from "react-router"

const Navbar = () => {
    return (
        <nav className="top-0 left-0 right-0 sticky flex justify-between items-center px-20 py-5 border-b">
            {/* logo */}
            <Link to="/" className="font-bold text-2xl text-blue-500">Archive Dashboard</Link>
            {/* item links */}
            {/* login button */}
            <div className="flex items-center justify-center gap-4">
                <Link to="/login" className="text-sm hover:underline">Sign in</Link>
                <hr />
                <Link to="/register" className="py-2 px-5 rounded-lg bg-blue-500 text-white hover:shadow-lg">Sign up</Link>
            </div>
        </nav>
    )
}

export default Navbar