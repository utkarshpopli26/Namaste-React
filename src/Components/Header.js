import { LOGO_URL } from "../Utils/constants";
import {Link} from 'react-router-dom';

// Header Component
const Header = () => (
    <div className="Header">
        <div className="logo">
        <img src={LOGO_URL}/>
        </div>
        <div className="Nav-items">
            <ul>
            <li className="px-4">
            <Link to="/">Home</Link>
            </li>
            <li className="px-4">
                <Link to="/about">About Us</Link>
            </li>
            <li className="px-4">
                <Link to="/contact">Contact Us</Link>
            </li>
            </ul>
        </div>
    </div>
);

export default Header;