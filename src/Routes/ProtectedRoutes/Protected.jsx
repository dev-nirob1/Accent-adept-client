import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const Protected = ({children}) => {
    const {loading, user} = useContext(AuthContext)
    const location = useLocation()
    if(loading){
        return <span className="loading loading-ring loading-lg"></span>
    }
    if(user){
        return children;
    }
    return <Navigate state={{from: location}} to='/login'/>
};

export default Protected;