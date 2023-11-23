import { NavLink } from "react-router-dom";

const AdminDashboard = () => {
    return (
        <div>
             <ul className="menu p-4 bg-blue-400 h-screen space-y-1 w-80 min-h-full text-gray-100 font-semibold text-lg">
                    <li><NavLink to="admin-home">Admin Home</NavLink></li>
                    <li><NavLink to="manage-course">Manage Course</NavLink></li>
                    <li><NavLink to="manage-users">Manage Users</NavLink></li>
                    <li><NavLink to="manage-selected-classes">Manage Selected Classes</NavLink></li>

                    <div className="divider"></div>

                    <li><NavLink to="/">Home</NavLink></li>
                    <li><button >LogOut</button></li>
                </ul>
        </div>
    );
};

export default AdminDashboard;