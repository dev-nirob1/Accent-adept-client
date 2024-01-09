import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import ManageCoursesData from "./ManageCoursesData";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const ManageClasses = () => {

    const { loading } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()

    const { data: manageCourses = [], refetch } = useQuery({
        queryKey: ['courses'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get('/courses')
            // console.log('res from axios', res.data);
            return res.data
        }
    })
    


    const handleStatus = async (id) => {
        try {
            const res = await axiosSecure.patch(`/course/updateState/${id}`);
            if (res.data.modifiedCount) {
                refetch();
                toast.success('Course Approved');
            }
        } catch (error) {
            console.error('Error updating course status:', error);
        }
    };


    return (
        <div>
            <Helmet>
                <title>Accent Adept | Manage Courses</title>
            </Helmet>
            <h2 className='text-3xl font-semibold text-center my-8'>Manage Courses</h2>
            <table className="table border">
                {/* table header */}
                <thead>
                    <tr>
                        <th>Serial</th>
                        <th>Image</th>
                        <th>Host Email</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className='md:text-base'>
                    {
                        manageCourses.map((course, index) => <ManageCoursesData key={course._id} handleStatus={handleStatus} course={course} index={index} />)
                    }
                </tbody>

            </table>
        </div>
    );
};

export default ManageClasses;