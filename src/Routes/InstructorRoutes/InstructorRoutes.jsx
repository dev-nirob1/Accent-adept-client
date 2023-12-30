import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const InstructorRoutes = ({ children }) => {
    const { loading, user, role } = useContext(AuthContext)
    const location = useLocation()

    if (loading) {
        return <div className="flex items-center justify-center h-screen w-full">
            <span className="loading loading-ring loading-lg"></span>
        </div>
    }

    if (user && role === 'instructor') {
        return children;
    }

    return <Navigate state={{ from: location }} to='/login' />

};

export default InstructorRoutes;