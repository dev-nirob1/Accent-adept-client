import { NavLink } from "react-router-dom";

const AdminDashboard = () => {
    return (
        <div>
             <ul className="menu p-4 w-80 min-h-full text-white font-semibold text-lg">
                    <li><NavLink to="adminHome">Admin Home</NavLink></li>
                    <li><NavLink to="selectedClass">Selected Classes</NavLink></li>
                    <li><NavLink to="enrolledClass">Enrolled Classes</NavLink></li>
                    <li><NavLink to="paymentHistory">Payment History</NavLink></li>

                    <div className="divider"></div>

                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/">Instructors</NavLink></li>
                    <li><NavLink to="/">Classes</NavLink></li>
                </ul>
        </div>
    );
};

export default AdminDashboard;