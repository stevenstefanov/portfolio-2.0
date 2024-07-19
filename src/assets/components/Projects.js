import React, { useState, useRef } from 'react';
// import './projects.css';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';
import Modal from 'react-bootstrap/Modal';
import ModalDialog from 'react-bootstrap/ModalDialog';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle';
import ModalBody from 'react-bootstrap/ModalBody';

import Button from 'react-bootstrap/Button';
import image1 from '../images/project1.png';
import image2 from '../images/project2.png';
import image3 from '../images/project3.png';
import image4 from '../images/project4.png';


// function Projects(props) {
//     const [show1, setShow1] = useState(false);
//     const [show2, setShow2] = useState(false);
//     const [show3, setShow3] = useState(false);
//     const [show4, setShow4] = useState(false);

//     const target1 = useRef(null);
//     const target2 = useRef(null);
//     const target3 = useRef(null);
//     const target4 = useRef(null);

//     return (
//         <section target={target1}>


//             <div id="work" class="section page">
//                 <p>Feel free to check out some of my projects:</p>
//                 <div class="info">
//                     <div class="work-section">
//                         {/* All projects are defined by class "project-#" */}

//                         {/* Project 1 - MyCoin */}
//                         <div class="project" class="project-other">
//                             <button><img src={image1} alt="MyCoin App" className="project-overview" ref={target1} onClick={() => setShow1(!show1)} /></button>
//                             <Overlay target={target1} show={show1} placement="right">
//                                 {(props) => (
//                                     <Tooltip className="project-detail" {...props}>
//                                         <h1>MyCoin</h1>
//                                         <button className="close-button" onClick={() => setShow1(!show1)}>x</button>
//                                         <img src={image1} alt="My Coin App" className="image-detail"></img>
//                                         <div class="project-info">
//                                             <h2>Project Description:</h2>
//                                             <p>MyCoin allows users to manage their assets and holdings in one convenient location.
//                                                 This user-focused application aims to help individuals increase their understanding of
//                                                 Crypto investments and to see projected gains and losses.</p>
//                                             <a href="https://mycoin-react.herokuapp.com" target="_blank" class="project-text">Deployed App Link</a>
//                                             <a href="https://github.com/stevenstefanov/mycoin" target="_blank" class="project-text">MyCoin GitHub Link</a>
//                                         </div>
//                                     </Tooltip>
//                                 )}
//                             </Overlay>
//                         </div>


//                         {/* Project 2 - Balln */}
//                         <div class="project" class="project-other">
//                             <button><img src={image2} alt="Balln App" className="project-overview" ref={target2} onClick={() => setShow2(!show2)} /></button>
//                             <Overlay target={target2} show={show2} placement="right">
//                                 {(props) => (
//                                     <Tooltip className="project-detail" {...props}>
//                                         <h1>Balln</h1>
//                                         <button className="close-button" onClick={() => setShow2(!show2)}>x</button>
//                                         <img src={image2} alt="Balln App" className="image-detail"></img>
//                                         <div class="project-info">
//                                         <h2>Project Description:</h2>
//                                             <p>Balln is a sports app leveraging 2 APIs, the first being the Basketball API which retrieves game
//                                                 statistics for a team and the second is the Ticketmaster API which retrieves the team's future games
//                                                  and ticket information. This will assist the user with getting their favorite NBA team's most updated
//                                                  stats and future games’ ticket information.</p>
//                                             <a href="https://stevenstefanov.github.io/balln/" target="_blank" class="project-text">Deployed App Link</a>
//                                             <a href="https://github.com/stevenstefanov/balln" target="_blank" class="project-text">Balln' GitHub Link</a>
//                                         </div>
//                                     </Tooltip>
//                                 )}
//                             </Overlay>
//                         </div>

//                         {/* Project 3 - Bikr */}
//                         <div class="project" class="project-other">
//                             <button><img src={image3} alt="Bikr App" className="project-overview" ref={target3} onClick={() => setShow3(!show3)} /></button>
//                             <Overlay target={target3} show={show3} placement="right">
//                                 {(props) => (
//                                     <Tooltip className="project-detail" {...props}>
//                                         <h1>Bikr</h1>
//                                         <button className="close-button" onClick={() => setShow3(!show3)}>x</button>
//                                         <img src={image3} alt="Bikr App" className="image-detail"></img>
//                                         <div class="project-info">
//                                             <h2>Project Description:</h2>
//                                             <p>Bikr is an application that lets New Yorkers buy and sell bicycles. Unlike Craigslist which
//                                                  is too broad and crowded with items, here a person can know that they will see only bikes
//                                                  and can find the exact one they want.</p>
//                                             <a href="https://bikr-app.herokuapp.com/" target="_blank" class="project-text">Deployed App Link</a>
//                                             <a href="https://github.com/stevenstefanov/bikr" target="_blank" class="project-text">Bikr GitHub Link</a>
//                                         </div>
//                                     </Tooltip>
//                                 )}
//                             </Overlay>
//                         </div>

//                         {/* Project 4 - Weather App */}
//                         <div class="project" class="project-other">
//                             <button><img src={image4} alt="Weather App" className="project-overview" ref={target4} onClick={() => setShow4(!show4)} /></button>
//                             <Overlay target={target4} show={show4} placement="right">
//                                 {(props) => (
//                                     <Tooltip className="project-detail" {...props}>
//                                         <h1>Weather Forecast</h1>
//                                         <button className="close-button" onClick={() => setShow4(!show4)}>x</button>
//                                         <img src={image4} alt="Weather App" className="image-detail"></img>
//                                         <div class="project-info">
//                                             <h2>Project Description:</h2>
//                                             <p>This project is a weather forcasting app that lets users enter a city name and displays current weather information
//                                                  and a 5-day forecast.</p>
//                                             <a href="https://stevenstefanov.github.io/weather-forecast/" target="_blank" class="project-text">Deployed App Link</a>
//                                             <a href="https://github.com/stevenstefanov/weather-forecast" target="_blank" class="project-text">Weather GitHub Link</a>
//                                         </div>
//                                     </Tooltip>
//                                 )}
//                             </Overlay>
//                         </div>
//                     </div>

//                 </div>
//             </div>
//             {/* <Modal
//                 {...props}
//                 size="lg"
//                 aria-labelledby="contained-modal-title-vcenter"
//                 centered
//                 style={{opacity:1}}
//                 show={show}
//                 onHide={handleClose}
//             >
//                 <Modal.Header closeButton>
//                     <Modal.Title id="contained-modal-title-vcenter">Project 1</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <img src={image1} alt="My Coin App" className="image-detail"></img>
//                     <div class="project-info">
//                         <h2>Project Description:</h2>
//                         <p>MyCoin allows users to manage their assets and holdings in one convenient location.
//                             This user-focused application aims to help individuals increase their understanding of
//                             Crypto investments and to see projected gains and losses.</p>
//                         <a href="https://mycoin-react.herokuapp.com" target="_blank" class="project-text">Deployed App Link</a>
//                         <a href="https://github.com/stevenstefanov/mycoin" target="_blank" class="project-text">MyCoin GitHub Link</a>
//                     </div>
//                 </Modal.Body>
//             </Modal> */}
//         </section>
//     )
// };

// export default Projects;