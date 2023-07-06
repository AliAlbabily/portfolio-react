import React from 'react';
import HomeImage from './assets/Bild3.png';

function AboutSection() {
    const handleAnchorClick = (textMessage) => {
        alert(textMessage + ' profile not linked yet.');
    };
    
    return ( 
        <section id="about">
            <div className="about-content">
                <h3>Hello! I'm</h3>
                <h1>Ali Fadhel</h1>
                <h3>And I'm a <span>Fullstack Developer</span></h3>
                <p>
                I have recently graduated from Malmö University with a bachelor's degree in Computer Science. During my studies, 
                I focused on Java and JavaScript programming languages and gained a solid understanding of them. 
                I have gained valuable experience in various aspects of software development, including Frontend and Backend development, 
                as well as working with databases.
                </p>
                <div className="social-media">
                    <a href="https://www.linkedin.com/in/ali-fadhel-b17513177/" target="_blank">
                        <i className='bx bxl-linkedin-square'></i>
                    </a>
                    <a href="https://github.com/AliAlbabily" target="_blank">
                        <i className='bx bxl-github'></i>
                    </a>
                    <a href="#" onClick={() => handleAnchorClick("Twitter")}>
                        <i className='bx bxl-twitter'></i>
                    </a>
                    <a href="#" onClick={() => handleAnchorClick("Facebook")}>
                        <i className='bx bxl-facebook'></i>
                    </a>
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