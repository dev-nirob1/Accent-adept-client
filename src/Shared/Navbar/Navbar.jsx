import { useContext } from "react";
import { Link, NavLink, useNavigate, } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { FaCartArrowDown } from "react-icons/fa";

const Navbar = () => {
    const { user, logOut, role } = useContext(AuthContext)
    console.log(role)
    const navigate = useNavigate()
    const handleLogout = () => {
        logOut()
            .then(result => {
                if (result) {
                    toast.success('Logged out')
                    navigate('/')
                }
            })
            .catch(error => {
                if (error) {
                    toast.error('Opps!! Something Went Wrong')
                }
            })
    }
    return (
        <div className={`flex justify-between sticky top-0 z-10 w-full container mx-auto items-center bg-gradient-to-b from-[#16697a] to-[#1b7d90]  md:px-8 py-1`}>
            <div className="flex items-center">
                <div className="dropdown h-full">
                    <label tabIndex={0} className="btn btn-ghost text-white md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu text-white menu-sm dropdown-content  bg-gradient-to-b from-[#16697a] to-[#1b7d90] mt-1 z-[1] p-3 shadow w-52 rounded font-semibold text-lg">
                        <li><NavLink className="py-2 m-0" to='/'>Home</NavLink></li>
                        <li><NavLink className="py-2 m-0" to='/instructors'>Instructors</NavLink></li>
                        <li><NavLink className="py-2 m-0" to='/classes'>Classes </NavLink></li>

                        {!role && <li><NavLink className="py-2 m-0" to='/dashboard/students-home'>Classes </NavLink></li>}
                        {role === 'instructor' && <li><NavLink className="py-2 m-0" to='/dashboard/instructor-home'>Classes </NavLink></li>}
                        {role === 'admin' && <li><NavLink className="py-2 m-0" to='/dashboard/admin-home'>Classes </NavLink></li>}

                        <li><NavLink className="py-2 m-0" to='/DashBoard/selected-class'><FaCartArrowDown /> </NavLink></li>
                        
                        {!role && <li><NavLink className="rounded px-3 py-2" to='/dashboard/students-home'>Dashboard </NavLink></li>}
                        {role === 'instructor' && <li><NavLink className="rounded px-3 py-2" to='/dashboard/instructor-home'>Dashboard </NavLink></li>}
                        {role === 'admin' && <li><NavLink className="rounded px-3 py-2" to='/dashboard/admin-home'>Dashboard </NavLink></li>}
                    </ul>
                </div>
                <Link to="/" className="text-2xl md:text-4xl font-semibold text-white">
                    <img className="h-14 w-32" src="weblogo_prev_ui.png" alt="logo" />
                </Link>
            </div>

            <div className="md:flex hidden">
                <ul className="space-x-3 menu-horizontal items-center font-semibold text-white text-base px-4">
                    <li className="rounded px-3 py-2"><NavLink to='/'>Home</NavLink></li>
                    <li className="rounded px-3 py-2"><NavLink to='/instructors'>Instructors</NavLink></li>
                    <li className="rounded px-3 py-2"><NavLink to='/classes'>Classes</NavLink></li>

                    {!role && <li><NavLink className="rounded px-3 py-2" to='/dashboard/students-home'>Dashboard </NavLink></li>}
                    {role === 'instructor' && <li><NavLink className="rounded px-3 py-2" to='/dashboard/instructor-home'>Dashboard </NavLink></li>}
                    {role === 'admin' && <li><NavLink className="rounded px-3 py-2" to='/dashboard/admin-home'>Dashboard </NavLink></li>}

                    <li className="rounded px-3 py-2"><NavLink to='/DashBoard/selected-class'><FaCartArrowDown size={25} /></NavLink></li>
                    {
                        user ? <>
                            <img className="w-12 h-12 rounded-full border-2" src={user.photoURL} alt="profile" title={user.displayName} />
                            <button onClick={handleLogout} className="border-2 px-5 p-2 bg-white text-blue-600 rounded font-medium">Logout</button>
                        </>
                            :
                            <li><NavLink to='/login' className="border-2 px-5 p-2 hover:bg-white rounded font-medium hover:text-[#6B6FF7] text-white">Login</NavLink></li>
                    }
                </ul>
            </div>
            {user ?
                <>
                    <img className="w-12 h-12 rounded-full md:hidden ml-auto border-2" src={user.photoURL} alt="profile" title={user.displayName} />
                    <button onClick={handleLogout} className="md:border-2 px-4 md:px-5 md:hidden py-2 bg-white text-blue-600 rounded font-medium mx-2">Logout</button>
                </>
                :
                <NavLink to="/login" className="border-2 px-3 py-1 hover:bg-white rounded font-medium hover:text-[#6B6FF7] text-white md:hidden mr-4">Login</NavLink>
            }
        </div>
    );
};

export default Navbar;
