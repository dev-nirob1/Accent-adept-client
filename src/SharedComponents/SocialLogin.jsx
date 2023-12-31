import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const SocialLogin = () => {
    const { googleLogin } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                const loggedUser = result.user;
                if (loggedUser) {
                    navigate(from, { replace: true });
                    toast.success('Welcome to Accent Adept')
                }

                const savedUser = { name: loggedUser.displayName, photo: loggedUser.photoURL, email: loggedUser.email }

                if (loggedUser) {
                    fetch('http://localhost:5000/users', {
                        method: 'PUT',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(savedUser)
                    })
                        .then(res => res.json())
                        .then(response => {
                            console.log('Server response:', response);
                        })
                }
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    return (
        <div className="text-center">
            <button onClick={handleGoogleLogin} className=" hover:text-white hover:bg-blue-600 text-3xl rounded-full p-2 border-4 border-blue-500"><FaGoogle></FaGoogle></button>
        </div>
    );
};

export default SocialLogin;