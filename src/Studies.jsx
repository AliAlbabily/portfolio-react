import React from 'react';

import ecutbildning from './assets/ecutbildning-javautvecklare.jpg';
import malmouniversity from './assets/orkanen.jpg';

function StudiesSection() {
    return ( 
        <section id="studies">
            <h1 className="section-header">Studies</h1>
            <div className="cards">
                <div className="card card1">
                    <div className="container">
                        <img src={malmouniversity} alt="Image 1" className="card-img"/>
                    </div>
                    <div className="details">
                        <h3>Computer Systems Development - Malmö University</h3>
                        <p>The system development education focuses on teaching students the essential knowledge and skills to develop and implement software and IT solutions. It covers areas like programming languages, systems analysis, database management, web development, software architecture, and project management. Through practical training and project work, students gain insight into the entire development cycle and how to solve real IT industry problems.</p>
                    </div>
                </div>
                <div className="card card2">
                    <div className="container">
                        <img src={ecutbildning} alt="Image 2" className="card-img"/>
                    </div>
                    <div className="details">
                        <h3>Java developer - EC Utbildning</h3>
                        <p>The Java developer training has been added to provide business with people who have cutting-edge skills in the Java programming language. The goal of the education is that the students after the education should be able to work in a professional way with the development of Java and related areas. Knowledge and practical experience from leading frameworks and with modern tools and methods are included in the education.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default StudiesSection;
