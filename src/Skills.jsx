import React from 'react';

function Skills() {
    return ( 
        <section id="skills">
            <h1 className="section-header">My <span className="header-span">Skills</span></h1>
            <div className="row">
                <div className="col">
                    <div className="sub-title">
                        <h2>Programming Skills</h2>
                    </div>

                    <div className="skills-container">
                        <div className="skill">
                            <div className="subject">Java</div>
                            <div className="progress-bar" value="100%">
                                <div className="progress-line" style={{ maxWidth: '100%' }}></div>
                            </div>
                        </div>

                        <div className="skill">
                            <div className="subject">JavaScript</div>
                            <div className="progress-bar" value="100%">
                                <div className="progress-line" style={{ maxWidth: '100%' }}></div>
                            </div>
                        </div>

                        <div className="skill">
                            <div className="subject">C#</div>
                            <div className="progress-bar" value="85%">
                                <div className="progress-line" style={{ maxWidth: '85%' }}></div>
                            </div>
                        </div>

                        <div className="skill">
                            <div className="subject">Python</div>
                            <div className="progress-bar" value="80%">
                                <div className="progress-line" style={{ maxWidth: '80%' }}></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col">
                    <div className="sub-title">
                        <h2>Other Skills</h2>
                    </div>

                    <div className="skills-container">
                        <div className="skill">
                            <div className="subject">Agile Methods</div>
                            <div className="progress-bar" value="100%">
                                <div className="progress-line" style={{ maxWidth: '100%' }}></div>
                            </div>
                        </div>

                        <div className="skill">
                            <div className="subject">Prototyping</div>
                            <div className="progress-bar" value="90%">
                                <div className="progress-line" style={{ maxWidth: '90%' }}></div>
                            </div>
                        </div>

                        <div className="skill">
                            <div className="subject">Designing</div>
                            <div className="progress-bar" value="80%">
                                <div className="progress-line" style={{ maxWidth: '80%' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Skills;