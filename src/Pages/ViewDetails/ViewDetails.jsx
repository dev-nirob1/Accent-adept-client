import { useContext, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import toast from 'react-hot-toast'

const ViewDetails = () => {
    const { user, role } = useContext(AuthContext)
    const navigate = useNavigate()
    const courseDetails = useLoaderData();
    // console.log(courseDetails)

    const {
        image,
        _id,
        name,
        email,
        aboutClass,
        className,
        classTaken,
        enrolledStudents,
        experience,
        instructorImage,
        language,
        price,
        teachersBackground,
        totalSeats, host } = courseDetails;

    const handleSelectCourse = () => {

        if (user && user?.email) {
            const savedCourse = { courseId: _id, email, className, image, name, price, language, hostEmail: host.email, userEmail: user?.email }
            console.log(savedCourse)

            fetch('http://localhost:5000/selectCourses', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(savedCourse)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        toast.success('You Have Selected this course')
                        navigate('/dashboard/selected-class')
                    }
                })
        }
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className="container mx-auto mb-8">
            <Helmet>
                <title>Accent Adept | Course Details</title>
            </Helmet>
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
                                <p className="text-gray-700 font-semibold text-lg mt-1">Email: {email}</p>
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
                    <button onClick={handleSelectCourse} className={`bg-blue-500 text-white py-3 px-6 rounded-md font-medium text-lg hover:bg-blue-600 `} disabled={role === 'instructor' || role === 'admin'}>
                        Enroll Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;
