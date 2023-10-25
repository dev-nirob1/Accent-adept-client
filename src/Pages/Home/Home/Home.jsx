import Banner from '../Banner/Banner';
import PopularClasses from '../PopularClasses/PopularClasses';
import PopularInstrutors from '../PopularInstructors/PopularInstrutors';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopularInstrutors></PopularInstrutors>
            <PopularClasses></PopularClasses>
        </div>
    );
};

export default Home;