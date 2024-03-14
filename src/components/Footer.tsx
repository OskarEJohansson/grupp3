import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-column">
                        <h3 className="footer-heading">Open hours</h3>
                        <p className="footer-text">Monday - Friday</p>
                        <p className="footer-text">11.00 - 19.00</p>
                        <p className="footer-text">Saturday - Sunday</p>
                        <p className="footer-text">12.00 - 21.00</p>
                    </div>
                    <div className="footer-column">
                        <h3 className="footer-heading">Contact & booking</h3>
                        {/* Updated link */}
                        <Link to="/contact-form" className="footer-link">Contact us</Link>
                        <br /> <br />
                        <Link to= "/about-us" className="footer-link">About us</Link>
                    </div>
                    <div className="footer-column">
                        <h3 className="footer-heading">Find us</h3>
                        <p className="footer-text">Taste Trail AB</p>
                        <p className="footer-text">Kajplats 18, strandvägen</p>
                        <p className="footer-text">114 56 Stockholm</p>
                    </div>
                </div>
                <div className="footer-bottom">
                    <span className="copyright">&copy; 2024 Taste Trails</span>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
