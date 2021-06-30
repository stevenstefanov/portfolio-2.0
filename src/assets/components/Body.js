import React from 'react';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

function Body() {
    return (
        <div class="container">
            
            <About />
            
            <Projects />

            <Contact />
            
        </div>
    )
};

export default Body;