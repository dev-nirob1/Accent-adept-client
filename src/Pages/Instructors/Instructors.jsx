import { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle";

const Instructors = () => {
    const [instructors, setInstructors] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setInstructors(data)
            }
            )
    }, [])

    return (
        <div className="my-8 md:my-16">
            <SectionTitle
                heading="Meet Our Expert Instructors"
                description="Get to know our talented instructors who make language learning a breeze. Explore their classes and start your journey to fluency today.Each instructor brings a unique teaching style and cultural perspective."
            ></SectionTitle>
            {
                instructors.map(ins => (<div key={ins.instructor.id}>
                    <p>{ins.instructor.name}</p>
                    <img src={ins.instructor.image} alt="iamge" />
                </div>
                ))
            }
        </div>
    );
};

export default Instructors;