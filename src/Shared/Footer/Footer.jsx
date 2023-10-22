import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-gradient-to-b from-blue-500  to-indigo-600 text-gray-50 py-10">
            <div className="container mx-auto flex flex-col items-center justify-center space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 w-full md:w-3/4">
                    <div className="text-center md:text-left mb-5">
                        <h3 className="text-lg font-bold mb-6">Contact Info</h3>
                        <p>123 Main St, City</p>
                        <p>Email: info@accentadept.com</p>
                        <p>Phone: +1 (123) 456-7890</p>
                    </div>
                    <div className="text-center md:text-left mb-5">
                        <h3 className="text-lg font-bold mb-6">Useful Links</h3>
                        <ul className="">
                            <li className='hover:underline'><a href="#">Home</a></li>
                            <li className='hover:underline'><a href="#">About Us</a></li>
                            <li className='hover:underline'><a href="#">Services</a></li>
                            <li className='hover:underline'><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div className="text-center md:text-left mb-5">
                        <h3 className="text-lg font-bold mb-6">Social Media</h3>
                        <div className="flex justify-center md:justify-start space-x-4">
                            <a className='transition-transform hover:-translate-y-2' href="#"><FaFacebook size={24} /></a>
                            <a className='transition-transform hover:-translate-y-2' href="#"><FaInstagram size={24} /></a>
                            <a className='transition-transform hover:-translate-y-2' href="#"><FaTwitter size={24} /></a>
                            <a className='transition-transform hover:-translate-y-2' href="#"><FaLinkedin size={24} /></a>
                            <a className='transition-transform hover:-translate-y-2' href="#"><FaYoutube size={24} /></a>
                        </div>
                    </div>
                </div>
                <p className="text-center">&copy; Accent Adept {new Date().getFullYear()}</p>
            </div>
        </footer>
    );
}

export default Footer;
