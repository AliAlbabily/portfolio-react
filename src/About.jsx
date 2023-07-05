import React from 'react';
import HomeImage from './assets/Bild3.png';

function AboutSection() {
    return ( 
        <section id="about"> {/* home */}
            <div className="about-content"> {/* home-content */}
                <h3>Hello! I'm</h3>
                <h1>Ali Fadhel</h1>
                <h3>And I'm a <span>Fullstack Developer</span></h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultrices sapien et orci ultricies, vel consequat purus ultrices.</p>
                <div className="social-media">
                    <a href="#"><i className='bx bxl-linkedin-square'></i></a>
                    <a href="#"><i className='bx bxl-github'></i></a>
                    <a href="#"><i className='bx bxl-twitter'></i></a>
                    <a href="#"><i className='bx bxl-facebook'></i></a>
                </div>
                <a href="#" className="btn">Download CV</a>
            </div>

            <div className="home-image">
                <img src={HomeImage} alt="Logo" />
            </div>
        </section>
    );
}

export default AboutSection;