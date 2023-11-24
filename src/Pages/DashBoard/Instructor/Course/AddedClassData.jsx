import { FaTrash } from "react-icons/fa";

const AddedClassData = ({ index, data, handleDelete }) => {
    const { _id, price, image, className, name, status } = data;
    
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

            <td>{status} </td>
            <td>
                <button onClick={() => handleDelete(_id)} className={`text-rose-600 p-1 hover:text-white hover:bg-rose-500 rounded cursor-pointer`} title="Delete User" >
                    <FaTrash size={20} />
                </button>
            </td>

        </tr >
    );
};

export default AddedClassData;