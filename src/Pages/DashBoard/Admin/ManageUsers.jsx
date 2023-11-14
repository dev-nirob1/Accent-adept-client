import { useState, useEffect } from 'react';
import UsersData from './UsersData';

const ManageUsers = () => {
    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])
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
                        users.map((user, index) => <UsersData key={user._id} user={user} index={index} />)
                    }
                </tbody>

            </table>
        </div>
    );
};

export default ManageUsers;
