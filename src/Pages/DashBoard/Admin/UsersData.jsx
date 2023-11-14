import { FaTrash, FaUsers } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";

const UsersData = ({ user, index, handleMakeAdmin, handleDeleteUser }) => {
    const { name, email, role, photo, _id } = user;

    return (
        <tr>
            <td>{index + 1}</td>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask rounded w-12 h-12">
                            <img src={photo} alt="user image" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                    </div>
                </div>
            </td>
            <td>{email}</td>
            <td><FaUsers className="inline mr-2" /> {role}</td>
            <td className="space-x-2">
                <button onClick={() => handleDeleteUser(_id)} className={`text-rose-600 p-1 hover:text-white hover:bg-rose-500 rounded cursor-pointer ${role === 'admin' && 'opacity-50 cursor-not-allowed'}`} title="Delete User" disabled={role === 'admin'}><FaTrash size={20} />
                </button>
                <button onClick={() => handleMakeAdmin(_id)} className={`text-green-600 p-2 hover:text-white hover:bg-green-500 rounded cursor-pointer  ${role === 'admin' && 'opacity-50 cursor-not-allowed'}`} title="Make Admin" disabled={role === 'admin'}><RiAdminFill size={20} />
                </button>
            </td>
        </tr>
    );
};

export default UsersData;