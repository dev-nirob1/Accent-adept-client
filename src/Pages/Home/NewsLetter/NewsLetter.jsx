import newsletterImage from './../../../assets/newsletter.jpg';
import toast from 'react-hot-toast';

const NewsLetter = () => {
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
        <div
            style={{
                backgroundImage: `linear-gradient(to bottom right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)), url(${newsletterImage})`,
            }}
            className="overflow-hidden relative bg-cover bg-fixed bg-center h-screen md:my-10 lg:my-16"
        >
            <div className="absolute text-white w-full h-full flex items-center justify-center">
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
                        <button type="submit" className="px-6 py-[9px] ml-1 rounded hover:bg-blue-700 bg-blue-500 font-medium text-lg">
                            Send
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default NewsLetter;
