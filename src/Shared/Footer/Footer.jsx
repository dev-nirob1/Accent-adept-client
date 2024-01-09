import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';
import logo from './../../assets/logo.png'

function Footer() {
    return (
        <footer className="bg-[#16697A] text-gray-50 py-10">
            <div className=" flex flex-col items-center justify-center space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-full lg:w-11/12">
                    <div className="text-center md:text-left mb-5">
                        <img className='w-32 mb-4 mx-auto' src={logo} alt="logo" />
                        <p className='font-medium'>
                        Learn from our best instructors and become a pro in a foreign language.
                        </p>
                    </div>
                    <div className="text-center md:text-left mb-5">
                        <h3 className="text-lg font-bold mb-6">Contact Info</h3>
                        <div className='font-medium'>
                        <p>123 Main St, City</p>
                        <p>Email: info@accentadept.com</p>
                        <p>Phone: +1 (123) 456-7890</p>
                        </div>
                    </div>
                    <div className="text-center md:text-left mb-5">
                        <h3 className="text-lg font-bold mb-6">Useful Links</h3>
                        <ul className="font-medium">
                            <li className='hover:underline w-fit mx-auto md:mx-0'><a href="#">Home</a></li>
                            <li className='hover:underline w-fit mx-auto md:mx-0'><a href="#">About Us</a></li>
                            <li className='hover:underline w-fit mx-auto md:mx-0'><a href="#">Services</a></li>
                            <li className='hover:underline w-fit mx-auto md:mx-0'><a href="#">Contact</a></li>
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
                <p className="text-center font-medium text-base">&copy; Accent Adept {new Date().getFullYear()}</p>
            </div>
        </footer>
    );
}

export default Footer;
