import { LOGO_URL } from "../Utils/constants";

// Header Component
const Header = () => (
    <div className="Header">
        <div className="logo">
        <img src={LOGO_URL}/>
        </div>
        <div className="Nav-items">
            <ul>
               <li>Home</li> 
               <li>About Us</li>
               <li>Contact Us</li>
               <li>Cart</li>
            </ul>
        </div>
    </div>
);

export default Header;