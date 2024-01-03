import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";

const InstructorRoutes = ({ children }) => {
    const { loading, user, role, logOut } = useContext(AuthContext)
    const location = useLocation()

    if (loading) {
        return <div className="flex items-center justify-center h-screen w-full">
            <span className="loading loading-ring loading-lg"></span>
        </div>
    }

    if (user && user?.email && role === 'instructor') {
        return children;
    }

    else {
        toast.error('Access denied: You need Instructor privileges to view this page.')
        logOut()
        return <Navigate state={{ from: location }} to='/login' />
    }

};

export default InstructorRoutes;