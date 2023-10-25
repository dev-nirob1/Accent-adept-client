import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../Firebase/firebase.config";

export const AuthContext = createContext()
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider() 

    //create user with email/pass
    const createUser = (email, password)=>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password);
    }

    //login with email/pass
    const login = (email, password)=> {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    //google login/
    const googleLogin = ()=>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    //signout
    const logOut = ()=>{
        setLoading(true)
        return signOut(auth)
    }

    //observer
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log(currentUser)
            setLoading(false)
        })
        return () => {
            return unSubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        setLoading,
        createUser,
        login,
        googleLogin,
        logOut
    }


    return (
        <AuthContext.Provider value={authInfo} >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;