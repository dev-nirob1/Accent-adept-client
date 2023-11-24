import { useEffect, useState } from "react";
import AddedClassData from "./AddedClassData";

const AddedClass = () => {
    const [addedClass, setAddedClass] = useState([])

    useEffect(() => {

    }, [])

    const handleDelete = (_id) => {
        console.log(_id)
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