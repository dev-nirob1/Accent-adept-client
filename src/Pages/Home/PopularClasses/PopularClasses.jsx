import { useEffect, useState } from "react";
import SectionTitle from "../../../SharedComponents/SectionTitle";
import ClassCard from "../../../SharedComponents/ClassCard";
import LinkButton from "../../../SharedComponents/LinkButton";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import './popularClass.css'
import 'swiper/css';
import 'swiper/css/navigation';

const PopularClasses = () => {
    const [PopularClasses, setPopularClasses] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/popularClasses')
            .then(res => res.json())
            .then(data => setPopularClasses(data))
    }, [])
    return (
        <div className="my-8 md:my-10 lg:my-16">

            <SectionTitle
                heading="Explore Our Popular Classes"
                description="Discover our most sought-after language classes designed to help you master a new language. Each class is tailored to boost your language skills and cultural understanding.">
            </SectionTitle>

            <Swiper
                rewind={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                slidesPerView={4}
                spaceBetween={30}
                navigation={true}

                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },

                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                }}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
            >

                {
                    PopularClasses.map((classItem) => <SwiperSlide key={classItem._id}>
                        <div>
                            <ClassCard classItem={classItem} />
                        </div>
                    </SwiperSlide>)
                }
                <LinkButton name='See More' to={'classes'} />
            </Swiper>

        </div>
    );
};

export default PopularClasses;