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
            <Link to="/"><h3>Home</h3></Link>
            </li>
            <li className="px-4">
                <Link to="/about"><h3>About Us</h3></Link>
            </li>
            <li className="px-4">
                <Link to="/contact"><h3>Contact Us</h3></Link>
            </li>
            </ul>
        </div>
    </div>
);

export default Header;