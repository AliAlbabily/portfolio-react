import React from 'react';
import logo from './assets/logo.svg';

function Header() {
    return ( 
        <header>
            <nav>
            <ul>
                <li><a href="#about">About Me</a></li>
                <li><a href="#studies">My Education</a></li>
                <li><a href="#projects">Projects</a></li>
            </ul>
            <img src={logo} className="App-logo" alt="logo" />
            </nav>
        </header>
    );
}

export default Header;
