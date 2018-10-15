export default class Parallax{
    constructor(eId){
        this.bgContainerDiv = document.getElementById(eId);
        this.distanceFromTop = this.bgContainerDiv.offsetTop;
        this.bgHeight = getImageDim(this.bgContainerDiv).height;
    }

    applyParallax(){
        let that = this;
        let styles = {
            windowWidth: window.document.body.clientWidth,
            bgContainer: this.bgContainerDiv.style
        }

        function moveBgQ(){
            styles.bgContainer.backgroundPosition = '0' + ((window.pageYOffset - that.distanceFromTop - (that.bgHeight/4)) * 0.3) + 'px';
        }

        function moveBgH(){
            styles.bgContainer.backgroundPosition = '0' + ((window.pageYOffset - that.distanceFromTop - (that.bgHeight/2)) * 0.3) + 'px';
        }

        function isWithinRange(property, min, max = Infinity){
            return property >= min && property < max;
        }

        function changeBgPosition(){
            if(isWithinRange(styles.windowWidth, 1350, 1500)){
                moveBgQ();
            } else if(isWithinRange(styles.windowWidth, 1500)){
                moveBgH();
            }
        }
        // reset styles if window is out of range
        function resetIfOoR(){
            window.addEventListener('resize', () => styles.bgContainer.removeProperty('background-position'));
        }

        changeBgPosition();
        resetIfOoR();
    }
}

function getImageDim(eId){
    let image = new Image();
    image.src = window.getComputedStyle(eId).getPropertyValue('background-image').replace(/url\((['"])?(.*?)\1\)/gi, '$2');
    return {
        width: image.width,
        height: image.height
    };
}