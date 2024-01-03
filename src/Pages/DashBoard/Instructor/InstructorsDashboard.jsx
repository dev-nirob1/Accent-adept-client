import { NavLink } from "react-router-dom";
import LogoutBtn from "../../Login/LogoutBtn";

const InstructorsDashboard = () => {

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