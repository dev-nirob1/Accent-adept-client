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
                        <button className="relative mr-5 inline-flex items-center justify-center px-6 py-3 text-lg font-medium tracking-tighter text-white bg-gray-800 rounded-md group">
                            <span className="absolute inset-0 w-full h-full mt-1 ml-1 transition-all duration-300 ease-in-out bg-purple-600 rounded-md group-hover:mt-0 group-hover:ml-0"></span>
                            <span className="absolute inset-0 w-full h-full bg-white rounded-md "></span>
                            <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-in-out delay-100 bg-purple-600 rounded-md opacity-0 group-hover:opacity-100 "></span>
                            <span className="relative text-purple-600 transition-colors duration-200 ease-in-out delay-100 group-hover:text-white">Explore More</span>
                        </button>


                        <button className="relative text-lg inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                            <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-yellow-500 group-hover:h-full"></span>
                            <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-black">Learn More</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Banner;