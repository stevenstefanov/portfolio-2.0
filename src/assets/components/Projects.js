import React, { useState, useRef } from 'react';
// import './projects.css';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import image1 from '../images/project1.png';
import image2 from '../images/project2.png';
import image3 from '../images/project3.png';
import image4 from '../images/project4.png';

function Projects() {
    const [show, setShow] = useState(false);
    const target = useRef(null);
    // const target2 = useRef(null);
    // const target3 = useRef(null);
    // const target4 = useRef(null);

    
    return (
        <section>
            <div id="work" class="section page">
                <p>Feel free to check out some of my projects:</p>
                <div class="info">
                    <div class="work-section">
                        {/* All projects are defined by class "project-#" */}

                        {/* Project 1 - MyCoin */}
                        <div class="project" class="project-other">
                            <button><img src={image1} alt="MyCoin App" className="project-overview" ref={target} onClick={() => setShow(!show)} /></button>
                            <OverlayTrigger target={target.current} show={show} placement="right">
                                {(props) => (
                                    <Tooltip id="" {...props}>
                                        <a href="https://mycoin-react.herokuapp.com" target="_blank"><div class="project-one"></div></a>
                                        <div class="project-info">
                                            <a href="https://github.com/stevenstefanov/mycoin" target="_blank" class="project-text">MyCoin GitHub Link</a>
                                        </div>
                                    </Tooltip>
                                )}
                            </OverlayTrigger>
                        </div>

                        {/* Project 2 - Balln */}
                        <div class="project" class="project-other">
                            <button><img src={image2} alt="Balln App" className="project-overview" ref={target} onClick={() => setShow(!show)} /></button>
                            <OverlayTrigger target={target.current} show={show} placement="right">
                                {(props) => (
                                    <Tooltip id="" {...props}>
                                        <a href="https://stevenstefanov.github.io/balln/" target="_blank"><div class="project-two"></div></a>
                                        <div class="project-info">
                                            <a href="https://github.com/stevenstefanov/balln" target="_blank" class="project-text">Balln' GitHub Link</a>
                                        </div>
                                    </Tooltip>
                                )}
                            </OverlayTrigger>
                        </div>

                        {/* Project 3 - Bikr */}
                        <div class="project" class="project-other">
                            <button><img src={image3} alt="Bikr App" className="project-overview" ref={target} onClick={() => setShow(!show)} /></button>
                            <OverlayTrigger target={target.current} show={show} placement="right">
                                {(props) => (
                                    <Tooltip id="" {...props}>
                                        <a href="https://bikr-app.herokuapp.com/" target="_blank"><div class="project-three"></div></a>
                                        <div class="project-info">
                                            <a href="https://github.com/stevenstefanov/bikr" target="_blank" class="project-text">Bikr GitHub Link</a>
                                        </div>
                                    </Tooltip>
                                )}
                            </OverlayTrigger>
                        </div>

                        {/* Project 4 - Weather App */}
                        <div class="project" class="project-other">
                            <button><img src={image4} alt="Weather App" className="project-overview" ref={target} onClick={() => setShow(!show)} /></button>
                            <OverlayTrigger target={target.current} show={show} placement="right">
                                {(props) => (
                                    <Tooltip id="" {...props}>
                                        <a href="https://stevenstefanov.github.io/weather-forecast/" target="_blank"><div class="project-four"></div></a>
                                        <div class="project-info">
                                            <a href="https://github.com/stevenstefanov/weather-forecast" target="_blank" class="project-text">Weather GitHub Link</a>
                                        </div>
                                    </Tooltip>
                                )}
                            </OverlayTrigger>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
};

export default Projects;