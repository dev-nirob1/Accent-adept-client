import { NavLink } from "react-router-dom";


const UserDashBoard = () => {
    return (
        <div>
            <ul className="menu p-4 bg-blue-400 h-screen space-y-1 w-80 min-h-full text-white font-semibold text-lg">
                <li><NavLink to="user-home">Student Home</NavLink></li>
                <li><NavLink to="selected-class">Selected Classes</NavLink></li>
                <li><NavLink to="enrolled-class">Enrolled Classes</NavLink></li>
                <li><NavLink to="payment-history">Payment History</NavLink></li>

                <div className="divider"></div>

                <li><NavLink to="/">Home</NavLink></li>
                <li><button>LogOut</button></li>
            </ul>
        </div>
    );
};

export default UserDashBoard;