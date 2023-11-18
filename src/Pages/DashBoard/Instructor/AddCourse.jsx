
const AddCourse = () => {
    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const language = form.language.value;
        const experience = form.experience.value;
        const className = form.className.value;
        const enrolledStudents = parseInt(form.enrolledStudents.value);
        const availableSeats = parseInt(form.availableSeats.value);
        const totalSeats = parseInt(enrolledStudents + availableSeats)
        const price = parseInt(form.price.value);
        const ratings = form.ratings.value;
        const courseDetails = { name, email, language, experience, className, enrolledStudents, availableSeats, totalSeats, price, ratings }
        console.log(courseDetails)
    }
    return (
        <div className="w-full mx-auto mt-8 p-8 bg-gray-100 rounded-md">
            <form onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 items-center gap-4">
                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm font-bold mb-2" >
                            Instructor Name
                        </label>
                        <input
                            required
                            type="text"
                            name="name"
                            placeholder="Instructor Name"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm font-bold mb-2" >
                            Instructor Email
                        </label>
                        <input
                            required
                            type="email"
                            name="email"
                            placeholder="email"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <span className="block text-gray-600 text-sm font-bold mb-2">Classes Image</span>
                        <div className="relative bg-white border-gray-300 rounded shadow">
                            <div className="flex flex-col w-max mx-auto text-center">
                                <label htmlFor="image1" className="p-1 cursor-pointer">
                                    <input
                                        className="text-sm cursor-pointer w-36 opacity-0 absolute"
                                        required
                                        type="file"
                                        name="image1"
                                        id="image1"
                                        accept="image/*"
                                    />
                                    <div className="bg-blue-500 text-white border border-gray-300 rounded text-lg font-medium cursor-pointer px-3 hover:bg-blue-600">
                                        Upload Image
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>

                    {/* <div className="mb-4">
                        <label className="block text-gray-600 text-sm font-bold mb-2" >
                            Teaching Style
                        </label>
                        <input
                            type="text"
                            name="teachingStyle"
                            placeholder="Teaching Style"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div> */}
                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm font-bold mb-2" >
                            Languages Taught
                        </label>
                        <input
                            required
                            type="text"
                            name="language"
                            placeholder="Languages Taught"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm font-bold mb-2" >
                            Experience
                        </label>
                        <input
                            required
                            type="text"
                            name="experience"
                            placeholder="Experience"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm font-bold mb-2" >
                            Class Name
                        </label>
                        <input
                            required
                            type="text"
                            name="className"
                            placeholder="Class Name"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm font-bold mb-2" >
                            Enrolled Students
                        </label>
                        <input
                            required
                            type="number"
                            name="enrolledStudents"
                            placeholder="Enrolled Students"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    {/* <div className="mb-4">
                        <label className="block text-gray-600 text-sm font-bold mb-2" >
                            Total Seats
                        </label>
                        <input
                            type="number"
                            name="totalSeats"
                            placeholder="Total Seats"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div> */}
                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm font-bold mb-2" >
                            Available Seats
                        </label>
                        <input
                            required
                            type="number"
                            name="availableSeats"
                            placeholder="Available Seats"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm font-bold mb-2" >
                            Price
                        </label>
                        <input
                            required
                            type="number"
                            name="price"
                            placeholder="Price"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <span className="block text-gray-600 text-sm font-bold mb-2">Classes Image</span>
                        <div className="relative bg-white border-gray-300 rounded shadow">
                            <div className="flex flex-col w-max mx-auto text-center">
                                <label htmlFor="image" className="p-1 cursor-pointer">
                                    <input
                                        className="text-sm cursor-pointer w-36 opacity-0 absolute"
                                        required
                                        type="file"
                                        name="image"
                                        id="image"
                                        accept="image/*"
                                    />
                                    <div className="bg-blue-500 text-white border border-gray-300 rounded text-lg font-medium cursor-pointer px-3 hover:bg-blue-600">
                                        Upload Image
                                    </div>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm font-bold mb-2" >
                            Ratings
                        </label>
                        <input
                            required
                            type="number"
                            name="ratings"
                            placeholder="Ratings"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600 text-sm font-bold mb-2" >
                            #Hashtag
                        </label>
                        <input
                            required
                            type="text"
                            name="hastag"
                            placeholder="#hashtag"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                    </div>

                </div>
                <div className="grid grid-cols-2 mb-4 gap-5">
                    <div>
                        <label className="block text-gray-600 text-sm font-bold mb-2">
                            About Teacher
                        </label>
                        <textarea
                            required
                            placeholder="Write something about the teacher background"
                            name="background"
                            className="resize-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            rows="4"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-600 text-sm font-bold mb-2">
                            About Class
                        </label>
                        <textarea
                            required
                            name="description"
                            placeholder="Write something about this Course"
                            className="resize-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            rows="4"
                        />
                    </div>
                </div>

                <div className="text-center">
                    <button
                        type="submit"
                        className="bg-blue-500 w-1/2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Add Course
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddCourse;