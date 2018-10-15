export default function AnimateIncrement(setting){
    let currNum = 0;
    let time = 0;
    let fps = 30;
    let animationInterval;
    let elementIncremented;

    function runTime(){
        incrementTime();
        runForEachElement();
    }

    function incrementTime(){
        time += (1 / fps);
    }

    function runForEachElement(){
        setting.element.forEach((element, index) => {
            elementIncremented = index;
            incrementNumWithEase();
            displayCurrentNum();
            ifEndNumDisplayAndClear();
        });
    }

    function incrementNumWithEase(){
        let delta = setting.endNum[elementIncremented] - setting.startNum;
        currNum = Math.floor(quadEase(time, setting.startNum, delta, setting.duration));
    }

    function quadEase(time, begin, change, duration){
        if((time /=duration / 2) < 1){
            return change / 2 * time * time + begin;
        } else {
            return -change / 2 * ((--time) * (time -2) - 1) + begin;
        }
    }

    function displayCurrentNum(){
        setting.element[elementIncremented].innerText = currNum;
    }

    function ifEndNumDisplayAndClear(){
        if(hasReachedEnd()){
            clearInterval(animationInterval);
            setHtmltoFinal();
            return;
        }
    }

    function hasReachedEnd(){
        return currNum >= setting.endNum[elementIncremented];
    }

    function setHtmltoFinal(){
        setting.element[elementIncremented].innerText = setting.endNum[elementIncremented];
    }

    animationInterval = setInterval(runTime, 600 / fps);
}