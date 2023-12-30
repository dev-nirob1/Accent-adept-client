import { Outlet } from "react-router-dom";
import AdminDashboard from "../Admin/AdminDashboard";
import UserDashBoard from "../User/UserDashBoard";
import { FaBars } from "react-icons/fa";
import { useContext, useState } from "react";
import { FaXmark } from "react-icons/fa6";
import InstructorsDashboard from "../Instructor/InstructorsDashboard";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const DashBoard = () => {
    const { role } = useContext(AuthContext)

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`drawer relative lg:drawer-open ${isOpen ? 'lg:drawer-visible' : ''}`}>
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" checked={isOpen} onChange={() => setIsOpen(!isOpen)} />
            <div className="drawer-content flex flex-col w-full items-center mt-14 lg:mt-8 lg:ml-5">
                <div className="w-full bg-gray-50">

                    <Outlet />

                </div>

                <label htmlFor="my-drawer-2" className="absolute top-4 right-4 drawer-button lg:hidden">
                    {isOpen ? <FaXmark size={26} /> : <FaBars size={26} />}
                </label>
            </div>

            <div className="drawer-side lg:bg-blue-400">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>

                {
                    !role && <UserDashBoard />
                }
                {
                    role === 'admin' && <AdminDashboard />
                }
                {
                    role === 'instructor' && <InstructorsDashboard />
                }

            </div>
        </div>
    );
};

export default DashBoard;
