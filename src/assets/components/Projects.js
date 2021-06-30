import React from 'react';

function Projects() {
    return (
        <section>
            <div id="work" class="section page">
                <p>Feel free to check out some of my projects:</p>
                <div class="info">
                    <div class="work-section">
                            {/* All projects are defined by class "project-#" */}
                        <div class="project" class="project-other">
                            <a href="https://stevenstefanov.github.io/nba-teams/" target="_blank"><div class="project-one"></div></a>
                            <div class="project-info">
                                <a href="https://github.com/stevenstefanov/nba-teams" target="_blank" class="project-text">Balln' GitHub Link</a>
                            </div>
                        </div>
                        <div class="project" class="project-other">
                            <a href="https://rocky-cliffs-71386.herokuapp.com/" target="_blank"><div class="project-two"></div></a>
                            <div class="project-info">
                                <a href="https://github.com/stevenstefanov/bikr" target="_blank" class="project-text"> Bikr GitHub Link</a>
                            </div>
                        </div>
                        <div class="project" class="project-other">
                            <a href="https://stevenstefanov.github.io/workday-scheduler/" target="_blank"><div class="project-three"></div></a>
                            <div class="project-info">
                                <a href="https://github.com/stevenstefanov/workday-scheduler" target="_blank" class="project-text"> Scheduler GitHub Link</a>
                            </div>
                        </div>
                        <div class="project" class="project-other">
                            <a href="https://stevenstefanov.github.io/weather-app/" target="_blank"><div class="project-four"></div></a>
                            <div class="project-info">
                                <a href="https://github.com/stevenstefanov/weather-app" target="_blank" class="project-text"> Weather GitHub Link</a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
};

export default Projects;