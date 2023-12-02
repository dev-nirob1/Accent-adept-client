import SectionTitle from "../../SharedComponents/SectionTitle";
import ClassCard from "../../SharedComponents/ClassCard";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";

const Classes = () => {
    const [classes, setClasses] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => setClasses(data))
            .catch(err => console.log(err))
    }, [])

    return (
        <div className="my-8 mx-2 md:my-16">
            <Helmet>
                <title>Accent Adept | Classes</title>
            </Helmet>
            <SectionTitle
                heading="Discover Our Exciting Classes"
                description="Explore our wide range of language classes designed to help you learn and master a new language. Each class is carefully crafted to enhance your language skills and cultural understanding."
            ></SectionTitle>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    classes && classes.map(classItem => (
                        <ClassCard key={classItem._id} classItem={classItem}></ClassCard>
                    ))
                }
            </div>

        </div>
    );
};

export default Classes;