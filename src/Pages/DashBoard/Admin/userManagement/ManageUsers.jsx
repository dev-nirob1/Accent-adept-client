import { useContext } from 'react';
import UsersData from './UsersData';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';
import { useQuery, } from '@tanstack/react-query'
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const ManageUsers = () => {
    const { loading } = useContext(AuthContext)
    const [axiosSecure] = useAxiosSecure()

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            // console.log('res from axios', res.data);
            return res.data
        }
    })

    const handleMakeAdmin = async (id) => {
        const res = await axiosSecure.patch(`/users/admin/${id}`)
        if (res.data.modifiedCount) {
            refetch();
            toast.success('Made Admin');
        }
    }

    const handleMakeInstructor = async (id) => {
        const res = await axiosSecure.patch(`/users/instructor/${id}`)
        if (res.data.modifiedCount) {
            refetch()
            toast.success('Made Instructor ');
        }
    }
    const handleDeleteUser = async (id) => {
        const res = await axiosSecure.delete(`/users/${id}`)
        if (res.data.deletedCount) {
            const result = await Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            });

            if (result.isConfirmed) {
                refetch();
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        }
    }

    return (
        <div className="overflow-x-auto p-5">
            <Helmet>
                <title>Accent Adept | Manage Users</title>
            </Helmet>
            <h2 className='text-3xl font-semibold text-center my-8'>Manage User</h2>
            <table className="table overflow-x-scroll border">
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
