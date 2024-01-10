import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const Update = () => {
    const { id } = useParams()
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const [axiosSecure] = useAxiosSecure()

    const { data: singnleCourse = [] } = useQuery({
        queryKey: ['course'],
        queryFn: async () => {
            const data = await axiosSecure.get(`/course/details/${id}`)
            return data.data
        }
    })

    const handleUpdate = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const name = form.name.value;
        const className = form.className.value;
        const price = form.price.value;
        const ratings = form.ratings.value;
        const language = form.language.value;
        const updateCourseInfo = { email, name, className, price, ratings, language }

        if (user && user?.email) {
            axiosSecure.patch(`/course/updateInfo/${singnleCourse._id}`, updateCourseInfo)
                .then(response => {
                    const data = response.data;
                    if (data.insertedId > 0) {
                        toast.success('Information Updated');
                        navigate('/dashboard/added-course');
                        form.reset()
                    }
                })
        }
    };

    return (
        <form onSubmit={handleUpdate} className="border rounded-lg shadow p-6">
            <h3 className="text-center text-3xl font-semibold pt-5">Update Info</h3>
            <p className="text-lg font-medium text-center pt-2 pb-5">Added-By: {singnleCourse.host?.email || "loading..."}</p>
            <div className="grid md:grid-cols-2 gap-5">
                <div className="mb-2">
                    <label htmlFor="className" className="block text-gray-600 text-sm font-semibold mb-2">
                        Instructor Name
                    </label>
                    <input
                        type="text"
                        placeholder="Instructor Name"
                        name="name"
                        required
                        defaultValue={singnleCourse.name}
                        className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="name" className="block text-gray-600 text-sm font-semibold mb-2">
                        Class Name
                    </label>
                    <input
                        type="text"
                        placeholder="Class Name"
                        name="className"
                        required
                        defaultValue={singnleCourse.className}
                        className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="email" className="block text-gray-600 text-sm font-semibold mb-2">
                        Email
                    </label>
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        required
                        defaultValue={singnleCourse.email}
                        className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="language" className="block text-gray-600 text-sm font-semibold mb-2">
                        Course Name
                    </label>
                    <input
                        type="text"
                        placeholder="Course Name"
                        name="language"
                        required
                        defaultValue={singnleCourse.language}
                        className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="ratings" className="block text-gray-600 text-sm font-semibold mb-2">
                        Ratings
                    </label>
                    <input
                        type="number"
                        placeholder="Ratings"
                        name="ratings"
                        required
                        defaultValue={singnleCourse.ratings}
                        className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="price" className="block text-gray-600 text-sm font-semibold mb-2">
                        Price
                    </label>
                    <input
                        type="number"
                        placeholder="Price"
                        name="price"
                        required
                        defaultValue={singnleCourse.price}
                        className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
                    />
                </div>
            </div>
            <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-md hover:bg-blue-600 focus:outline-none"
            >
                Update Information
            </button>
        </form>
    );
};

export default Update;
