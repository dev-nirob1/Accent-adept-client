import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import banner1 from './../../../assets/banner1.json'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';
import Lottie from "lottie-react";

//TODO: customize banner
const Banner = () => {
    const [bannerData, setBannerData] = useState([])
    useEffect(() => {
        fetch('slider.json')
            .then(res => res.json())
            .then(data => {
                setBannerData(data)
            })
    }, [])
    return (
        <div>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {
                    bannerData.map((banner, index) => <SwiperSlide key={index}>
                        <div className='w-full h-[80vh] md:h-screen'>
                            <div className={`bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-400 h-full w-full text-white flex gap-5 items-center justify-between px-10 md:pl-24 ${index === 1 && 'flex-row-reverse'}`}>
                                <div className='space-y-5 w-full md:w-1/2'>
                                    <h3 className='text-3xl md:text-5xl font-semibold text-gray-100'>{banner.headline}</h3>
                                    <p className='text-base md:text-lg text-gray-100'>{banner.subheadline}</p>

                                    <div>
                                        <button className='px-3 md:px-5 lg:px-7 py-2 md:py-3 lg:py-4 bg-white text-indigo-800 hover:text-white hover:bg-indigo-800 rounded-lg font-medium mr-3 md:mr-5'>{banner.ctaButton.text}</button>
                                        <button className='px-3 md:px-5 lg:px-7 py-2 md:py-3 lg:py-4 bg-yellow-400 hover:bg-yellow-500 text-neutral rounded-lg font-medium '>{banner.ctaButton.link}</button>
                                    </div>
                                </div>
                                <div className="hidden md:block md:w-1/2">
                                    <Lottie animationData={banner1} />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>

        </div>
    );
};

export default Banner;