import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Link } from 'react-router-dom';

const ClassCard = ({ classItem }) => {
    const { _id, availableSeats, name, language, image, price, ratings } = classItem;

    return (
        <div className={`border shadow-xl cursor-pointer ${availableSeats == 0 ? 'bg-red-200' : ''} rounded-lg`}>
            <img className="rounded-lg rounded-b-none h-64 w-full" src={image} alt="image" />

            <div className="p-5">
                <p className="font-semibold text-green-700 mb-1 hover:underline cursor-pointer w-fit">#Language</p>
                <h2 className="text-xl font-semibold text-gray-800"><span>Class:</span> {language}</h2>
                <h4 className={"text-2xl font-semibold my-2 text-gray-800"}>Teacher: {name}</h4>
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
                            <button className="relative inline-flex items-center justify-center px-5  py-2 md:py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border border-indigo-500 rounded-lg shadow-md group">
                                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-indigo-500 group-hover:translate-x-0 ease" disabled={availableSeats == 0}>
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                </span>
                                <span className="absolute flex items-center justify-center w-full h-full text-indigo-500 transition-all duration-300 transform group-hover:translate-x-full ease">View Details</span>
                                <span className="relative invisible">View Details</span>

                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClassCard;