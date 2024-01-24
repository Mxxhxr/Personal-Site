import React from 'react';
import './TopNav.css';

export default function TopNav() {

    const currentPath = window.location.pathname;

    return (
        <div className={`top-nav ${currentPath === '/about-me' ? 'black-text' : ''}`}>
            <a href="/" className={currentPath === '/' ? 'active' : ''}>Home</a>
            <a href="/about-me" className={currentPath === '/about-me' ? 'active' : ''}>About Me</a>
            <a href="/resume" className={currentPath === '/resume' ? 'active' : ''}>Resume</a>
            <a href="/projects" className={currentPath === '/projects' ? 'active' : ''}>Projects</a>
        </div>
    )
}
