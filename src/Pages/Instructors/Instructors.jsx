import SectionTitle from "../../SharedComponents/SectionTitle";
import { useLoaderData } from "react-router-dom";
import InstructorsCard from "../../SharedComponents/InstructorsCard";

const Instructors = () => {
    const instructors = useLoaderData()

    return (
        <div className="my-8 md:my-16">
            <SectionTitle
                heading="Meet Our Expert Instructors"
                description="Get to know our talented instructors who make language learning a breeze. Explore their classes and start your journey to fluency today.Each instructor brings a unique teaching style and cultural perspective."
            ></SectionTitle>
            <div className="grid grid-cols-2 gap-6">
                {
                    instructors.map(instructor => (<InstructorsCard key={instructor._id} instructor={instructor}></InstructorsCard>
                    ))
                }
            </div>
        </div>
    );
};

export default Instructors;