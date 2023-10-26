import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { FaGoogle } from 'react-icons/fa';
import Lottie from "lottie-react";
import animationData from "./../../assets/animation_lnbsqrcr.json"
import { Link } from "react-router-dom";

const Register = () => {
    const {
        register,
        handleSubmit,
        // watch,
        formState: { errors },
        getValues
    } = useForm();
    const [passwordToggle, setPasswordToggle] = useState(false);
    const [confirmPasswordToggle, setConfirmPasswordToggle] = useState(false);

    const onSubmit = (data) => {
        console.log(data);
    };

    // const password = watch("password", "");

    return (
        <div className="my-10 shadow-lg bg-gray-50 p-6 flex items-center w-3/4 mx-auto flex-col md:flex-row">
            <div className="form-column md:w-1/2 p-8">
                <h2 className="text-4xl text-center font-semibold mb-4">Registration</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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

                    <div className="grid grid-cols-2 gap-3">
                        <div>
                            <label className="block">Password</label>
                            <div className="relative">
                                <input
                                    {...register("password", {
                                        required: true,
                                        minLength: 6,
                                        validate: {
                                            uppercase: (value) => /(?=.*[A-Z])/.test(value),
                                            // number: (value) => /\d/.test(value),
                                            // specialCase: (value) => /(?=.*[!@#$&*])/.text(value),
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

                            {/* {errors.password?.type === 'number' && <p className="text-xs text-red-600 mt-1">Your password should include at least one number.</p>}

                            {errors.password?.type === 'specialCase' && <p className="text-xs text-red-600 mt-1">Your password should include at least one special character.</p>} */}

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

                    <button
                        type="submit"
                        className="bg-blue-500 btn-block text-white p-2 rounded hover:bg-blue-600"
                    >
                        Register
                    </button>
                </form>

                <div className="divider">OR</div>

                <div className="text-center">
                    <button className="text-blue-500 hover:text-white hover:bg-blue-600 text-3xl rounded-full p-2 border-4 border-blue-500"><FaGoogle></FaGoogle></button>
                </div>
            </div>
            <div className="animation-column md:w-1/2 p-4">
                <Lottie animationData={animationData} />
            </div>
        </div>
    );
};

export default Register;
