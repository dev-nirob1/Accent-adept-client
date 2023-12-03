import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";
import SelectedCourseData from "./SelectedCourseData";

const SelectedClass = () => {

    const { user } = useContext(AuthContext)
    const [selectedCourses, setSelectedCourses] = useState([])
    
    useEffect(() => {
        fetch(`http://localhost:5000/selectedCourses?email=${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setSelectedCourses(data)
            })
    })

    const handleDelete = id => {
        console.log(id)
    }
    return (
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
    );
};

export default SelectedClass;