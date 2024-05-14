import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import { toast } from 'react-hot-toast';
import Loader from "../../SharedComponents/Loader";

const AdminRoutes = ({ children }) => {
    const { loading, user, role, logOut } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <Loader />;
    }

    if (user && role === 'admin') {
        return children;
    } else {
        toast.error("Access denied: You need admin privileges to view this page.");
        logOut();
        return <Navigate state={{ from: location }} to="/login" />;
    }
};

export default AdminRoutes;
