
const UsersEnrolled = ({ data }) => {
    const { user_email, date, transactionId, courseName, price, className } = data;
    return (
        <tr className="text-sm">
            <td>{transactionId}</td>
            <td>
                <p>{courseName}</p>
                <div className="font-medium">{className}</div>

            </td>
            <td>{date}</td>
            <td>{user_email} </td>
            <td>${price}</td>

            <td><p className="text-green-700 bg-green-400 rounded-lg">paid</p></td>

        </tr >
    );
};

export default UsersEnrolled;