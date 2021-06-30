import React from 'react';

export function animation() {
    const bg = document.getElementsByClassName('bg-photo');
    window.addEventListener('scroll', function() {
        bg.style.backgroundSize = 160 - +window.pageYOffset/12+'%';
    })
};
