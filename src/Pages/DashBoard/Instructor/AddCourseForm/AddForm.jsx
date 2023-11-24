import { useForm } from 'react-hook-form';

const AddForm = ({ onSubmit, handleImage1Change, handleImage2Change, loading, uploadimage1Text, uploadimage2Text }) => {

    const { handleSubmit, register, formState: { errors } } = useForm();

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid md:grid-cols-2 gap-4">
                    {/* instructor name  */}
                    <div className="mb-2">
                        <label htmlFor="name" className="block text-gray-600 text-sm font-bold mb-2">
                            Instructor Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            placeholder='Instructor Image'
                            className={`shadow appearance-none border rounded w-full py-[10px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.name ? 'border-red-500' : ''}`}
                            {...register('name', { required: 'Instructor Name is required' })}
                        />
                        {errors.name && <p className="text-red-500 text-xs italic">{errors.name.message}</p>}
                    </div>
                    {/* insstructor image  */}
                    <div className="mb-2">
                        <label htmlFor="email" className="block text-gray-600 text-sm font-bold mb-2">
                            Instructor Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder='Instructor Email'
                            className={`shadow appearance-none border rounded w-full py-[10px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.name ? 'border-red-500' : ''}`}
                            {...register('email', { required: 'Instructor Name is required' })}
                        />
                        {errors.name && <p className="text-red-500 text-xs italic">{errors.name.message}</p>}
                    </div>

                    {/* Languages Taught */}
                    <div className="mb-2">
                        <label htmlFor="language" className="block text-gray-600 text-sm font-bold mb-2">
                            Languages Taught
                        </label>
                        <input
                            type="text"
                            name="language"
                            placeholder='Language Name'
                            className={`shadow appearance-none border rounded w-full py-[10px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.language ? 'border-red-500' : ''}`}
                            {...register('language', { required: 'Languages Taught is required' })}
                        />
                        {errors.language && <p className="text-red-500 text-xs italic">{errors.language.message}</p>}
                    </div>
                    {/* Class Taken */}
                    <div className="mb-2">
                        <label htmlFor="classTaken" className="block text-gray-600 text-sm font-bold mb-2">
                            Class Taken
                        </label>
                        <input
                            type="number"
                            name="classTaken"
                            placeholder='Class Taken'
                            className={`shadow appearance-none border rounded w-full py-[10px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.language ? 'border-red-500' : ''}`}
                            {...register('classTaken', { required: 'How many class taken by instructor is required' })}
                        />
                        {errors.language && <p className="text-red-500 text-xs italic">{errors.language.message}</p>}
                    </div>

                    {/* Experience */}
                    <div className="mb-2">
                        <label htmlFor="experience" className="block text-gray-600 text-sm font-bold mb-2">
                            Experience
                        </label>
                        <input
                            type="text"
                            name="experience"
                            placeholder='Experience'
                            className={`shadow appearance-none border rounded w-full py-[10px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.experience ? 'border-red-500' : ''}`}
                            {...register('experience', { required: 'Experience is required' })}
                        />
                        {errors.experience && <p className="text-red-500 text-xs italic">{errors.experience.message}</p>}
                    </div>

                    {/* Class Name */}
                    <div className="mb-2">
                        <label htmlFor="className" className="block text-gray-600 text-sm font-bold mb-2">
                            Class Name
                        </label>
                        <input
                            type="text"
                            name="className"
                            placeholder='Class Name'
                            className={`shadow appearance-none border rounded w-full py-[10px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.className ? 'border-red-500' : ''}`}
                            {...register('className', { required: 'Class Name is required' })}
                        />
                        {errors.className && <p className="text-red-500 text-xs italic">{errors.className.message}</p>}
                    </div>

                    {/* Enrolled Students */}
                    <div className="mb-2">
                        <label htmlFor="enrolledStudents" className="block text-gray-600 text-sm font-bold mb-2">
                            Enrolled Students
                        </label>
                        <input
                            type="number"
                            name="enrolledStudents"
                            placeholder='Enrolled Students'
                            className={`shadow appearance-none border rounded w-full py-[10px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.enrolledStudents ? 'border-red-500' : ''}`}
                            {...register('enrolledStudents', { required: 'Enrolled Students is required', min: { value: 1, message: 'Please enter a value greater than 0' } })}
                        />
                        {errors.enrolledStudents && <p className="text-red-500 text-xs italic">{errors.enrolledStudents.message}</p>}
                    </div>

                    {/* Available Seats */}
                    <div className="mb-2">
                        <label htmlFor="availableSeats" className="block text-gray-600 text-sm font-bold mb-2">
                            Available Seats
                        </label>
                        <input
                            type="number"
                            name="availableSeats"
                            placeholder='Available Seats'
                            className={`shadow appearance-none border rounded w-full py-[10px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.availableSeats ? 'border-red-500' : ''}`}
                            {...register('availableSeats', { required: 'Available Seats is required', min: { value: 1, message: 'Please enter a value greater than 0' } })}
                        />
                        {errors.availableSeats && <p className="text-red-500 text-xs italic">{errors.availableSeats.message}</p>}
                    </div>

                    {/* Price */}
                    <div className="mb-2">
                        <label htmlFor="price" className="block text-gray-600 text-sm font-bold mb-2">
                            Price
                        </label>
                        <input
                            type="number"
                            name="price"
                            placeholder='Price'
                            className={`shadow appearance-none border rounded w-full py-[10px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.price ? 'border-red-500' : ''}`}
                            {...register('price', { required: 'Price is required', min: { value: 1, message: 'Please enter a value greater than 0' } })}
                        />
                        {errors.price && <p className="text-red-500 text-xs italic">{errors.price.message}</p>}
                    </div>

                    {/* Ratings */}
                    <div className="mb-2">
                        <label htmlFor="ratings" className="block text-gray-600 text-sm font-bold mb-2">
                            Ratings
                        </label>
                        <input
                            type="number"
                            name="ratings"
                            placeholder='Ratings'
                            className={`shadow appearance-none border rounded w-full py-[10px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.ratings ? 'border-red-500' : ''}`}
                            {...register('ratings', { required: 'Ratings is required', min: { value: 1, message: 'Please enter a value greater than 0' }, max: { value: 5, message: 'Please enter a value less than or equal to 5' }, pattern: { value: /^[0-9]*\.?[0-9]+$/, message: 'Please enter a valid numeric value for ratings' } })}
                        />
                        {errors.ratings && <p className="text-red-500 text-xs italic">{errors.ratings.message}</p>}
                    </div>

                    {/* #Hashtag */}
                    <div className="mb-2">
                        <label htmlFor="hashtag" className="block text-gray-600 text-sm font-bold mb-2">
                            #Hashtag
                        </label>
                        <input
                            type="text"
                            name="hashtag"
                            placeholder='#Hashtag'
                            className={`shadow appearance-none border rounded w-full py-[10px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.hashtag ? 'border-red-500' : ''}`}
                            {...register('hashtag', { required: '#Hashtag is required' })}
                        />
                        {errors.hashtag && <p className="text-red-500 text-xs italic">{errors.hashtag.message}</p>}
                    </div>

                    {/* Iframe URL */}
                    <div className="mb-2">
                        <label htmlFor="iframeUrl" className="block text-gray-600 text-sm font-bold mb-2">
                            Iframe URL
                        </label>
                        <input
                            type="text"
                            name="iframeUrl"
                            placeholder="Enter video URL"
                            className="shadow appearance-none border rounded w-full py-[10px] px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            {...register('iframeUrl', {
                                required: 'Video link is required like IframeUrl',
                                // pattern: {
                                //     value: /^(https?:\/\/)?([\w.]+)\.([a-z]{2,})(\/[^/]+)*\/?$/,
                                //     message: 'Invalid iframe URL format',
                                //   },
                            })}
                        />
                        {errors.iframeUrl && <p className="text-red-500 text-xs italic">{errors.iframeUrl.message}</p>}
                    </div>

                    {/* Instructor Image */}
                    <div className="mb-2">
                        <label htmlFor="instructorImage" className="block text-gray-600 text-sm font-bold mb-2">
                            Instructor Image
                        </label>
                        <div className="relative bg-white border-gray-300 rounded shadow">
                            <div className="flex flex-col w-max mx-auto text-center">
                                <label htmlFor="instructorImage" className="py-[6px] cursor-pointer">
                                    <input
                                        type="file"
                                        name="instructorImage"
                                        id="instructorImage"
                                        {...register('instructorImage', { required: 'Instructor Image is required' })}
                                        accept="image/*"
                                        className={`text-sm cursor-pointer w-36 opacity-0 absolute ${errors.instructorImage ? 'border-red-500' : ''}`}
                                        onChange={(e) => handleImage2Change(e.target.files[0])}
                                    />
                                    <div className={`bg-blue-500 text-white border border-gray-300 rounded text-lg font-medium cursor-pointer py-1 px-3 hover:bg-blue-600 ${errors.instructorImage ? 'border-red-500' : ''}`}>
                                        {uploadimage2Text}
                                    </div>
                                </label>
                            </div>
                        </div>
                        {errors.instructorImage && <p className="text-red-500 text-xs italic">{errors.instructorImage.message}</p>}
                    </div>

                    {/* Classes Image */}
                    <div className="mb-2">
                        <label htmlFor="classImage" className="block text-gray-600 text-sm font-bold mb-2">
                            Classes Image
                        </label>
                        <div className="relative bg-white border-gray-300 rounded shadow">
                            <div className="flex flex-col w-max mx-auto text-center">
                                <label htmlFor="image" className="py-[6px] cursor-pointer">
                                    <input
                                        type="file"
                                        name="image"
                                        id="image"
                                        {...register('image', { required: 'Image is required' })}
                                        accept="image/*"
                                        className={`text-sm cursor-pointer w-36 opacity-0 absolute ${errors.image ? 'border-red-500' : ''}`}
                                        onChange={(e) => handleImage1Change(e.target.files[0])}
                                    />
                                    <div className={`bg-blue-500 text-white border border-gray-300 rounded text-lg font-medium cursor-pointer py-1 px-3 hover:bg-blue-600 ${errors.image ? 'border-red-500' : ''}`}>
                                        {uploadimage1Text}
                                    </div>
                                </label>
                            </div>
                        </div>
                        {errors.classImage && <p className="text-red-500 text-xs italic">{errors.classImage.message}</p>}
                    </div>

                </div>

                {/* About Teacher */}
                <div className="mb-2">
                    <label htmlFor="background" className="block text-gray-600 text-sm font-bold mb-2">
                        About Teacher
                    </label>
                    <textarea
                        name="teachersBackground"
                        placeholder="Write something about the teacher background"
                        className={`resize-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.background ? 'border-red-500' : ''}`}
                        rows="4"
                        {...register('teachersBackground', { required: 'About Teacher is required' })}
                    />
                    {errors.teachersBackground && <p className="text-red-500 text-xs italic">{errors.teachersBackground.message}</p>}
                </div>

                {/* About Class */}
                <div className="mb-4">
                    <label htmlFor="description" className="block text-gray-600 text-sm font-bold mb-2">
                        About Class
                    </label>
                    <textarea
                        name="aboutClass"
                        placeholder="Write something about this Course"
                        className={`resize-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.aboutClass ? 'border-red-500' : ''}`}
                        rows="4"
                        {...register('aboutClass', { required: 'About Class is required' })}
                    />
                    {errors.aboutClass && <p className="text-red-500 text-xs italic">{errors.aboutClass.message}</p>}
                </div>

                <div className="text-center">
                    <button
                        type="submit"
                        className="bg-blue-500 w-1/2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        disabled={loading}
                    >
                        {loading ? 'Adding Course...' : 'Add Course'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AddForm;
