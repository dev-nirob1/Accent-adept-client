import { Helmet } from 'react-helmet-async';
import Banner from '../Banner/Banner';
import PopularClasses from '../PopularClasses/PopularClasses';
import PopularInstrutors from '../PopularInstructors/PopularInstrutors';
import NewsLetter from '../NewsLetter/NewsLetter';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Accent Adept | Learn foreign languages with efficiency</title>
            </Helmet>
            <Banner></Banner>
            <PopularInstrutors></PopularInstrutors>
            <PopularClasses></PopularClasses>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;