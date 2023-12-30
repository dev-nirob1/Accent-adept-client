import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";
import SelectedCourseData from "./SelectedCourseData";
import EmptyState from "../../../../SharedComponents/EmptyState";
import Swal from "sweetalert2";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";

const SelectedClass = () => {

    const { user, loading } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()

    const { data: selectedCourses = [], refetch } = useQuery({
        queryKey: ['selectedCourses', user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/selectedCourses?email=${user?.email}`)
            console.log('res from axios', res.data);
            return res.data
        }
    })

    const handleCancelSelected = id => {
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
                    confirmButtonText: "Yes, Cancel it!"
                }).then((result) => {
                    if (result.isConfirmed) {
                        if (data.deletedCount) {
                            refetch()
                            Swal.fire({
                                title: "Canceled!",
                                text: "Your Course has been Canceled.",
                                icon: "success"
                            });
                        }
                    }
                });
            })
    }
    return (
        <>
            {
                selectedCourses && Array.isArray(selectedCourses) && selectedCourses.length > 0
                    ?
                    <div className="overflow-x-auto p-5 bg-gray-50">
                        <Helmet>
                            <title>Accent Adept | Selected Course</title>
                        </Helmet>
                        <h2 className='text-3xl font-semibold text-center my-8'>Your Selected Courses</h2>

                        <table className="table border">
                            {/* table header */}
                            <thead>
                                <tr>
                                    <th>Serial</th>
                                    <th>Course Name</th>
                                    <th>Instructor</th>
                                    <th>Language</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody className='md:text-base'>
                                {
                                    selectedCourses.map((selectedCourseData, index) => <SelectedCourseData
                                        key={selectedCourseData._id}
                                        handleCancel={handleCancelSelected} selectedCourseData={selectedCourseData}
                                        index={index} />)
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

export default SelectedClass;