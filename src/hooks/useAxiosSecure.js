import { useContext, useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import axios from "axios";
import { AuthContext } from "../AuthProvider/AuthProvider";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})

const useAxiosSecure = () => {
    const { logOut } = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(() => {
        axiosSecure.interceptors.request.use(config => {
            const token = `Bearer ${localStorage.getItem('access-token')}`
            // console.log('token', token)
            if (token) {
                config.headers.Authorization = token
            }
            return config
        })

        axiosSecure.interceptors.response.use(response => response, async error => {
            if (error.response && error.response.status === 403 || error.response.status === 401) {
                await logOut()
                navigate('/login')
            }
            return Promise.reject(error)
        })
    }, [logOut, navigate])

    return [axiosSecure]
}

export default useAxiosSecure;