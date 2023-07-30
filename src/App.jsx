import React, { useEffect } from 'react';
import './App.css';
import { Parallax } from "react-parallax";
import AboutSection from './About';
import StudiesSection from './Studies';
import ProjectsSection from './Projects';
import Header from './Header';
import ScrollTop from './ScrollTopBtn';

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
    // background: "#6eccb275", // lightgreen
    // background: "#6f7d7975", // light
    background: "#589efc36", // lightblue
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
      <Header />

      <AboutSection />

      <Parallax bgImage={"https://media.timeout.com/images/105934803/image.jpg"} strength={500}>
        <div style={{ height: 500 }}>
          <div style={insideStyles}>Education</div>
        </div>
      </Parallax>

      <StudiesSection />

      <Parallax bgImage={"https://d2cdo4blch85n8.cloudfront.net/wp-content/uploads/2021/04/18-meter-Tall-Gundam-Statue-in-China-Featured-image.jpg"} strength={500}>
        <div style={{ height: 500 }}>
          <div style={insideStyles}>Hobby Projects</div>
        </div>
      </Parallax>

      <ProjectsSection />

      <ScrollTop />

      <footer>
        This page is designed and maintained by Ali Fadhel
      </footer>
    </div>
  )
}

export default App
