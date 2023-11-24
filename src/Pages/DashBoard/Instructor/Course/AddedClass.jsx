import { useContext, useEffect, useState } from "react";
import AddedClassData from "./AddedClassData";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";

const AddedClass = () => {
    const { user } = useContext(AuthContext)
    const [addedClass, setAddedClass] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/courses/${user?.email}`)
            .then(res => res.json())
            .then(data => setAddedClass(data))
    }, [user])

    //todo: add tanstack query and alert
    const handleDelete = (_id) => {
        console.log(_id)
        fetch(`http://localhost:5000/courses/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    alert('user Deleted')
                }
            })
    }
    return (
        <div className="overflow-x-auto p-5 bg-gray-50">
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
    );
};

export default AddedClass;