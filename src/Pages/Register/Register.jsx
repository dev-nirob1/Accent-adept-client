import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Lottie from "lottie-react";
import animationData from "./../../assets/animation_lnbsqrcr.json"
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet-async";
import SocialLogin from "../../SharedComponents/SocialLogin";
import toast from "react-hot-toast";
import {motion} from 'framer-motion'
const Register = () => {
    const { createUser, updateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
    const apiUrl = import.meta.env.VITE_API;

    const from = location.state?.from?.pathname || '/';

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
        getValues
    } = useForm();

    const [passwordToggle, setPasswordToggle] = useState(false);
    const [confirmPasswordToggle, setConfirmPasswordToggle] = useState(false);

    const onSubmit = (data) => {
        createUser(data.email, data.password)
            .then(result => {
                console.log(result)
                updateUserProfile(data.name, data.photoUrl)
                    .then(() => {
                        const savedUser = { name: data.name, email: data.email, photo: data.photoUrl }

                        fetch(`${apiUrl}/users/`, {
                            method: 'PUT',
                            headers: {
                                'content-type': 'application/json'
                            },
                            body: JSON.stringify(savedUser)
                        })
                            .then(res => res.json())
                            .then(data => {
                                if (data.acknowledged) {
                                    toast.success('Registration Succesfull')
                                }
                                reset()
                                navigate(from, { replace: true });
                            })
                    })

            })
            .catch(error => {
                toast.error(error.message)
            })
    };
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const leftVariants = {
        initial: {
            x: -100,
            opacity: 0
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1,
            }
        }
    }
    const rightVariants = {
        initial: {
            x: 100,
            opacity: 0
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1,            }
        }
    }


    return (
        <div className="my-10 shadow-lg bg-gray-50 p-2 md:p-6 flex items-center w-10/12 md:w-3/4 mx-auto flex-col md:flex-row">
            <Helmet>
                <title>Accent Adept | Register</title>
            </Helmet>
            <div className="w-full md:w-1/2 p-4 md:p-8">
                <h2 className="text-4xl text-center font-semibold mb-4">Registration</h2>
                <motion.form variants={leftVariants} initial="initial" whileInView="animate" onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="mb-4">
                        <label className="block">Name</label>
                        <input
                            {...register("name", { required: true })}
                            type="text"
                            placeholder="Name"
                            className="w-full shadow p-[10px] border rounded"
                        />
                        {errors.name?.type === 'required' && (
                            <p className="text-red-600 mt-1">Name is required.</p>
                        )}
                    </div>

                    <div className="mb-4">
                        <label className="block">Email</label>
                        <input
                            {...register("email", { required: true })}
                            type="email"
                            placeholder="Email"
                            className="w-full shadow p-[10px] border rounded"
                        />
                        {errors.email?.type === 'required' && (
                            <p className="text-red-600 mt-1">Email is required.</p>
                        )}
                    </div>

                    <div className="md:grid grid-cols-2 gap-3">
                        <div className="mb-4">
                            <label className="block">Password</label>
                            <div className="relative">
                                <input
                                    {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        validate: {
                                            uppercase: (value) => /(?=.*[A-Z])/.test(value),
                                            number: (value) => /\d/.test(value),
                                            specialCase: (value) => /(?=.*[!@#$&*])/.test(value),
                                        }
                                    })}
                                    type={passwordToggle ? "text" : "password"}
                                    placeholder="Password"
                                    className="w-full shadow p-[10px] border rounded pr-12"
                                />
                                <button
                                    type="button"
                                    onClick={() => setPasswordToggle(!passwordToggle)}
                                    className="absolute top-1/2 right-2 transform -translate-y-1/2"
                                >
                                    {passwordToggle ? (
                                        <AiFillEyeInvisible size={20} />
                                    ) : (
                                        <AiFillEye size={20} />
                                    )}
                                </button>
                            </div>
                            {errors.password?.type === 'required' && <p className="text-red-600 mt-1">Password is required</p>}

                            {errors.password?.type === 'minLength' && <p className="text-red-600 mt-1">Password must be at least 6 characters long</p>}

                            {errors.password?.type === 'uppercase' && <p className="text-xs text-red-600 mt-1">Your password should include at least one uppercase letter.</p>}

                            {errors.password?.type === 'number' && <p className="text-xs text-red-600 mt-1">Your password should include at least one number.</p>}

                            {errors.password?.type === 'specialCase' && <p className="text-xs text-red-600 mt-1">Your password should include at least one special character.</p>}

                        </div>

                        <div>
                            <label className="block">Confirm Password</label>
                            <div className="relative">
                                <input
                                    {...register("confirmPassword", {
                                        required: true,
                                        validate: (value) => value === getValues("password"),
                                    })}
                                    type={confirmPasswordToggle ? "text" : "password"}
                                    placeholder="Confirm Password"
                                    className="w-full p-[10px] shadow border rounded pr-12"
                                />
                                <button
                                    type="button"
                                    onClick={() => setConfirmPasswordToggle(!confirmPasswordToggle)}
                                    className="absolute top-1/2 right-2 transform -translate-y-1/2"
                                >
                                    {confirmPasswordToggle ? (
                                        <AiFillEyeInvisible size={20} />
                                    ) : (
                                        <AiFillEye size={20} />
                                    )}
                                </button>
                            </div>

                            {errors.confirmPassword?.type === 'validate' && (
                                <p className="text-red-600 mt-1">Passwords must match.</p>
                            )}
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block">Photo URL</label>
                        <input
                            {...register("photoUrl", {
                                required: true,
                                pattern: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/
                            })}
                            type="text"
                            placeholder="Photo URL"
                            className="w-full shadow p-[10px] border rounded"
                        />
                    </div>
                    {errors.photoUrl && (
                        <p className="text-red-600 mt-1">Photo URL is required</p>
                    )}
                    {errors.photoUrl?.type === 'pattern' && (
                        <p className="text-red-600 mt-1">Invalid URL. Please enter a valid URL.</p>
                    )}

                    <p><small>Already have an account? <Link className="text-blue-500 hover:underline" to="/login">Login here</Link></small></p>

                    <button type="submit" className="px-5 py-2.5 relative rounded group text-white font-medium w-full">
                            <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter bg-gradient-to-br from-blue-600 to-purple-500"></span>
                            <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-blue-600 to-purple-500"></span>
                            <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 from-blue-600 to-purple-500"></span>
                            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
                            <span className="relative">Register</span>
                        </button>
                </motion.form>

                <div className="divider">OR</div>
                <SocialLogin />
            </div>
            <motion.div variants={rightVariants} initial="initial" whileInView="animate" className="hidden md:block md:w-1/2 p-4">
                <Lottie animationData={animationData} />
            </motion.div>
        </div>
    );
};

export default Register;
