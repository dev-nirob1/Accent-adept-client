import {  Outlet } from "react-router-dom";
import AdminDashboard from "./AdminDashboard";
import UserDashBoard from "./UserDashBoard";

const DashBoard = () => {
    const isAdmin = true;
    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">

                <div className="">
                    <Outlet />
                </div>

                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">DashBoard</label>

            </div>
            <div className="drawer-side bg-blue-400">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>

                {
                    isAdmin ? 
                    <AdminDashboard></AdminDashboard>
                    :
                    <UserDashBoard></UserDashBoard>
                }
            </div>
        </div>
    );
};

export default DashBoard;