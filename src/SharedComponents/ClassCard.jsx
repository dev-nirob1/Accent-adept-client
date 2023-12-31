import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Link } from 'react-router-dom';

const ClassCard = ({ classItem }) => {
    const { _id, availableSeats, name, language, image, price, ratings } = classItem;

    return (
        <div className={`border shadow-xl cursor-pointer ${availableSeats === 0 ? 'bg-red-200' : ''} rounded-lg`}>
            <img className="rounded-lg rounded-b-none h-64 w-full" src={image} alt="image" />

            <div className="p-5">
                <p className="font-semibold text-green-700 mb-1 hover:underline cursor-pointer w-fit">#Language</p>
                <h2 className="text-xl font-semibold text-gray-800"><span>Class:</span> {language}</h2>
                <h4 className={"text-2xl font-semibold my-2 text-gray-800"}>Instructor: {name}</h4>
                <div className="flex justify-between items-center">
                    <p className="text-lg text-gray-700">Available Seats: {availableSeats}</p>
                    <p className="font-medium text-gray-600 text-lg">Fee: $ {price}</p>
                </div>
                <div className="divider"></div>
                <div className="flex justify-between items-center">
                    <div className='flex items-center gap-2'> <span >
                        <Rating style={{ maxWidth: 100 }} value={ratings} readOnly />
                    </span>{ratings} </div>
                    <div>
                        <Link to={`/course/details/${_id}`}>
                            <button className="border border-blue-500 px-4 py-2 rounded font-semibold bg-blue-500 text-white hover:text-blue-600 hover:bg-white">View Details
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;