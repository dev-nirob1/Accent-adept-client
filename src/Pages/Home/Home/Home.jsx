import { Helmet } from 'react-helmet-async';
import Banner from '../Banner/Banner';
import PopularClasses from '../PopularClasses/PopularClasses';
import PopularInstrutors from '../PopularInstructors/PopularInstrutors';
import NewsLetter from '../NewsLetter/NewsLetter';
import PartnerSection from '../OurPartner/PartnerSection';
import Contact from '../Contact/Contact';
import { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import WhyChooseUs from '../WhyChooseUs/WhyChooseUs';
import States from '../States/States';

const Home = () => {
    const { loading } = useContext(AuthContext)

    if (loading) {
        return <div className='h-screen w-full flex items-center justify-center'><span className="loading loading-ring loading-lg"></span></div>
    }

    return (
        <div>
            <Helmet>
                <title>Accent Adept | Learn foreign languages with efficiency</title>
            </Helmet>
            <Banner />
            <States/>
            <div className='px-2 md:px-0'>
            <PopularInstrutors />
            <PopularClasses />
            </div>
            <WhyChooseUs />
            <Contact />
            <NewsLetter />
            <PartnerSection />
        </div>
    );
};

export default Home;