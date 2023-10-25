import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../Components/SectionTitle";
import ClassCard from "./ClassCard";

const Classes = () => {
    const classes = useLoaderData()
    console.log(classes)
    return (
        <div className="my-16">
            
            <SectionTitle
                heading="Discover Our Exciting Classes"
                description="Explore our wide range of language classes designed to help you learn and master a new language. Each class is carefully crafted to enhance your language skills and cultural understanding."
            ></SectionTitle>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    classes.map(classItem => (
                        <ClassCard key={classItem._id} classItem={classItem}></ClassCard>
                    ))
                }
            </div>

        </div>
    );
};

export default Classes;