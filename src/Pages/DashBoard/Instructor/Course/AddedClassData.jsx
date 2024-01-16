import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from 'react-router-dom'
const AddedClassData = ({ index, data, handleDelete }) => {
    const { _id, price, image, className, name, approved,denied } = data;

    return (
        <tr>
            <td>{index + 1}</td>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask rounded w-12 h-12">
                            <img src={image} alt="user image" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{className}</div>
                    </div>
                </div>
            </td>
            <td>{name}</td>
            <td>{price}</td>

            <td>
                {
                    approved === false && !denied && (
                        <button className="p-1 text-white bg-orange-500 rounded m-2">Pending</button>
                    )}

                {
                    approved === true && !denied && (
                        <button className="p-1 text-white bg-green-500 rounded">Approved</button>
                    )}

                {
                    denied && (
                        <button className="p-1 m-2 text-white bg-red-500 rounded">Denied</button>
                    )}
            </td>

            <td className="flex items-center gap-2">
                <Link className="text-orange-400 p-1 hover:text-white hover:bg-orange-500 rounded cursor-pointer" to={`/dashboard/update/${_id}`} >
                    <FaEdit size={20} title="Update Information" />
                </Link>

                <button onClick={() => handleDelete(_id)} className='text-rose-600 p-1 hover:text-white hover:bg-rose-500 rounded cursor-pointer' title="Delete Course" >
                    <FaTrash size={20} />
                </button>

            </td>

        </tr >
    );
};

export default AddedClassData;