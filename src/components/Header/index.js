import React from 'react'
import './style.css';

const Header = (props) => {
    return (
        <div>
            <header className="header">
        <nav className="headerMenu">
        <a href="#">Home</a>
        <a href="#">ABout us</a>
        <a href="#">Contact Us</a>
        </nav>
        <div>
        Social Media LInks
        </div>
            </header>
        </div>
    )
}

export default Header
