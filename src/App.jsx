import React, { useEffect } from 'react';
import './App.css'

function App() {

  useEffect(() => {
    const handleClick = (e) => {
      e.preventDefault();
      document.querySelector(e.target.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      })
    }

    const anchors = document.querySelectorAll('nav a');

    anchors.forEach((anchor) => {
      anchor.addEventListener('click', handleClick);
    })

    return () => {
      // Clean up event listeners when the component unmounts
      anchors.forEach((anchor) => {
        anchor.removeEventListener('click', handleClick);
      })
    }
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  return (
    <div className="App">
      <header>
        <nav>
          <ul>
            <li><a href="#about">About Me</a></li>
            <li><a href="#studies">Studies & Experience</a></li>
            <li><a href="#projects">Projects</a></li>
          </ul>
        </nav>
      </header>

      <section id="about">
        <h2>About Me</h2>
        {/* Your about me content here */}
      </section>

      <section id="studies">
        <h2>Studies & Experience</h2>
        {/* Your studies and experience content here */}
      </section>

      <section id="projects">
        <h2>Projects</h2>
        {/* Your projects content here */}
      </section>

      <footer>
        {/* Your footer content here */}
      </footer>
    </div>
  )
}

export default App
