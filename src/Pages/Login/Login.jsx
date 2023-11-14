import Lottie from "lottie-react";
import groovyWalkAnimation from "./../../assets/animation_lnbsqrcr.json";
import { useForm, } from 'react-hook-form';
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import SocialLogin from "../../SharedComponents/SocialLogin";


const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        // Handle form submission here
        console.log(data);
    }

    return (
        <div className="my-10 mx-auto p-2 md:p-6 sm:w-3/4 bg-gray-50 shadow">
            <Helmet>
                <title>Accent Adept | Login</title>
            </Helmet>
            <div className="grid gap-3 md:grid-cols-2 p-4 md:p-8 items-center justify-center">

                <div className="lg::w-10/12 order-2 md:order-none">
                    <Lottie animationData={groovyWalkAnimation} loop={true} />
                </div>

                <div className="lg:w-11/12 order-1">
                    <h2 className="text-center text-3xl font-semibold">Login </h2>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

                        <div className="mb-4">
                            <label className="block">Email</label>
                            <input
                                {...register("email", { required: true })}
                                type="email"
                                placeholder="Email"
                                className="w-full p-[10px] border rounded"
                            />

                            {errors.email?.type === 'required' && <p className="text-red-600 mt-1">Email is required.</p>}
                        </div>

                        <div className="mb-4">
                            <label className="block">Password</label>
                            <input
                                {...register("password",
                                    { required: true })}
                                type="password"
                                placeholder="Password"
                                className="w-full p-[10px] border rounded"
                            />
                            {errors.password?.type === 'required' && <p className="text-red-600 mt-1">Password is required.</p>}
                        </div>

                        <p><small>New to Accent-Adept? <Link className="text-blue-500 hover:underline" to="/register">Register here</Link></small></p>
                        <button
                            type="submit"
                            className="bg-blue-500 btn-block text-white p-2 rounded hover:bg-blue-600"
                        >
                            Login
                        </button>
                    </form>

                    <div className="divider">OR</div>

                    <SocialLogin />
                </div>
            </div>
        </div>
    );
};

export default Login;