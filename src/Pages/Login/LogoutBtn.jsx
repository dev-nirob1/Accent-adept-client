import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';

const LogoutBtn = () => {
    const { logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logOut()
            .then(() => {

                navigate('/');
            })
            .catch(err => {
                console.error("Logout error:", err);
                toast.error('Something Went Wrong');
            });
    };

    return (
        <li><button onClick={handleLogout}>LogOut</button></li>
    );
};

export default LogoutBtn;
