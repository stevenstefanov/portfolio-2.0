import React from 'react';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';

function Body() {
    return (
        <div class="container">
            
            <About />
            
            <Projects />

            <Skills />

            <Contact />
            
        </div>
    )
};

export default Body;