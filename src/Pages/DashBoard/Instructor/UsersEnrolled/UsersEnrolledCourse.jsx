import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";
import UsersEnrolled from "./UsersEnrolled"
import { Helmet } from "react-helmet-async";

const UsersEnrolledCourse = () => {
    const [axiosSecure] = useAxiosSecure()
    const { user, loading } = useContext(AuthContext)

    const { data: enrolledCourse = [] } = useQuery({
        queryKey: ['enrolledCourse', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/enrolledCourse/${user?.email}`)
            return res.data
        }
    })



    return (
        <div className="overflow-x-auto p-5 border shadow-lg">
            <Helmet>
                <title>Accent Adept | Paid Enrollment Overview</title>
            </Helmet>
            <h2 className='text-3xl font-semibold text-center my-8'>Paid Enrollment Overview</h2>
            <table className="table overflow-x-scroll border">
                {/* table header */}
                <thead>
                    <tr>
                        <th>TrxId</th>
                        <th>Course</th>
                        <th>Date</th>
                        <th>User Email</th>
                        <th>Price</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody className='md:text-base'>
                    {
                        enrolledCourse.map((data, index) => <UsersEnrolled
                            key={data._id}
                            data={data}
                            index={index} />)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default UsersEnrolledCourse;