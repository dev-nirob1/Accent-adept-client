import Lottie from "lottie-react";
import groovyWalkAnimation from "./../../assets/animation_lnbsqrcr.json";
import { useForm, } from 'react-hook-form';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import SocialLogin from "../../SharedComponents/SocialLogin";
import { AuthContext } from '../../AuthProvider/AuthProvider'
import { useContext, useEffect } from "react";
import toast from "react-hot-toast";
import { motion } from 'framer-motion'

const Login = () => {
    const { login } = useContext(AuthContext)
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const onSubmit = (data) => {
        login(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser)
                toast.success('Welcome to Accent Adept')
                reset()
                navigate(from, { replace: true });

            })
            .catch(err => {
                const errorMessage = err.message;
                toast.error(errorMessage)
            })
    }
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
                staggerChildren: 0.1
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
                duration: 1,
            }
        }
    }

    return (
        <motion.div className="my-10 mx-auto w-10/12 md:w-3/4 p-2 md:p-6 bg-gray-50 shadow">
            <Helmet>
                <title>Accent Adept | Login</title>
            </Helmet>
            <div className="md:grid gap-3 md:grid-cols-2 p-4 md:p-8 items-center justify-center">

                <motion.div variants={leftVariants} initial="initial" whileInView="animate"  className=" hidden md:block lg::w-10/12">
                    <Lottie animationData={groovyWalkAnimation} loop={true} />
                </motion.div>

                <div className="lg:w-11/12">
                    <h2 className="text-center text-3xl font-semibold">Login </h2>

                    <motion.form variants={rightVariants} initial="initial" whileInView="animate" onSubmit={handleSubmit(onSubmit)} className="space-y-4">

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

                        <button type="submit" className="px-5 py-2.5 relative rounded group text-white font-medium w-full">
                            <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter bg-gradient-to-br from-blue-600 to-purple-500"></span>
                            <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-blue-600 to-purple-500"></span>
                            <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 from-blue-600 to-purple-500"></span>
                            <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-purple-600 from-blue-500"></span>
                            <span className="relative">Login</span>
                        </button>
                    </motion.form>

                    <div className="divider">OR</div>

                    <SocialLogin />
                </div>
            </div>
        </motion.div>
    );
};

export default Login;