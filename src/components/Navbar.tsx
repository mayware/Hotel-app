import '../styles/navbar.css'
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-left">
                <div className="nav-links">
                    <div className="nav-brand-name">
                        <NavLink to="/" className="nav-link">
                            Guestline Hotels
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;