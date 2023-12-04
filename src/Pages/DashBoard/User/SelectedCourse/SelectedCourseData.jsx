import { FaTrash } from "react-icons/fa";

const SelectedCourseData = ({ index, selectedCourseData, handleDelete }) => {
    const { name, className, image, price, email, language, _id } = selectedCourseData;
    return (
        <tr>
            <td>{index + 1}</td>
            <td>
                <div className="flex items-center gap-3">
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
            <td>{language} </td>
            <td>${price}</td>

            <td>
                <button onClick={() => handleDelete(_id)} className={`text-rose-600 p-1 hover:text-white hover:bg-rose-500 rounded cursor-pointer`} title="Delete User" >
                    <FaTrash size={20} />
                </button>
                <button className="bg-green-600 p-1 hover:text-green-500 hover:bg-white border border-green-600 rounded cursor-pointer">
                    Pay
                </button>
            </td>

        </tr >
    );
};

export default SelectedCourseData;