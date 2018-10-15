import "./styles/main.scss";

import Accordion from './scripts/accordion';
import Parallax from './scripts/parallax';
import StickyNav from './scripts/sticky_nav';
import AnimateIncrement from './scripts/animate_increment';
import debounce from 'lodash.debounce';

window.onload = function() {
    // accordion
    const accordion = document.querySelectorAll('.accordion');
    const accordionContent = document.querySelectorAll('.accordion__contents');
    const accordionToggle = document.querySelectorAll('.accordion__toggle');
    // parallax
    const passionSection = document.getElementById('passion_bg');
    const factsSection = document.getElementById('Factsbg');
    const brandsSection = document.getElementById('Brandsbg');
    // navbar
    const navbar = document.getElementById('stickyNavbar');
    // facts
    const factsSectionAnimateSetting = {
        element: document.querySelectorAll('.fact__number'),
        startNum: 0,
        endNum: [55, 25, 780, 8982],
        duration: 5
    };
    // skills
    const skillsSection = document.getElementById('skills');
    const skillsNumber = document.querySelectorAll('.progress-bar__percent');
    const progBars = document.querySelectorAll('.progress-bar__fill');
    const skillsSectionAnimateSetting = {
        element: document.querySelectorAll('.progress-bar__percent'),
        startNum: 0,
        endNum: [40, 50, 70, 90, 100],
        duration: 5
    };
    // create accordion
    let ourMission = new Accordion(accordion, accordionContent, accordionToggle);
    ourMission.initiate(ourMission)

    // create parallax
    let passionParallax = new Parallax('passion_bg');
    let factsParallax = new Parallax('Factsbg');
    let brandsParallax = new Parallax('Brandsbg');

    // navbar position
    let navbarPos = navbar.offsetTop;

    // animation flag
    let factAnimationDone = false;
    let skillsAnimationDone = false;
    // section visible function
    function isScrolledIntoView(e){
        let elementRect = e.getBoundingClientRect();
        let elementTop = elementRect.top;
        let elementBottom = elementRect.bottom;

        let isVisible = elementTop < window.innerHeight && elementBottom >= 0;

        return isVisible;
    }

    window.addEventListener('scroll', function(){
        incrementDebounced();
        StickyNav(navbar, navbarPos, 'h-header__navbar-main__is-sticky')
        if(isScrolledIntoView(passionSection)) passionParallax.applyParallax();
        if(isScrolledIntoView(factsSection)) factsParallax.applyParallax();
        if(isScrolledIntoView(brandsSection)) brandsParallax.applyParallax();
    });
    // Animation
    let incrementDebounced = debounce(() => {
        if(isScrolledIntoView(skillsSection) && !skillsAnimationDone){
            progBars.forEach((bar, index) => bar.classList.add('progress-bar__fill__is-' + skillsSectionAnimateSetting.endNum[index] + 'p'));

            AnimateIncrement(skillsSectionAnimateSetting);
            skillsAnimationDone = true;
        }

        if(isScrolledIntoView(factsSection) && !factAnimationDone){
            AnimateIncrement(factsSectionAnimateSetting);
            factAnimationDone = true
        }

    }, 300);
}

