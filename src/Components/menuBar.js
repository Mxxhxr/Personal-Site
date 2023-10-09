// src/components/NavBar.js

import React from 'react';

const NavBar = () => {
    const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};

return (
    <nav>
        <ul>
        <li onClick={() => scrollToSection('Home')}>Home</li>
        <li onClick={() => scrollToSection('About Me')}>About Me</li>
        <li onClick={() => scrollToSection('Resume')}>Resume</li>
        </ul>
    </nav>
    );
};

export default NavBar;
