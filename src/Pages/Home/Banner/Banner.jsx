import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Banner = () => {

    return (
        <div className='w-full h-auto lg:h-screen xl:h-auto bg-gradient-to-b from-[#1b7d90] to-[#16697A]'>
            <div className="grid py-8 md:py-0 text-center md:text-left px-5 grid-cols-1 md:grid-cols-2 gap-5 items-center justify-center overflow-hidden">
                <div className='h-full overflow-hidden flex items-center justify-center'>
                    <img className='w-fit h-full' src="/images/banner.png" alt="" />
                </div>
                <div>
                    <h3 className='text-3xl md:text-5xl font-semibold text-gray-100 mb-8'>Unlock the Power of Language</h3>
                    <p className='text-base md:text-lg ps-3 text-gray-100 border-l-4'>At AccentAdept, we&apos;re dedicated to helping you master the nuances of accents and dialects from around the world. Explore our diverse range of courses and embark on a journey to become a confident and effective communicator.</p>
                    <div className='mt-8'>
                        <button className='px-3 md:px-5 lg:px-7 py-2 md:py-3 lg:py-4 bg-white text-indigo-800 hover:text-white hover:bg-indigo-800 rounded-lg font-medium mr-3 md:mr-5'>Explore Courses</button>
                        <button className='px-3 md:px-5 lg:px-7 py-2 md:py-3 lg:py-4 bg-yellow-400 hover:bg-yellow-500 text-neutral rounded-lg font-medium '>Learn More</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Banner;