import { useEffect, useState } from "react";
import SectionTitle from "../../../SharedComponents/SectionTitle";
import InstructorsCard from "../../../SharedComponents/InstructorsCard";
import LinkButton from "../../../SharedComponents/LinkButton";
import Modal from "../../Modal/Modal"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';


const PopularInstrutors = () => {
    const apiUrl = import.meta.env.VITE_API;

    const [popularInstructors, setPopularInstructors] = useState([])
    useEffect(() => {
        fetch(`${apiUrl}/popularInstructors`)
            .then(res => res.json())
            .then(data => setPopularInstructors(data))
    }, [apiUrl])

    return (
        <div className="my-8 md:my-10 lg:my-16">
            <SectionTitle
                heading="Popular Instructors"
                description="Discover our highly-rated and popular language instructors. Learn from the best in the field and start your language learning journey with expert guidance.">
            </SectionTitle>

            <Swiper
                rewind={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                slidesPerView={3}
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
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                }}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
            >
                {
                    popularInstructors.map((instructor) => <SwiperSlide key={instructor._id}>
                        <div>
                            <InstructorsCard instructor={instructor} />
                        </div>
                    </SwiperSlide>)
                }
                <LinkButton name='See More' to={'classes'} />

            </Swiper>

            <Modal />
        </div>
    );
};

export default PopularInstrutors;