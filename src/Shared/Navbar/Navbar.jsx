import { useContext } from "react";
import { Link, useNavigate, } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Navbar = () => {
    const { user, logOut, role } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleLogout = () => {
        logOut()
            .then(result => {
                if(result){
                    toast.success('Logged out')
                    navigate('/')
                }
            })
            .catch(error => {
                if(error){
                    toast.error('Opps!! Something Went Wrong')
                }
            })
    }
    return (
        <div className={`flex justify-between sticky top-0 z-10 w-full container mx-auto items-center bg-blue-600 shadow md:px-8 py-2 md:py-3`}>
            <div>
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost text-white md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow bg-base-100 rounded-box w-52 font-semibold text-lg">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/instructors'>Instructors</Link></li>
                        <li><Link to='/classes'>Classes </Link></li>
                        <li><Link to={`/DashBoard/${role}-home`}>DashBoard </Link></li>
                    </ul>
                </div>
                <Link to="/" className="text-2xl md:text-4xl font-semibold text-white">Accent Adept</Link>
            </div>

            <div className="md:flex hidden">
                <ul className="space-x-5 menu-horizontal items-center font-semibold text-white text-base px-4">
                    <li className="rounded px-3 py-2 hover:text-[#6B6FF7] hover:bg-white"><Link to='/'>Home</Link></li>
                    <li className="rounded px-3 py-2 hover:text-[#6B6FF7] hover:bg-white"><Link to='/instructors'>Instructors</Link></li>
                    <li className="rounded px-3 py-2 hover:text-[#6B6FF7] hover:bg-white"><Link to='/classes'>Classes</Link></li>
                    <li className="rounded px-3 py-2 hover:text-[#6B6FF7] hover:bg-white"><Link to={`/DashBoard/${role}-home`}>DashBoard</Link></li>
                    {
                        user ? <>
                            <img className="w-12 h-12 rounded-full border-4" src={user.photoURL} alt="profile" title={user.displayName} />
                            <button onClick={handleLogout} className="border-2 px-5 p-2 bg-white text-blue-600 rounded font-medium">Logout</button>
                        </>
                            :
                            <li><Link to='/login' className="border-2 px-5 p-2 hover:bg-white rounded font-medium hover:text-[#6B6FF7] text-white">Login</Link></li>
                    }
                </ul>
            </div>
            {user ?
                <>
                    <img className="w-12 h-12 rounded-full md:hidden ml-auto border-4" src={user.photoURL} alt="profile" title={user.displayName} />
                    <button onClick={handleLogout} className="md:border-2 px-4 md:px-5 md:hidden py-2 bg-white text-blue-600 rounded font-medium mx-2">Logout</button>
                </>
                :
                <Link to="/login" className="border-2 px-3 py-1 hover:bg-white rounded font-medium hover:text-[#6B6FF7] text-white md:hidden mr-4">Login</Link>
            }
        </div>
    );
};

export default Navbar;
