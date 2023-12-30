import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useContext } from "react";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet-async";
import ManageSelected from "./ManageSelected";
import Swal from "sweetalert2";

const ManageSelectedClass = () => {
    const [axiosSecure] = useAxiosSecure()
    const { user, loading } = useContext(AuthContext)

    const { data: selectedCourses = [], refetch } = useQuery({
        queryKey: ['selectedCourses', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/selectedCourses/${user?.email}`)
            console.log('res from axios', res.data);
            return res.data
        }
    })

    const handleDeleteSelected = id => {
        fetch(`http://localhost:5000/selectedCourse/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
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
                        if (data.deletedCount) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    }
                });
            })
    }
    return (
        <div className="overflow-x-auto p-5 bg-gray-50">
            <Helmet>
                <title>Accent Adept | Manage My Courses</title>
            </Helmet>
            <h2 className='text-3xl font-semibold text-center my-8'>Manage Your Added Course</h2>
            <table className="table border">
                {/* table header */}
                <thead>
                    <tr>
                        <th>Serial</th>
                        <th>Course Name</th>
                        <th>Instructor</th>
                        <th>User Email</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className='md:text-base'>
                    {
                        selectedCourses.map((data, index) => <ManageSelected
                            key={data._id} handleDelete={handleDeleteSelected}
                            data={data}
                            index={index} />)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageSelectedClass;