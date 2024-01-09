import SectionTitle from "../../SharedComponents/SectionTitle";
import ClassCard from "../../SharedComponents/ClassCard";
import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";
import EmptyState from "../../SharedComponents/EmptyState";
import {motion} from 'framer-motion'
const Classes = () => {
    const [classes, setClasses] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/classes')
            .then(res => res.json())
            .then(data => setClasses(data))
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

        //animation
        const variants = {
            initial: {
                y: -100,
                opacity: 0
            },
            animate: {
                y: 0,
                opacity: 1,
                transition: {
                    duration: 1,
                }
            }
        }
    return (
        <>
            {
                classes && Array.isArray(classes) && classes.length > 0
                    ?
                    <div className="my-8 mx-2 md:my-16">
                        <Helmet>
                            <title>Accent Adept | Classes</title>
                        </Helmet>
                        <SectionTitle
                            heading="Discover Our Exciting Classes"
                            description="Explore our wide range of language classes designed to help you learn and master a new language. Each class is carefully crafted to enhance your language skills and cultural understanding."
                        ></SectionTitle>

                        <motion.div variants={variants} initial="initial" whileInView="animate" className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                            {
                                classes && classes.map(classItem => (
                                    <ClassCard key={classItem._id} classItem={classItem}></ClassCard>
                                ))
                            }
                        </motion.div>
                    </div>
                    :
                    <EmptyState></EmptyState>
            }
        </>
    );
};

export default Classes;