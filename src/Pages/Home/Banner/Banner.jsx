import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';

//TODO: customize banner
const Banner = () => {
    const [bannerData, setBannerData] = useState([])
    useEffect(() => {
        fetch('slider.json')
            .then(res => res.json())
            .then(data => {
                setBannerData(data)
            })
    }, [bannerData])
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
                        <div className='w-full h-[500px] md:h-screen'>
                            <div className='bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 h-full w-full text-white flex items-center justify-between px-9 md:pl-24 '>
                                <div className={`space-y-5 ${index === 1? 'md:w-1/2 ml-auto mr-8' : 'md:w-1/2'}`}>
                                    <h3 className='text-4xl md:text-5xl font-semibold text-gray-100'>{banner.headline}</h3>
                                    <p className='text-base md:text-lg text-gray-100'>{banner.subheadline}</p>

                                    <button className='btn btn-primary mr-5'>{banner.ctaButton.text}</button>
                                    <button className='btn btn-warning'>{banner.ctaButton.link}</button>
                                </div>
                                {/* <div>
                                    <img src="" alt="" />
                                </div> */}
                            </div>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>

        </div>
    );
};

export default Banner;