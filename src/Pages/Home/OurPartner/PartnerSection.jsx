import SectionTitle from "../../../SharedComponents/SectionTitle";
import Marquee from "react-fast-marquee";
import ImageContainer from "./ImageContainer";
import {motion} from 'framer-motion'
const PartnerSection = () => {
    const variants = {
        initial: {
            x: -100,
            opacity: 0
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1,
            }
        }
    }

    return (
        <motion.div variants={variants} className="mb-8 md:my-10 lg:my-16">
            <SectionTitle
                heading='Our Trusted Partners'
                description='Collaborating with industry leaders to deliver exceptional solutions.'
            ></SectionTitle>
            <Marquee
            speed={70}
            gradient={true}
            >
                <ImageContainer></ImageContainer>
            </Marquee>

        </motion.div>
    );
};

export default PartnerSection;