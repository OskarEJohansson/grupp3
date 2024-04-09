import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-r from-[#FFDCAB] to-[#AB6B2E] py-12 border-t border-gray-900">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
                    <div className="text-gray-900 flex flex-col justify-center items-center">
                        <h3 className="text-lg font-semibold mb-4">Open hours</h3>
                        <p className="text-gray-600">Monday - Friday: 11.00 - 19.00</p>
                        <p className="text-gray-600">Saturday - Sunday: 12.00 - 21.00</p>
                    </div>
                    <div className="text-gray-900 flex flex-col justify-center items-center">
                        <h3 className="text-lg font-semibold mb-4">Contact & Booking</h3>
                        <Link to="/contact-form" className="text-gray-600 hover:text-black transition duration-300 block mb-2">Contact us</Link>
                        <Link to="/about-us" className="text-gray-600 hover:text-black transition duration-300 block mb-2">About us</Link>
                    </div>
                    <div className="text-gray-900 flex flex-col justify-center items-center">
                        <h3 className="text-lg font-semibold mb-4">Find us</h3>
                        <p className="text-gray-600">Taste Trail AB</p>
                        <p className="text-gray-600">Kajplats 18, Strandvägen. 114 56 Stockholm</p>
                    </div>
                </div>
                
                <div className="flex justify-center">
                    <iframe
                        title="Google Maps Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15679.703915888254!2d18.064903924499514!3d59.32932351744249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f76e0a4b357d5%3A0xb72cf3f257e66f73!2sStockholm%2C%20Sweden!5e0!3m2!1sen!2suk!4v1649727551998!5m2!1sen!2suk"
                        width="100%"
                        height="200"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                    ></iframe>
                </div>
                <div className="mt-8 border-t border-gray-700 pt-8 flex justify-center items-center">
                    <p className="text-gray-600">&copy; 2024 Taste Trails</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
