import React, { useEffect } from 'react';
import './App.css';
import { Parallax } from "react-parallax";
import AboutSection from './About';
import StudiesSection from './Studies';
import ProjectsSection from './Projects';
import Header from './Header';
import ScrollTop from './ScrollTopBtn';
import Hexagons from './assets/hexagons.png';
import Skills from './Skills';

function App() {

  useEffect(() => {
    const handleClick = (e) => {
      e.preventDefault();
      document.querySelector(e.target.getAttribute('href')).scrollIntoView({
        behavior: 'smooth',
        block: 'start' // Ensure the section is aligned to the top
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

  // const insideStyles = {
  //   background: "#589efc36", // lightblue
  //   padding: "100%",
  //   position: "absolute",
  //   top: "50%",
  //   left: "50%",
  //   transform: "translate(-50%,-50%)",
  //   color: "white",
  //   fontSize: "40px",
  //   textWrap: "nowrap",
  //   fontFamily: "fantasy, 'Arial', sans-serif"
  // };

  return (
    <div className="App">
      <Header />

      <AboutSection />

      <Parallax bgImage={Hexagons} strength={-200}>
        <div style={{ height: 100 }}>
          {/* <div style={insideStyles}>Education</div> */}
        </div>
      </Parallax>

      <StudiesSection />

      <Parallax bgImage={Hexagons} strength={-200}>
        <div style={{ height: 100 }}>
          {/* <div style={insideStyles}>Hobby Projects</div> */}
        </div>
      </Parallax>

      <Skills />

      <Parallax bgImage={Hexagons} strength={-200}>
        <div style={{ height: 100 }}>
          {/* <div style={insideStyles}>Hobby Projects</div> */}
        </div>
      </Parallax>

      <ProjectsSection />

      <ScrollTop />

      <footer>
        This page is designed and maintained by Ali Al.
      </footer>
    </div>
  )
}

export default App
