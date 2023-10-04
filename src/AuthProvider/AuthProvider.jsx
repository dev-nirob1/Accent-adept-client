import { createContext, useState } from "react";

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
    const user = 'nirob';
    const [loading, setLoading] = useState(true)
    const authInfo = {
        user,
        loading, 
        setLoading
    }
    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;