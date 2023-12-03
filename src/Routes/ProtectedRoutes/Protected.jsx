import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";


const Protected = ({ children }) => {
    const { loading, user } = useContext(AuthContext)
    const location = useLocation()

    if (loading) {
        return <div className="flex items-center justify-center h-screen w-full">
            <span className="loading loading-ring loading-lg"></span>
        </div>
    }
    if (!user) {
        toast.error("Please log in first before accessing this route.")
    }
    if (user) {
        return children;
    }
    return <Navigate state={{ from: location }} to='/login' />
};

export default Protected;