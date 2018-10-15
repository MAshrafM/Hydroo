export default class Accordion{
    constructor(acc, content, toggle){
        this.accordion = acc;
        this.content = content;
        this.toggle = toggle;
        this.amount = this.toggle.length;
    }

    openCloseAccordion(eventTarget){
        let that = this;
        let selectors = {
            toggleIsActive: 'accordion__toggle__is-active',
            accordionIsActive: 'accordion__contents__is-active'
        }

        function closeActiveTabIfClickedAgain(){
            if(isClickedAgain()){
                closeActiveTab();
            } else {
                closeAllActiveTabs();
                openClickedTab();
            }
        }

        function isClickedAgain(){
            return eventTarget.classList.contains(selectors.toggleIsActive);
        }

        function closeActiveTab(){
            eventTarget.classList.remove(selectors.toggleIsActive);
            eventTarget.nextElementSibling.classList.remove(selectors.accordionIsActive);
        }

        function closeAllActiveTabs(){
            for(let i = 0; i < that.amount; i++){
                that.toggle[i].classList.remove(selectors.toggleIsActive);
                that.content[i].classList.remove(selectors.accordionIsActive);
            }
        }

        function openClickedTab(){
            eventTarget.classList.add(selectors.toggleIsActive);
            eventTarget.nextElementSibling.classList.add(selectors.accordionIsActive);
        }
        
        closeActiveTabIfClickedAgain();      
    }

    initiate(acc){
        let that = this;
        function listenForClick(){
            for(let i = 0; i < that.amount; i++){
                that.toggle[i].addEventListener('click', function(event){
                    acc.openCloseAccordion(this);
                }, false);
            }
        }

        listenForClick();
    }
}
