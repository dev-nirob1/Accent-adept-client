import { NavLink } from "react-router-dom";

const AdminDashboard = () => {
    return (
        <div>
             <ul className="menu p-4 space-y-1 w-80 min-h-full text-gray-100 font-semibold text-lg">
                    <li><NavLink to="admin-home">Admin Home</NavLink></li>
                    <li><NavLink to="add-course">Add Course</NavLink></li>
                    <li><NavLink to="manage-users">Manage Users</NavLink></li>
                    <li><NavLink to="manage-classes">Manage Classes</NavLink></li>
                    {/* <li><NavLink to="paymentHistory">Payment History</NavLink></li> */}

                    <div className="divider"></div>

                    <li><NavLink to="/">Home</NavLink></li>
                    <li><button >LogOut</button></li>
                </ul>
        </div>
    );
};

export default AdminDashboard;