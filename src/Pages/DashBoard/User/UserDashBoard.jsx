import { NavLink } from "react-router-dom";
import LogoutBtn from "../../Login/LogoutBtn";
import ProfileInfo from "../../../SharedComponents/ProfileInfo";

const UserDashBoard = () => {

    return (
        <div>
            <ul className="menu p-4 bg-blue-400 h-screen space-y-1 w-80 min-h-full text-white font-semibold text-lg">
                <ProfileInfo />
                <li><NavLink to="students-home">Student Home</NavLink></li>
                <li><NavLink to="selected-class">My Selected Courses</NavLink></li>
                <li><NavLink to="enrolled-class">My Enrolled Courses</NavLink></li>
                <li><NavLink to="payment-history">Payment History</NavLink></li>

                <div className="divider py-5"></div>
                <div>
                    <li><NavLink to="/">Home</NavLink></li>
                    <LogoutBtn></LogoutBtn>
                </div>
            </ul>
        </div>
    );
};

export default UserDashBoard;