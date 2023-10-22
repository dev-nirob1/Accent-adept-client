import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import Lottie from "lottie-react";
import animationData from "./../../assets/animation_lnbsqrcr.json"

const Register = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const [passwordToggle, setPasswordToggle] = useState(false);
    const [confirmPasswordToggle, setConfirmPasswordToggle] = useState(false);

    const onSubmit = (data) => {
        console.log(data);
    };

    const password = watch("password", "");

    return (
        <div className="my-16 shadow-lg bg-gray-50 p-6 flex items-center w-3/4 mx-auto flex-col md:flex-row">
            <div className="form-column md:w-1/2 p-4">
                <h2 className="text-2xl font-semibold mb-4">Registration</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="mb-4">
                        <label className="block">Name</label>
                        <input
                            {...register("name", { required: true })}
                            type="text"
                            placeholder="Name"
                            className="w-full p-2 border rounded"
                        />
                        {errors.name && (
                            <p className="text-red-600 mt-1">Name is required.</p>
                        )}
                    </div>
                    <div className="mb-4">
                        <label className="block">Email</label>
                        <input
                            {...register("email", { required: true })}
                            type="email"
                            placeholder="Email"
                            className="w-full p-2 border rounded"
                        />
                        {errors.email && (
                            <p className="text-red-600 mt-1">Email is required.</p>
                        )}
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                        <div className="mb-4 relative">
                            <label className="block">Password</label>
                            <input
                                {...register("password", { required: true })}
                                type={passwordToggle ? "text" : "password"}
                                placeholder="Password"
                                className="w-full p-2 border rounded pr-12"
                            />
                            <button
                                type="button"
                                onClick={() => setPasswordToggle(!passwordToggle)}
                                className="absolute top-[70%] right-2 transform -translate-y-1/2"
                            >
                                {passwordToggle ? (
                                    <AiFillEyeInvisible size={20} />
                                ) : (
                                    <AiFillEye size={20} />
                                )}
                            </button>
                            {errors.password && (
                                <p className="text-red-600 mt-1">Password is required.</p>
                            )}
                        </div>
                        <div className="mb-4 relative">
                            <label className="block">Confirm Password</label>
                            <input
                                {...register("confirmPassword", {
                                    required: true,
                                    validate: (value) => value === password,
                                })}
                                type={confirmPasswordToggle ? "text" : "password"}
                                placeholder="Confirm Password"
                                className="w-full p-2 border rounded pr-12"
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
                            {errors.confirmPassword && (
                                <p className="text-red-600 mt-1">Passwords must match.</p>
                            )}
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block">Photo URL</label>
                        <input
                            {...register("photoUrl")}
                            type="text"
                            placeholder="Photo URL"
                            className="w-full p-2 border rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block">Gender</label>
                        <select
                            {...register("gender")}
                            className="w-full p-2 border rounded"
                        >
                            <option value="female">Female</option>
                            <option value="male">Male</option>
                            <option value="other">Other</option>
                        </select>
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-500 btn-block text-white p-2 rounded hover:bg-blue-600"
                    >
                        Register
                    </button>
                </form>
            </div>
            <div className="animation-column md:w-1/2 p-4">
                <Lottie animationData={animationData} />
            </div>
        </div>
    );
};

export default Register;
