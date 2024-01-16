import { Link } from 'react-router-dom';
import { FaGraduationCap } from 'react-icons/fa';
import { PieChart, Pie, Tooltip, Cell } from 'recharts';
import { Helmet } from 'react-helmet-async';

const data = [
    { name: 'French', rating: 4.5 },
    { name: 'English', rating: 3.8 },
    { name: 'Hindi', rating: 4.2 },
    { name: 'Spanish', rating: 4.5 },
    { name: 'Arabic', rating: 4.1 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const InstructorHome = () => {


    return (
        <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center p-4 md:p-8">
            <Helmet>
                <title>Accent Adept | Instructor Home</title>
            </Helmet>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                {/* Courses Section */}
                <Link to="/dashboard/added-course" className="bg-blue-500 text-white p-8 rounded-lg flex flex-col items-center justify-center transition-transform transform hover:scale-105">
                    <FaGraduationCap size={80} className="text-4xl mb-4" />
                    <h2 className="text-2xl font-semibold mb-2">My Courses</h2>
                    <p className="text-center text-gray-300">Explore and manage your courses</p>
                </Link>

                {/* Overall Performance Section */}
                <div className="bg-white p-8 rounded-lg flex flex-col items-center justify-center shadow-md">
                    <h2 className="text-2xl font-semibold mb-4">Overall Performance</h2>
                    <PieChart width={300} height={220}>
                        <Pie
                            data={data}
                            dataKey="rating"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={80}
                            fill="#8884d8"
                            label
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </div>
            </div>

            <div className="mt-8 w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-between">

                {/* Countdown Section */}
                <div className='flex p-10 flex-col items-center justify-center bg-white h-full rounded-lg'>
                    <h2 className="text-3xl text-center text-neutral-700 font-semibold mb-4">Next Class</h2>
                    <div className="flex items-center font-semibold gap-5 mt-5 uppercase">
                        <div className="flex flex-col items-center">
                            <div className="text-xl text-neutral-600 mr-2">
                               00
                            </div>
                            <div className="text-lg mr-2">
                                days
                            </div>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className="text-xl text-neutral-600 mr-2">
                                00
                            </div>
                            <div className="text-lg mr-2">
                                hours
                            </div>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className="text-xl text-neutral-600 mr-2">
                                00
                            </div>
                            <div className="text-lg mr-2">
                                minutes
                            </div>
                        </div>

                        <div className="flex flex-col items-center">
                            <div className="text-xl text-neutral-600">
                                00
                            </div>
                            <div className="text-lg ml-2">
                                seconds
                            </div>
                        </div>

                    </div>
                </div>

                {/* Add Class Card */}
                <div className="bg-white p-8 rounded-lg shadow-md">
                    <div className="mb-4 w-full h-48 bg-gray-300 rounded-lg"></div>
                    <Link
                        to="/dashboard/add-course"
                        className="bg-blue-500 text-white py-2 px-4 rounded-full font-semibold hover:bg-blue-700 transition duration-300 block text-center"
                    >
                        Add Class
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default InstructorHome;
