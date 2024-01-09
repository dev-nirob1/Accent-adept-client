import newsletterImage from '../../../assets/news.jpg';
import toast from 'react-hot-toast';
import { motion } from "framer-motion"

const NewsLetter = () => {
    const variants = {
        initial: {
            scaleX: 0,
            opacity: 0
        },
        animate: {
            scaleX: 1,
            opacity: 1,
            transition: {
                duration: 1,
            }
        }
    }

    const handleNewsLetter = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        if (email === '') {
            return toast.error('Please add an Email');
        } else {
            e.target.reset();
            return toast.success('Subscribed Successfully');
        }
    };

    return (
        <motion.div variants={variants}
            style={{
                backgroundImage: `linear-gradient(to bottom , rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url(${newsletterImage})`,
            }}
            className="overflow-hidden bg-cover bg-no-repeat bg-fixed bg-center h-[80vh] md:h-screen w-full mb-8 md:my-10 lg:my-16"
        >
            <motion.div variants={variants} initial="initial" whileInView="animate" className=" text-white w-full h-full flex items-center justify-center">
                <div className="text-center space-y-5">
                    <h1 className="uppercase text-4xl font-semibold">Subscribe our newsletter</h1>
                    <p className="text-lg font-semibold">Stay updated with the latest news and updates.</p>
                    <form onSubmit={handleNewsLetter}>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="input input-bordered input-info w-full max-w-xs"
                        />
                        <button type="submit" className="px-6 py-[9px] mt-2 md:mt-0 ml-1 rounded hover:bg-blue-700 bg-blue-500 font-medium text-lg">
                            Subscribe
                        </button>
                    </form>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default NewsLetter;
