import { NavLink } from "react-router-dom";
import LogoutBtn from "../../Login/LogoutBtn";


const UserDashBoard = () => {

    return (
        <div>
            <ul className="menu p-4 bg-blue-400 h-screen space-y-1 w-80 min-h-full text-white font-semibold text-lg">
                <li><NavLink to="students-home">Student Home</NavLink></li>
                <li><NavLink to="selected-class">Selected Courses</NavLink></li>
                <li><NavLink to="enrolled-class">Enrolled Courses</NavLink></li>
                <li><NavLink to="payment-history">Payment History</NavLink></li>

                <div className="divider"></div>

                <li><NavLink to="/">Home</NavLink></li>
                <LogoutBtn></LogoutBtn>
            </ul>
        </div>
    );
};

export default UserDashBoard;