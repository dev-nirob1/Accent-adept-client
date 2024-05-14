import { NavLink } from "react-router-dom";
import LogoutBtn from "../../Login/LogoutBtn";
import ProfileInfo from "../../../SharedComponents/ProfileInfo";

const AdminDashboard = () => {

    return (
        <div>
            <ul className="menu p-4 bg-blue-400 min-h-screen space-y-1 w-80 text-gray-100 font-semibold text-lg overflow-y-auto">
            <ProfileInfo />
                <li><NavLink to="admin-home">Admin Home</NavLink></li>
                <li><NavLink to="manage-course">Manage Course</NavLink></li>
                <li><NavLink to="manage-users">Manage Users</NavLink></li>
                <li><NavLink to="all-enrolled-courses">All Enrolled Course</NavLink></li>

                <div className="divider py-5"></div>
                <li><NavLink to="/">Home</NavLink></li>
                <LogoutBtn></LogoutBtn>
            </ul>
        </div>
    );
};

export default AdminDashboard;