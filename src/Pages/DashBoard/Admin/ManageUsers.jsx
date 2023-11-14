// ManageUsers.js

import { useState, useContext } from 'react';
import { FaTrash } from 'react-icons/fa';
// import { AuthContext } from './AuthContext';

const ManageUsers = () => {
    //   const { user } = useContext(AuthContext);

    // Placeholder user data
    const [users, setUsers] = useState([
        { id: 1, name: 'John Doe', email: 'john@example.com', role: 'User' },
        { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'Admin' },
        { id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User' },
        // Add more user data as needed
    ]);

    // Function to handle user deletion
    const handleDeleteUser = (id) => {
        // Remove the user with the specified id
        setUsers(users.filter((user) => user.id !== id));
    };

    // Check if the authenticated user is an admin
    //   const isAdmin = user && user.role === 'Admin';

    return (
        <div className="container mx-auto mt-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-8">Manage Users</h1>

            <div className="overflow-x-auto">
                {/* User Table */}
                <table className="min-w-full border border-gray-300">
                    <thead>
                        <tr>
                            <th className="border-b">ID</th>
                            <th className="border-b">Name</th>
                            <th className="border-b">Email</th>
                            <th className="border-b">Role</th>
                            <th className="border-b">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td className="border-b">{user.id}</td>
                                <td className="border-b">{user.name}</td>
                                <td className="border-b">{user.email}</td>
                                <td className="border-b">{user.role}</td>
                                <td className="border-b">
                                    <button
                                        className="text-red-500 hover:text-red-700"
                                        onClick={() => handleDeleteUser(user.id)}
                                    >
                                        <FaTrash />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default ManageUsers;
