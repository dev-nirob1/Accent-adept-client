import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const EnrolledClass = () => {
    const { user } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()
    const { data: enrolledCourses = [] } = useQuery({
        queryKey: ['enrolledCourses', user?.email],
        queryFn: async () => {
            const data = await axiosSecure.get(`/enrolledCourses?email=${user?.email}`)
            return data.data
        }
    })
    return (
        <div className="border p-5 rounded-sm shadow">
            <Helmet>
                <title>Accent Adept | Enrolled Courses</title>
            </Helmet>
            <div>
                <div className="flex justify-between">
                    <h3 className="text-3xl font-semibold text-center">Enrolled Courses</h3>
                </div>
                <div className="overflow-x-auto mt-5">
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
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default EnrolledClass;