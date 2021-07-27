import React from 'react';
import Overlay from 'react-bootstrap/Overlay';
import Tooltip from 'react-bootstrap/Tooltip';
import image1 from '../images/project1.png';


function ProjectOne() {

    return(
        <>
            {/* Project 1 - MyCoin */}
            
            <a href="https://mycoin-react.herokuapp.com" target="_blank"><div class="project-one"></div></a>
            <div class="project-info">
                <a href="https://github.com/stevenstefanov/mycoin" target="_blank" class="project-text">MyCoin GitHub Link</a>
            </div>
        </>
    )
};
    
export default ProjectOne;