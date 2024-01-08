import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const ProfileInfo = () => {
    const { user } = useContext(AuthContext)
    return (
        <div className="pb-3">
            <Link to={'/'} ><img className="w-16 h-16 lg:w-24 lg:h-24 rounded-full border mx-auto" src={user?.photoURL} alt="profile image" /></Link>
            <h3 className="text-2xl text-white font-medium text-center">{user?.displayName}</h3>
        </div>
    );
};

export default ProfileInfo;