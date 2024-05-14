import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Loader from "../../../SharedComponents/Loader";
import EmptyState from "../../../SharedComponents/EmptyState";

const EnrolledClass = () => {
    const { user, loading } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()
    const { data: enrolledCourses = [] } = useQuery({
        queryKey: ['enrolledCourses', user?.email],
        queryFn: async () => {
            const data = await axiosSecure.get(`/enrolledCourses?email=${user?.email}`)
            return data.data
        }
    })
    if(loading){
        return <Loader/>
    }
    return (
        <div className="p-5">
            <Helmet>
                <title>Accent Adept | Enrolled Courses</title>
            </Helmet>
            <div>
                <div className="flex justify-between">
                    <h3 className="text-3xl font-semibold text-center">Enrolled Courses</h3>
                </div>
                <div className="mt-5">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>TransactionId</th>
                                <th>Course Name</th>
                                <th>Amount</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                enrolledCourses.length > 0 ?
                                enrolledCourses.map(course =>
                                    <tr key={course._id}>
                                        <td>TrxId: {course.transactionId}</td>
                                        <td> {course.courseName}
                                            <br />
                                            <span className="badge badge-ghost badge-sm">{course.className}</span></td>
                                        <td>$ {course.price}</td>
                                        <td><p className="w-fit bg-green-400 rounded-md text-green-800 font-medium">enrolled</p></td>
                                    </tr>
                                )
                                : 
                                <EmptyState/>
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default EnrolledClass;