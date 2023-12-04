import { NavLink, useNavigate } from "react-router-dom";
import LogoutBtn from "../../Login/LogoutBtn";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const InstructorsDashboard = () => {
    const { role } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        
        if (role === 'instructor') {
            navigate(`/dashboard/${role}-home`);
        }
    }, [role, navigate]);

    return (
        <div>

            <ul className="menu p-4 bg-blue-400 h-screen space-y-1 w-80 min-h-full text-gray-100 font-semibold text-lg">
                <li><NavLink to="instructor-home">Instructor Home</NavLink></li>
                <li><NavLink to="add-course">Add Course</NavLink></li>
                <li><NavLink to="added-course">My Courses</NavLink></li>
                <li><NavLink to="manage-selected-classes">User Course Registry</NavLink></li>
                <div className="divider"></div>

                <li><NavLink to="/">Home</NavLink></li>
                <LogoutBtn></LogoutBtn>
            </ul>
        </div>
    );
};

export default InstructorsDashboard;