import SectionTitle from "../../SharedComponents/SectionTitle";
import InstructorsCard from "../../SharedComponents/InstructorsCard";
import { Helmet } from "react-helmet-async";
import { useEffect } from "react";
import Modal from "../Modal/Modal";
import EmptyState from "../../SharedComponents/EmptyState";
import { motion } from 'framer-motion'
import { useQuery } from "@tanstack/react-query";
const Instructors = () => {

    const { data: instructors = [] } = useQuery({
        queryKey: ['instructors'],
        queryFn: async () => {
            const res = await fetch(`${import.meta.env.VITE_API}/instructors`)
            const data = await res.json();
            return data;
        }
    })

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
                instructors && Array.isArray(instructors) && instructors.length > 0
                    ?
                    <div className="my-8 md:my-16" >
                        <Helmet>
                            <title>Accent Adept | Instructors</title>
                        </Helmet>
                        <SectionTitle
                            heading="Meet Our Expert Instructors"
                            description="Get to know our talented instructors who make language learning a breeze. Explore their classes and start your journey to fluency today.Each instructor brings a unique teaching style and cultural perspective."
                        ></SectionTitle>
                        <motion.div variants={variants} initial="initial" whileInView="animate" className="grid md:grid-cols-2 gap-6">
                            {
                                instructors.map(instructor => (<InstructorsCard key={instructor._id} instructor={instructor}></InstructorsCard>
                                ))
                            }
                        </motion.div>
                        <Modal />

                    </div>
                    :
                    <EmptyState></EmptyState>
            }
        </>


    );
};

export default Instructors;