import { FaTrash } from "react-icons/fa";

const ManageSelected = ({ index, data, handleDelete }) => {
    const { name, className, image, price, email, userEmail, _id } = data;
    return (
        <tr>
            <td>{index + 1}</td>
            <td>
                <div className="flex justify-center flex-col gap-3">
                    <div className="avatar">
                        <div className="mask rounded w-12 h-12">
                            <img src={image} alt="course image" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{className}</div>
                    </div>
                </div>
            </td>
            <td>
                <div>{name}</div>
                <div>{email}</div>
            </td>
            <td>{userEmail} </td>
            <td>${price}</td>

            <td>
                <button onClick={() => handleDelete(_id)} className={`text-rose-600 p-1 hover:text-white hover:bg-rose-500 rounded cursor-pointer`} title="Delete" >
                    <FaTrash size={20} />
                </button>
            </td>

        </tr >
    );
};

export default ManageSelected;