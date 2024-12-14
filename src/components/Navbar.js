import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './images/logo1.png';
import menuIcon from './images/8666802_menu_navigation_icon.svg';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav>
            <div className="nav-left">
                <img src={logo} alt="Logo" className="logo" />
                {!isOpen && (
                    <button className="menu-button" onClick={toggleMenu}>
                        <img src={menuIcon} alt="Menu" width="24" height="24" />
                    </button>
                )}
            </div>
            <div className="nav-right">
                <ul className="nav-links-desktop">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                </ul>
            </div>
            <div className={`side-menu ${isOpen ? 'open' : ''}`}>
                <button className="close-button" onClick={toggleMenu}>X</button>
                <ul className="nav-links-mobile">
                    <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
                    <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
                    <li><Link to="/services" onClick={toggleMenu}>Services</Link></li>
                    <li><Link to="/gallery" onClick={toggleMenu}>Gallery</Link></li>
                    <li><Link to="/contact" onClick={toggleMenu}>Contact Us</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
