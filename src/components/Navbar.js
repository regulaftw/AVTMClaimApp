import React, { useState, useEffect } from "react";
import logo from "../AventisMetaverse.png";
import './Navbar.css';

// A fancy function to shorten someone's wallet address
const account = (str) => {
    return str ? str.substring(0, 5) + "..." + str.substring(str.length - 4) : "";
};

function Navbar(props) {
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        const offset = window.scrollY;
        if (offset > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`nav ${isScrolled ? 'affix' : ''}`}>
            <div className="container">
                <div className="logo">
                    <a href="/#">
                        <img src={logo} width="default" height="50" alt="bank" />
                        &nbsp; 
                    </a>
                </div>
                <div className="main_list">
                    <ul className="navlinks">
                       
                        {/* Uncomment and use account information as needed */}
                         <li className="addresstext"><medium>Address: {account(props.account)}</medium></li> 
                    </ul>
                </div>
                <span className="navTrigger">
                    <i></i>
                    <i></i>
                    <i></i>
                </span>
            </div>
        </nav>
    );
}

export default Navbar;
