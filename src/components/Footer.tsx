import { NavLink } from "react-router-dom";
import '../styles/footer.css'
const Footer = () => {
    return (
        <div className="footer">
            <div className='footer-left'>
                <NavLink to="/" className="footer-brand-name-link">
                    Guestline Hotels
                </NavLink>
            </div>
            <div className="footer-middle">
                <span className="copyright-title">
                    &copy; {new Date().getFullYear()} Guestline Hotels. All rights reserved.
                </span>
            </div>
            <div className="footer-right">
                <a href="#" target='_blank' className="soc-link"><i className="fa-brands fa-facebook"></i></a>
                <a href="#" target='_blank' className="soc-link"><i className="fa-brands fa-instagram"></i></a>
                <a href="#" target='_blank' className="soc-link"><i className="fa-brands fa-pinterest"></i></a>
                <a href="#" target='_blank' className="soc-link"><i className="fa-brands fa-twitter"></i></a>
            </div>
        </div>
    );
}

export default Footer;