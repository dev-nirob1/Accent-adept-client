import { FaTrash, FaUsers } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";
const UsersData = ({ user, index }) => {
    const { name, email, role, photo } = user;
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
                <button className="text-rose-600 p-1 hover:text-white hover:bg-rose-500 rounded" title="Delete User"><FaTrash size={20} />
                </button>
                <button className="text-green-600 p-2 hover:text-white hover:bg-green-500 rounded" title="Make Admin"><RiAdminFill size={20} />
                </button>
            </td>
        </tr>
    );
};

export default UsersData;