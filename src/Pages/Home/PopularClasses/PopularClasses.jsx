import { useEffect, useState } from "react";
import SectionTitle from "../../../SharedComponents/SectionTitle";
import ClassCard from "../../../SharedComponents/ClassCard";

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
                description="Discover our most sought-after language classes designed to help you master a new language. Join our popular classes and embark on a language learning journey that's both engaging and effective. Each class is tailored to boost your language skills and cultural understanding.">
            </SectionTitle>
            <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-3">
                {
                    PopularClasses.map(classItem => (<ClassCard
                        key={classItem._id}
                        classItem={classItem}
                    ></ClassCard>))
                }
            </div>
        </div>
    );
};

export default PopularClasses;