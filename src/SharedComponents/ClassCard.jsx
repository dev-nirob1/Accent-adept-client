
const ClassCard = ({ classItem }) => {
    const { instructorName, className, availableSeats, price, ratings, hashtags } = classItem
    return (
        <div className={`border ${availableSeats === 0 ? 'text-red-600' : ''} rounded-lg`}>
            <img className="rounded-lg rounded-b-none" src="https://images.unsplash.com/photo-1604177091072-b7b677a077f6?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kaWFuJTIwc3R1ZGVudHxlbnwwfHwwfHx8MA%3D%3D" alt="image" />

            <div className="p-5">
                <p className="font-semibold text-green-700 mb-1 hover:underline cursor-pointer w-fit">{hashtags[1]}</p>
                <h2 className="text-xl font-semibold text-gray-800">{className}</h2>
                <h4 className="text-2xl font-semibold my-2 text-gray-800">Instructor: {instructorName}</h4>
                <div className="flex justify-between items-center">
                    <p className="text-lg text-gray-700">Available Seats: {availableSeats}</p>
                    <p className="font-medium text-gray-600 text-lg">Fee: $ {price}</p>
                </div>
                <div className="divider"></div>
                <div className="flex justify-between items-center">
                    <p>Ratings: {ratings}</p>
                    <button className="border border-blue-500 px-4 py-2 rounded font-semibold bg-blue-500 text-white hover:text-blue-600 hover:bg-white">Select</button>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;