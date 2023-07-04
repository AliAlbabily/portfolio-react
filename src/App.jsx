import React, { useEffect } from 'react';
import './App.css'
import { Parallax, Background } from "react-parallax";
import MeImage from './assets/me1.jpg'

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
    // background: "#00000075", // black
    // background: "#6eccb275", // lightgreen
    // background: "#6f7d7975", // light
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
            <li><a href="#studies">Education & Experience</a></li>
            <li><a href="#projects">Projects</a></li>
          </ul>
          <img src={MeImage} alt="Logo"/>
        </nav>
      </header>

      <section id="about">
        <h2>About Me</h2>
        {/* Your about me content here */}
      </section>

      <Parallax bgImage={"https://media.timeout.com/images/105934803/image.jpg"} strength={500}>
        <div style={{ height: 500 }}>
          <div style={insideStyles}>Education & Experience</div>
        </div>
      </Parallax>

      <section id="studies">
        <h2>Education & Experience</h2>
        {/* Your Education and experience content here */}
      </section>

      <Parallax bgImage={"https://d2cdo4blch85n8.cloudfront.net/wp-content/uploads/2021/04/18-meter-Tall-Gundam-Statue-in-China-Featured-image.jpg"} strength={500}>
        <div style={{ height: 500 }}>
          <div style={insideStyles}>Projects</div>
        </div>
      </Parallax>

      <section id="projects">
        <h2>Projects</h2>
        {/* Your projects content here */}
      </section>

      <footer>
        This page is designed and maintained by Ali Fadhel
      </footer>
    </div>
  )
}

export default App
