import { useContext, } from "react";
import AddedClassData from "./AddedClassData";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet-async";
import EmptyState from "../../../../SharedComponents/EmptyState";
import Swal from 'sweetalert2'
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery, } from '@tanstack/react-query'

const AddedClass = () => {
    const { user, loading } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()

    const { data: addedClass = [], refetch } = useQuery({
        queryKey: ['courses', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/courses/${user?.email}`)
            console.log('res from axios', res.data);
            return res.data
        }
    })


    const handleDelete = async (_id) => {
        // console.log(_id)
        const res = await axiosSecure.delete(`/courses/${_id}`);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                if (res.data.deletedCount > 0) {
                    refetch();
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                    });
                }
            }
        });
    }

    return (
        <>

            {
                addedClass && Array.isArray(addedClass) && addedClass.length > 0 ?
                    <div className="overflow-x-auto p-5 bg-gray-50">
                        <Helmet>
                            <title>Accent Adept | My Courses</title>
                        </Helmet>
                        <h2 className='text-3xl font-semibold text-center my-8'>Manage Your Added Course</h2>
                        <table className="table border">
                            {/* table header */}
                            <thead>
                                <tr>
                                    <th>Serial</th>
                                    <th>Course Name</th>
                                    <th>Instructor</th>
                                    <th>Price</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody className='md:text-base'>
                                {
                                    addedClass.map((data, index) => <AddedClassData key={data._id} handleDelete={handleDelete} data={data} index={index} />)
                                }
                            </tbody>
                        </table>
                    </div>
                    :
                    <EmptyState></EmptyState>
            }
        </>
    );
};

export default AddedClass;