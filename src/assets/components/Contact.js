import React from 'react';

function Contact() {
    return (
        <section>
            <div id="contact" class="section page">
                <p>Please do say <span class="cursive">hello</span> - I look forward to hearing about your project!</p>
                <div class="info">
                    <ul>
                        <li>
                            <a href="https://github.com/stevenstefanov" title="Github" target="_blank"><i class="fab fa-github"></i></a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/steven-stefanov/" title="LinkedIn" target="_blank"><i class="fab fa-linkedin-in"></i></a>
                        </li>
                        <li>
                            <a href="mailto:stefanovsteven@gmail.com" title="Email" target="_blank"><i class="fas fa-envelope"></i></a>
                        </li>
                        <li>
                            < a href="/files/Steven_Stefanov_Resume.pdf" title="Resume" target="_blank" download><i class="fas fa-file-alt"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
};

export default Contact;