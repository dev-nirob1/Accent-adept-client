// import { useEffect, useState } from "react";
import { Link, } from "react-router-dom";

const Navbar = () => {
    // const [navbar, setNavbar] = useState(false);
    // const location = useLocation()

    // const changeBg = () => {
    //     // console.log(window.scrollY)
    //     if (window.scrollY > 200 && location.pathname === '/') {
    //         setNavbar(true)
    //     }
    //     else {
    //         setNavbar(false)
    //     }
    // }
    // useEffect(() => {
    //     window.addEventListener('scroll', changeBg);
    //     return () => {
    //         window.removeEventListener('scroll', changeBg);
    //     }
    // }, []);

    // const bgOpacity = location.pathname === "/" ? "bg-opacity-10" : "bg-opacity-100 sticky top-0 ";

    return (
        <div className={`flex justify-between sticky top-0 z-10 w-full container mx-auto items-center bg-blue-600 shadow md:px-8 md:py-3`}>
            <div>
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost text-white md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow bg-base-100 rounded-box w-52 font-semibold text-lg">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/instructors'>Instructors</Link></li>
                        <li><Link to='/classes'>Instructors</Link></li>
                        <li><Link to='/'>Blog</Link></li>
                    </ul>
                </div>
                <Link to="/" className="text-2xl md:text-4xl font-semibold text-white">Accent Adept</Link>
            </div>

            <div className="md:flex hidden">
                <ul className="space-x-5 menu-horizontal items-center font-semibold text-white text-base px-4">
                    <li className="rounded px-3 py-2 hover:text-[#6B6FF7] hover:bg-white"><Link to='/'>Home</Link></li>
                    <li className="rounded px-3 py-2 hover:text-[#6B6FF7] hover:bg-white"><Link to='/instructors'>Instructors</Link></li>
                    <li className="rounded px-3 py-2 hover:text-[#6B6FF7] hover:bg-white"><Link to='/classes'>Classes</Link></li>
                    <li className="rounded px-3 py-2 hover:text-[#6B6FF7] hover:bg-white"><Link to='/'>Blog</Link></li>
                    <li className="rounded px-3 py-2 hover:text-[#6B6FF7] hover:bg-white"><Link to='/register'>Register</Link></li>
                    <li><Link to='/login' className="border-2 px-5 p-2 hover:bg-white rounded font-medium hover:text-[#6B6FF7] text-white">Login</Link></li>
                </ul>
            </div>
            <a className="border-2 px-3 py-1 hover:bg-white rounded font-medium hover:text-[#6B6FF7] text-white md:hidden mr-4">Login</a>
        </div>
    );
};

export default Navbar;
