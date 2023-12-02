import { useLoaderData } from 'react-router-dom';

const ViewDetails = () => {
    const courseDetails = useLoaderData();
    const {
        image,
        name,
        _id,
        aboutClass,
        className,
        classTaken,
        enrolledStudents,
        experience,
        instructorImage,
        language,
        price,
        teachersBackground,
        totalSeats, } = courseDetails;

    const handleEnroll = id => {
        console.log('enrolled', id)
    }

    return (
        <div className="container mx-auto mb-8">
            <div className="bg-white p-8 rounded-md shadow-lg">
                <h2 className='text-3xl font-semibold text-center mb-5'>About Course</h2>
                {/* Instructor Info */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    <div className="mb-8 md:w-10/12">
                        <h2 className="text-2xl font-semibold mb-4 text-center">Instructor Information</h2>
                        <div>
                            <img src={instructorImage} alt={name} className='w-full border md:h-[60vh] rounded' />
                            <div>
                                <p className="text-gray-700 font-semibold text-lg mt-3">{name}</p>
                                <p className="text-gray-500 font-medium my-4">{teachersBackground}</p>
                            </div>
                            <div className="flex justify-between items center">
                                <p className='text-gray-500 font-medium'>Experience: {experience}</p>
                                <p className='text-gray-500 font-medium'>ClassTaken: {classTaken}</p>
                            </div>
                        </div>
                    </div>

                    {/* Class Info */}
                    <div className="mb-8 md:w-10/12">
                        <h2 className="text-2xl font-semibold mb-4 text-center">Class Information</h2>
                        <div>
                            <img src={image} alt={language} className="w-full rounded md:h-[60vh] border" />
                            <p className="text-gray-700 text-lg font-semibold mt-3">{className}</p>
                            <p className="text-gray-500 my-4 font-medium">{aboutClass}</p>
                            <p className="text-gray-700 font-medium mb-4">Price: $ {price}</p>
                            <div className='flex justify-between items-center'>
                                <p className='text-gray-500 font-medium'>Enrolled Students: {enrolledStudents}</p>
                                <p className='text-gray-500 font-medium'>Total Seats: {totalSeats}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='text-center'>
                    <button onClick={() => { handleEnroll(_id) }} className="bg-blue-500 text-white py-3 px-6 rounded-md font-medium text-lg hover:bg-blue-600">
                        Enroll Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;
