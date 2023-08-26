import React from 'react';

import ecutbildning from './assets/ecutbildning-javautvecklare.jpg';

function StudiesSection() {
    return ( 
        <section id="studies">
            <div className="card">
                <img src="https://idrottsforum.org/wp-content/uploads/2020/02/orkanen.jpg" alt="Image 1"/>
                <h3>Computer Systems Development - Malmö University</h3>
                <p>The system development education focuses on teaching students the essential knowledge and skills to develop and implement software and IT solutions. It covers areas like programming languages, systems analysis, database management, web development, software architecture, and project management. Through practical training and project work, students gain insight into the entire development cycle and how to solve real IT industry problems.</p>
            </div>

            <div className="card">
                <img src={ecutbildning} alt="Image 2"/>
                <h3>Java developer - EC Utbildning</h3>
                <p>The Java developer training has been added to provide business with people who have cutting-edge skills in the Java programming language. The goal of the education is that the students after the education should be able to work in a professional way with the development of Java and related areas. Knowledge and practical experience from leading frameworks and with modern tools and methods are included in the education.</p>
            </div>
        </section>
    );
}

export default StudiesSection;
