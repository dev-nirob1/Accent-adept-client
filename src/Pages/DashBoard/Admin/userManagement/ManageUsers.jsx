import { useEffect, useState } from 'react';
import UsersData from './UsersData';
import toast from 'react-hot-toast';

const ManageUsers = () => {
    const [users, setUsers] = useState([])
    //todo:: use tanstack query and update alert to swal or toast
    console.log(users)

    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])


    const handleMakeAdmin = id => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PATCH',
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    toast.success('Made Admin ')
                }
            })
    }
    const handleMakeInstructor = id => {
        fetch(`http://localhost:5000/users/instructor/${id}`, {
            method: 'PATCH',
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    toast.success('Made Instructor ')
                }
            })
    }

    const handleDeleteUser = id => {
        fetch(`http://localhost:5000/users/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount) {
                    alert('user Deleted')
                }
            })
    }
    return (
        <div className="overflow-x-auto p-5 bg-gray-50">
            <h2 className='text-3xl font-semibold text-center my-8'>Manage User</h2>
            <table className="table border">
                {/* table header */}
                <thead>
                    <tr>
                        <th>Serial</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className='md:text-base'>
                    {
                        users.map((user, index) => <UsersData key={user._id} handleMakeAdmin={handleMakeAdmin} handleMakeInstructor={handleMakeInstructor} handleDeleteUser={handleDeleteUser} user={user} index={index} />)
                    }
                </tbody>

            </table>
        </div>
    );
};

export default ManageUsers;
