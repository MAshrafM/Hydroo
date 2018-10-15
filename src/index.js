import "./styles/main.scss";

import Accordion from './scripts/accordion';

const accordion = document.querySelectorAll('.accordion');
const accordionContent = document.querySelectorAll('.accordion__contents');
const accordionToggle = document.querySelectorAll('.accordion__toggle');

let ourMission = new Accordion(accordion, accordionContent, accordionToggle);
ourMission.initiate(ourMission)