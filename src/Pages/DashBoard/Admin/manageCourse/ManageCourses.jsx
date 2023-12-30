import { useContext} from "react";
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
//  todo: handle delete 
    const handleStatus = id => {
        fetch(`http://localhost:5000/course/updateState/${id}`, {
            method: 'PATCH',
        }).then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch()
                    toast.success('Course Approved')
                }
            })
    }
    
    return (
        <div>
            <Helmet>
                <title>Accent Adept | Manage Classes</title>
            </Helmet>
            <h2 className='text-3xl font-semibold text-center my-8'>Manage User</h2>
            <table className="table border">
                {/* table header */}
                <thead>
                    <tr>
                        <th>Serial</th>
                        <th>Info</th>
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