
const ManageCoursesData = ({ index, course, handleStatus, handleDenied }) => {
    const { _id, approved, price, image, name, denied, host } = course
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
                {approved === false && denied === false && (
                    <>
                        <button onClick={() => handleStatus(_id)} className="p-1 text-white bg-orange-500 rounded">Approve</button>
                        <button onClick={() => handleDenied(_id)} className="p-1 text-white bg-red-500 rounded">Deny</button>
                    </>
                )}

                {approved === true && denied === false && (
                    <button className="p-1 text-white bg-green-500 rounded">Approved</button>
                )}

                {denied === true && (
                    <button className="p-1 text-white bg-red-500 rounded">Denied</button>
                )}

            </td>
        </tr >
    );
};

export default ManageCoursesData;