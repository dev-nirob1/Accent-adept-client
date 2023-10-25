import { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle";

const Classes = () => {
    const [classes, setClasses] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setClasses(data)
            }
            )
    }, [])
    return (
        <div className="my-16">
            <SectionTitle
                heading="Discover Our Exciting Classes"
                description="Explore our wide range of language classes designed to help you learn and master a new language. Each class is carefully crafted to enhance your language skills and cultural understanding."
            ></SectionTitle>

        </div>
    );
};

export default Classes;