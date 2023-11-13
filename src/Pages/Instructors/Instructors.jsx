import SectionTitle from "../../SharedComponents/SectionTitle";
import InstructorsCard from "../../SharedComponents/InstructorsCard";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";

const Instructors = () => {
    const [instructors, setInstructors] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/instructors')
            .then(res => res.json())
            .then(data => setInstructors(data))
            .catch(err => console.log(err))
    }, [])
    console.log(instructors)
    return (
        <div className="my-8 md:my-16">
            <Helmet>
                <title>Accent Adept | Instructors</title>
            </Helmet>
            <SectionTitle
                heading="Meet Our Expert Instructors"
                description="Get to know our talented instructors who make language learning a breeze. Explore their classes and start your journey to fluency today.Each instructor brings a unique teaching style and cultural perspective."
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-6">
                {
                    instructors.map(instructor => (<InstructorsCard key={instructor._id} instructor={instructor}></InstructorsCard>
                    ))
                }
            </div>
        </div>
    );
};

export default Instructors;