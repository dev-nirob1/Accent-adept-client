import { Link } from "react-router-dom";

const Navbar = () => {
    const navLinks = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/'>About</Link></li>
        <li><Link to='/'>Blog</Link></li>

    </>

    return (
        <div className="flex justify-between items-center bg-[#192231] container mx-auto md:px-8 md:py-3">
            <div>
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost text-white md:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow bg-base-100 rounded-box w-52 font-semibold text-lg">
                        {navLinks}
                    </ul>
                </div>
                <Link to="/" className="text-2xl md:text-4xl font-semibold text-white">Accent Adept</Link>
            </div>

            <div className="md:flex hidden">
                <ul className="space-x-8 menu-horizontal items-center font-semibold text-white text-base px-4">
                    {navLinks}
                    <li><a className="btn">Button</a></li>
                </ul>
            </div>
            <a className="btn btn-sm md:hidden mr-4">Button</a>
        </div>
    );
};

export default Navbar;