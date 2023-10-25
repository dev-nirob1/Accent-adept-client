import { useEffect, useState } from "react";
import SectionTitle from "../../Components/SectionTitle";

const Instructors = () => {
    const [instructors, setInstructors] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/instructors')
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
            <div className="grid grid-cols-2 gap-6">
                {
                    instructors.map(ins => (<div key={ins._id} className="card lg:card-side bg-base-100 shadow-xl">
                        <figure><img className="w-[380px]" src={ins.image} alt="Album" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{ins.name}</h2>
                            <p className="text-lg">{ins.email}</p>
                                <p className="text-lg">Classes Taken: {ins.classesTaken}</p>
                                <p className="text-base">Name Of Class: {ins.languagesTaught}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Listen</button>
                            </div>
                        </div>
                    </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Instructors;