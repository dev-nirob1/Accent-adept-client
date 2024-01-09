import { motion, } from "framer-motion"
const States = () => {
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
    return (
        <motion.div variants={variants} initial="initial" whileInView='animate' className="grid grid-cols-1 lg:grid-cols-4 items-center justify-center gap-5 py-16 px-5 mt-16 bg-[#252B42]">
            <motion.div variants={variants} className="flex items-center justify-center bg-white rounded gap-2 shadow py-3">
                <img src="/images/students.png" alt="students icon" />
                <div className="text-center">
                    <h3 className="text-3xl mb-1 text-gray-800 font-semibold">1600+</h3>
                    <p className="font-medium text-lg text-neutral-600">Inspire Participants</p>
                </div>
            </motion.div>
            <motion.div variants={variants} className="flex items-center justify-center bg-white rounded gap-2 shadow py-3">
                <img src="/images/book.png" alt="book icon" />
                <div className="text-center">
                    <h3 className="text-3xl mb-1 text-gray-800 font-semibold">12+</h3>
                    <p className="font-medium text-lg text-neutral-600">Dynamic Coursework</p>
                </div>
            </motion.div>
            <motion.div variants={variants} className="flex items-center justify-center bg-white rounded gap-2 shadow py-3">
                <img src="/images\achievement.png" alt="succes icon" />
                <div className="text-center">
                    <h3 className="text-3xl mb-1 text-gray-800 font-semibold">3500+</h3>
                    <p className="font-medium text-lg text-neutral-600">Successful Participants</p>
                </div>

            </motion.div>
            <motion.div variants={variants} className="flex items-center justify-center bg-white rounded gap-2 shadow py-3">
                <img src="/images/teacher.png" alt="teacher icons" />
                <div className="text-center">
                    <h3 className="text-3xl mb-1 text-gray-800 font-semibold">25+</h3>
                    <p className="font-medium text-lg text-neutral-600">Professional Tutors</p>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default States;