import { motion } from 'framer-motion'
const SectionTitle = ({ heading, description }) => {

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
        <motion.div variants={variants} initial="initial" whileInView="animate" className="w-10/12 md:w-3/4 mx-auto text-center mb-8 md:mb-16">
            <h1 className="text-3xl md:text-5xl font-semibold mb-3 md:mb-5">{heading}</h1>
            <p className="text-base md:text-lg font-medium">{description}</p>
        </motion.div>
    );
};

export default SectionTitle;