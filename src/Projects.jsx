import React from 'react';
import ProjectCard from './ProjectCard';

function ProjectsSection() {
    return ( 
        <section id="projects">
            <h1 className="section-header">My <span className="header-span">Projects</span></h1>
            <div id="projectcards-container">
                <ProjectCard 
                    name="Chat App (Java)"
                    imageUrl="https://user-images.githubusercontent.com/32642133/130327760-c3a8ab02-302d-46bc-ae2d-8e8c217caf2d.png"
                    githubUrl="https://github.com/AliAlbabily/Chat-App"
                    demoIsAvailable={false}
                />
                <ProjectCard 
                    name="My Characters Ranking" 
                    imageUrl="https://user-images.githubusercontent.com/32642133/112752164-f10c8b00-8fd1-11eb-93ed-2fa37e730cd2.png"
                    githubUrl="https://github.com/AliAlbabily/My-Characters-Ranking"
                    demoIsAvailable={true}
                    demoUrl="https://alialbabily.github.io/My-Characters-Ranking/"
                />
                <ProjectCard 
                    name="Online Rock-Scissors-Paper" 
                    imageUrl="https://user-images.githubusercontent.com/32642133/185791673-2286e459-1f05-4150-8c9f-7c2b4a22b00b.png"
                    githubUrl="https://github.com/AliAlbabily/Online-Rock-Scissors-Paper"
                    demoIsAvailable={false}
                />
                <ProjectCard 
                    name="My Movies List" 
                    imageUrl="https://user-images.githubusercontent.com/32642133/109197252-10c74e00-779d-11eb-85d1-c54054fd3c15.png"
                    githubUrl="https://github.com/AliAlbabily/My-Movies-List"
                    demoIsAvailable={false}
                />
                <ProjectCard 
                    name="Player Damage Calculator" 
                    imageUrl="https://user-images.githubusercontent.com/32642133/142704133-e41cf869-3e9a-4c64-986f-907159474860.png"
                    githubUrl="https://github.com/AliAlbabily/Damage-Calculator-App"
                    demoIsAvailable={true}
                    demoUrl="https://alialbabily.github.io/Damage-Calculator-App/"
                />
                <ProjectCard 
                    name="Sink The Ships (Java)" 
                    imageUrl="https://user-images.githubusercontent.com/32642133/103290771-966f8d00-49ea-11eb-9977-455928444b1d.png"
                    githubUrl="https://github.com/AliAlbabily/Sink-the-ships"
                    demoIsAvailable={false}
                />
            </div>
        </section>
    );
}

export default ProjectsSection;
