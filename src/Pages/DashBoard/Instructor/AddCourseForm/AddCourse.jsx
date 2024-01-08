import { useContext, useState } from 'react';
import { AuthContext } from '../../../../AuthProvider/AuthProvider';
import { uploadImage } from '../../../../utilitis/uploadImage';
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import AddForm from './AddForm';
import { Helmet } from 'react-helmet-async';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';

const AddCourse = () => {
    const [axiosSecure] = useAxiosSecure()
    const navigate = useNavigate()
    const { user } = useContext(AuthContext);
    const [loading, setLoading] = useState(false);
    const [uploadimage1Text, setUploadimage1Text] = useState('Upload Image');
    const [uploadimage2Text, setUploadimage2Text] = useState('Upload Image');
    const [file1, setFile1] = useState(null);
    const [file2, setFile2] = useState(null);
    const imageHostingKey = import.meta.env.VITE_Image_Upload_key;
    const imageHostingUrl = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;

    const handleImage1Change = (image) => {
        setUploadimage1Text(image.name);
        setFile1(image);
    };

    const handleImage2Change = (image) => {
        setUploadimage2Text(image.name);
        setFile2(image);
    };

    const onSubmit = async (data) => {
        
        let imageData1;
        let imageData2;
        if (data.image && file1) {
            imageData1 = await uploadImage(file1, imageHostingUrl);
            const image = imageData1.data.display_url;
            console.log('image:', image);
        }

        if (data.instructorImage && file2) {
            imageData2 = await uploadImage(file2, imageHostingUrl);
            console.log(imageData2)
            const instructorImage = imageData2.data.display_url;
            console.log('instructor', instructorImage);
        }
        const courseDetails = {
            ...data,
            image: imageData1?.data.display_url,
            instructorImage: imageData2?.data.display_url,
            totalSeats: parseInt(data.availableSeats) + parseInt(data.enrolledStudents),
            host: {
                email: user?.email,
            },
            approved: false
        }
        const res = await axiosSecure.post('/courses', courseDetails)
        if (res.data.insertedId) {
            toast.success('Course Added Succesfully')
            setLoading(false)
            navigate('/dashboard/added-course')
        }

    };

    return (
        <div className="w-full mx-auto mt-8 p-8 rounded-md">
            <Helmet>
                <title>Accent Adept | Add Course</title>
            </Helmet>
            <AddForm onSubmit={onSubmit} handleImage1Change={handleImage1Change} handleImage2Change={handleImage2Change} loading={loading} uploadimage1Text={uploadimage1Text} uploadimage2Text={uploadimage2Text} />
        </div>
    );
};

export default AddCourse;