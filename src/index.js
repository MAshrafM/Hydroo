import "./styles/main.scss";

import Accordion from './scripts/accordion';
import Parallax from './scripts/parallax';

window.onload = function() {
    // accordion
    const accordion = document.querySelectorAll('.accordion');
    const accordionContent = document.querySelectorAll('.accordion__contents');
    const accordionToggle = document.querySelectorAll('.accordion__toggle');
    // parallax
    const passionSection = document.getElementById('passion_bg');
    const factsSection = document.getElementById('Factsbg');
    const brandsSection = document.getElementById('Brandsbg');

    // create accordion
    let ourMission = new Accordion(accordion, accordionContent, accordionToggle);
    ourMission.initiate(ourMission)

    // create parallax
    let passionParallax = new Parallax('passion_bg');
    let factsParallax = new Parallax('Factsbg');
    let brandsParallax = new Parallax('Brandsbg');
    // section visible function
    function isScrolledIntoView(e){
        let elementRect = e.getBoundingClientRect();
        let elementTop = elementRect.top;
        let elementBottom = elementRect.bottom;

        let isVisible = elementTop < window.innerHeight && elementBottom >= 0;

        return isVisible;
    }

    window.addEventListener('scroll', function(){
        if(isScrolledIntoView(passionSection)) passionParallax.applyParallax();
        if(isScrolledIntoView(factsSection)) factsParallax.applyParallax();
        if(isScrolledIntoView(brandsSection)) brandsParallax.applyParallax();
    });
}

