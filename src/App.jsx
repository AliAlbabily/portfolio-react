import { useState } from 'react'
import './App.css'

function App() {

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
