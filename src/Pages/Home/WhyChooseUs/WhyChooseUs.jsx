import { motion } from 'framer-motion'
const WhyChooseUs = () => {
    const variants = {
        initial: {
            y: 100,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1,
                staggerChildren: 0.1
            }
        }
    }
    const leftVariants = {
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
    const rightVariants = {
        initial: {
            x: 100,
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
        <div style={{
            backgroundImage: `linear-gradient(to right, #2a2a2a77, #2a2a2a77), url("/images/background-why-choose.png")`
        }}
            className="md:text-center lg:text-left md:gap-8 min-h-screen w-full bg-cover bg-center bg-no-repeat py-10">

            <motion.div variants={variants} initial="initial" whileInView="animate" className="p-5 md:p-10">
                <h2 className="text-center text-white text-3xl md:text-4xl font-medium mb-4">Find Out Why You Should Learn With Accent Adept</h2>

                <p className="text-center text-white text-lg font-medium">Unlock Your Language Potential with Expert Guidance and Cultural Fluency at Accent Adept.</p>

                <div className="grid md:grid-cols-2 gap-5 mt-6">
                    <motion.div variants={leftVariants} initial="initial" whileInView="animate" className="p-5 bg-teal-50 rounded">
                        <div className="flex gap-2 items-center mb-2">
                            <img src="/images/create.png" alt="create image" />
                            <h4 className="text-xl font-semibold text-neutral-700">Create Account</h4>
                        </div>
                        <p className="font-medium text-[15px] text-neutral-600">Embark on Your Language Learning Journey - Join Us and Explore a World of Linguistic Possibilities!</p>
                    </motion.div>
                    <motion.div variants={rightVariants} initial="initial" whileInView="animate" className="p-5 bg-teal-50 rounded">
                        <div className="flex gap-2 items-center mb-2">
                            <img src="/images/select.png" alt="select image" />
                            <h4 className="text-xl font-semibold text-neutral-700">Select Course</h4>
                        </div>
                        <p className="font-medium text-[15px] text-neutral-600">Tailor Your Learning Experience - Choose the Perfect Course to Achieve Your Language Goals.</p>
                    </motion.div>
                    <motion.div variants={leftVariants} initial="initial" whileInView="animate" className="p-5 bg-teal-50 rounded">
                        <div className="flex gap-2 items-center mb-2">
                            <img src="/images/skill.png" alt="create image" />
                            <h4 className="text-xl font-semibold text-neutral-700">Learn Your Skill</h4>
                        </div>
                        <p className="font-medium text-[15px] text-neutral-600">Master Your Craft - Elevate Your Expertise through Engaging Learning Experiences.</p>
                    </motion.div>
                    <motion.div variants={rightVariants} initial="initial" whileInView="animate" className="p-5 bg-teal-50 rounded">
                        <div className="flex gap-2 items-center mb-2">
                            <img src="/images/success.png" alt="create image" />
                            <h4 className="text-xl font-semibold text-neutral-700">Success Story</h4>
                        </div>
                        <p className="font-medium text-[15px] text-neutral-600">Inspiring Journeys of Triumph - Real Stories of Achieving Language Excellence with Accent Adept</p>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
};

export default WhyChooseUs;