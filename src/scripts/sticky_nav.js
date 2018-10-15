export default function StickyNav(element, position, classString){
    if(window.pageYOffset >= position){
        element.classList.add(classString);
    } else {
        element.classList.remove(classString);
    }
}