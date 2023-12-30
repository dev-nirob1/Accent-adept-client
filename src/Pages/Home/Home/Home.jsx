import { Helmet } from 'react-helmet-async';
import Banner from '../Banner/Banner';
import PopularClasses from '../PopularClasses/PopularClasses';
import PopularInstrutors from '../PopularInstructors/PopularInstrutors';
import NewsLetter from '../NewsLetter/NewsLetter';
import PartnerSection from '../OurPartner/PartnerSection';
import Contact from '../Contact/Contact';
import { useContext, useEffect, useState } from 'react';
import Alert from '../Alert/Alert';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';

const Home = () => {
    const [showAlert, setShowAlert] = useState(false);
    const { loading } = useContext(AuthContext)

    useEffect(() => {
        const delay = setTimeout(() => {
            setShowAlert(true);
        }, 2000);

        return () => clearTimeout(delay);
    }, []);

    if (loading) {
        return <div className='h-screen w-full flex items-center justify-center'><span className="loading loading-ring loading-lg"></span></div>
    }

    return (
        <div>
            <Helmet>
                <title>Accent Adept | Learn foreign languages with efficiency</title>
            </Helmet>
            {
                showAlert && <Alert message={'Please note that all images on Accent Adept are sourced from the internet for practice purposes only, and we respect the rights of content creators'} />
            }
            <Banner />
            <PopularInstrutors />
            <PopularClasses />
            <WhyChooseUs />
            <Contact />
            <NewsLetter />
            <PartnerSection />
        </div>
    );
};

export default Home;