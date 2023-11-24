import { useEffect, useState } from "react";
import SectionTitle from "../../../SharedComponents/SectionTitle";
import InstructorsCard from "../../../SharedComponents/InstructorsCard";
import LinkButton from "../../../SharedComponents/LinkButton";
import Modal from "../../Modal/Modal"
const PopularInstrutors = () => {
    const [popularInstructors, setPopularInstructors] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/popularInstructors')
            .then(res => res.json())
            .then(data => setPopularInstructors(data))
    }, [])
    return (
        <div className="my-8 md:my-10 lg:my-16">
            <SectionTitle
                heading="Popular Instructors"
                description="Discover our highly-rated and popular language instructors. Learn from the best in the field and start your language learning journey with expert guidance. Each instructor brings a unique teaching style and cultural perspective to enrich your learning experience.">
            </SectionTitle>
            <div className="grid md:grid-cols-2 gap-6">
                {
                    popularInstructors.map(instructor => (<InstructorsCard
                        key={instructor._id}
                        instructor={instructor}
                    ></InstructorsCard>))
                }
            </div>
            <LinkButton name="See More" to="instructors" />
            <Modal />
        </div>
    );
};

export default PopularInstrutors;