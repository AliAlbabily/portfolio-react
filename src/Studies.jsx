import React from 'react';

function StudiesSection() {
    return ( 
        <section id="studies">
            <div className="card">
                <img src="https://idrottsforum.org/wp-content/uploads/2020/02/orkanen.jpg" alt="Image 1"/>
                <h3>Computer Systems Development - Malmö University</h3>
                <p>The system development education focuses on teaching students the essential knowledge and skills to develop and implement software and IT solutions. It covers areas like programming languages, systems analysis, database management, web development, software architecture, and project management. Through practical training and project work, students gain insight into the entire development cycle and how to solve real IT industry problems.</p>
            </div>

            <div className="card">
                <img src="https://scontent-cph2-1.xx.fbcdn.net/v/t31.18172-8/21949792_1667099169969784_5331230737187925255_o.jpg?_nc_cat=107&cb=99be929b-3346023f&ccb=1-7&_nc_sid=9267fe&_nc_ohc=s4aAfzYe26YAX_M6dr3&_nc_ht=scontent-cph2-1.xx&oh=00_AfBjgP5JEYq5VmxQ1HghrCPc9RLEcDRCKbKAizaLyunhoA&oe=64E88C6F" alt="Image 2"/>
                <h3>Java developer - EC Utbildning</h3>
                <p>The Java developer training has been added to provide business with people who have cutting-edge skills in the Java programming language. The goal of the education is that the students after the education should be able to work in a professional way with the development of Java and related areas. Knowledge and practical experience from leading frameworks and with modern tools and methods are included in the education.</p>
            </div>
        </section>
    );
}

export default StudiesSection;
