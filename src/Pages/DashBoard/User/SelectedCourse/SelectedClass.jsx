import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";
import SelectedCourseData from "./SelectedCourseData";
import EmptyState from "../../../../SharedComponents/EmptyState";

const SelectedClass = () => {

    const { user } = useContext(AuthContext)
    const [selectedCourses, setSelectedCourses] = useState([])
    console.log(user.email)

    useEffect(() => {
        if (user && user?.email) {
            const url = `http://localhost:5000/selectedCourses?email=${user?.email}`;
            fetch(url)
                .then(res => res.json())
                .then(data => {
                    setSelectedCourses(data);
                })
                .catch(error => {
                    console.error('Error fetching :', error);
                });
        }
    }, [user]);
    
    const handleDelete = id => {
        console.log(id)
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
                        selectedCourses.map((selectedCourseData, index) => <SelectedCourseData key={selectedCourseData._id} handleDelete={handleDelete} selectedCourseData={selectedCourseData} index={index} />)
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