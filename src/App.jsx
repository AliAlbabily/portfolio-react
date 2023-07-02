import React, { useEffect } from 'react';
import './App.css'
import { Parallax, Background } from "react-parallax";

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

  const insideStyles = {
    background: "#00000075",
    padding: "100%",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    color: "white",
    fontSize: "36px",
    textWrap: "nowrap",
    fontFamily: "fantasy"
  };

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

      <Parallax bgImage={"https://media.timeout.com/images/105934803/image.jpg"} strength={500}>
        <div style={{ height: 500 }}>
          <div style={insideStyles}>Studies & Experience</div>
        </div>
      </Parallax>

      <section id="studies">
        <h2>Studies & Experience</h2>
        {/* Your studies and experience content here */}
      </section>

      <Parallax bgImage={"https://p.potaufeu.asahi.com/611d-p/picture/24675667/de55a90dc66769943f6d517737a9b351.jpg"} strength={500}>
        <div style={{ height: 500 }}>
          <div style={insideStyles}>Projects</div>
        </div>
      </Parallax>

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
