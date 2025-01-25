import React from 'react';
import ProjectCard from './ProjectCard';
import PyhtonProjectImage from './assets/slot-machine-new.jpg';
import DatesManagerProjectImage from './assets/dates manager.png';


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
                    skills={['Java', 'object-oriented-programming', 'client-server']}
                />
                <ProjectCard 
                    name="My Characters Ranking" 
                    imageUrl="https://user-images.githubusercontent.com/32642133/112752164-f10c8b00-8fd1-11eb-93ed-2fa37e730cd2.png"
                    githubUrl="https://github.com/AliAlbabily/My-Characters-Ranking"
                    demoIsAvailable={true}
                    demoUrl="https://alialbabily.github.io/My-Characters-Ranking/"
                    skills={['Electron', 'json', 'HTML & CSS', 'JS']}
                />
                <ProjectCard 
                    name="My Movies List (React)" 
                    imageUrl="https://user-images.githubusercontent.com/32642133/109197252-10c74e00-779d-11eb-85d1-c54054fd3c15.png"
                    githubUrl="https://github.com/AliAlbabily/My-Movies-List"
                    demoIsAvailable={false}
                    skills={['API', 'Server', 'React', 'Node.js', 'Express', 'MongoDB']}
                />
                <ProjectCard 
                    name="Slot Machine (Python)" 
                    imageUrl={PyhtonProjectImage} // Use the imported image
                    githubUrl="https://github.com/AliAlbabily/Python-Slot-Machine-Game"
                    demoIsAvailable={false}
                    skills={['Python', 'Unittest']}
                />
                <ProjectCard 
                    name="Products Dates Manager" 
                    imageUrl={DatesManagerProjectImage} // Use the imported image
                    githubUrl="https://github.com/AliAlbabily/Products-Dates-Manager-Vite"
                    demoIsAvailable={true}
                    demoUrl="https://alialbabily.github.io/Products-Dates-Manager-Vite/"
                    skills={['React', 'LocalStorage', 'Vite']}
                />
                <ProjectCard 
                    name="Player Damage Calculator" 
                    imageUrl="https://user-images.githubusercontent.com/32642133/142704133-e41cf869-3e9a-4c64-986f-907159474860.png"
                    githubUrl="https://github.com/AliAlbabily/Damage-Calculator-App"
                    demoIsAvailable={true}
                    demoUrl="https://alialbabily.github.io/Damage-Calculator-App/"
                    skills={['React', 'Node.js', 'Material UI']}
                />
            </div>
        </section>
    );
}

export default ProjectsSection;
