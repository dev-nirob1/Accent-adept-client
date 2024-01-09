
const ManageCoursesData = ({ index, course, handleStatus }) => {
    const { _id, approved, price, image, name, host } = course
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
                        <div className="font-bold">{name}</div>
                    </div>
                </div>
            </td>
            <td>{host.email}</td>
            <td>${price}</td>


            <td className="flex items-center gap-2">
                {approved === false && <button onClick={() => handleStatus(_id)} className="p-1 text-white bg-orange-500 rounded">Pending</button>}

                {approved && <button className="p-1 text-white bg-green-500 rounded">Approved</button>}

            </td>
        </tr >
    );
};

export default ManageCoursesData;