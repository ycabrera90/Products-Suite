export class Touch {
    constructor(domElement) {
        this.domElement = domElement;

        this.slideRight = () => { };
        this.slideLeft = () => { };

        var startPointX;
        var startPointY;
        var endPointX;
        var endPointY;
        var deltaX;
        var deltaY;

        domElement.addEventListener('touchstart', (e) => {
            [startPointX, startPointY] = this.getStartPoint(e);
        }, false);

        domElement.addEventListener('touchend', (e) => {
            [endPointX, endPointY] = this.getEndPoint(e);
            [deltaX, deltaY] = [endPointX - startPointX, endPointY - startPointY]

            // detect slide right
            if (deltaX > 60 & (Math.abs(deltaY) < 60)) {
                this.slideRightFuntionHander();
            }

            // detect slide left
            if (deltaX < -60 & (Math.abs(deltaY) < 60)) {
                this.slideLeftFuntionHander();
            }
        }, false);
    }

    getStartPoint(event) {
        return [event.touches[0].clientX, event.touches[0].clientY];
    }
    getEndPoint(event) {
        return [event.changedTouches[0].clientX, event.changedTouches[0].clientY];
    }
    slideRightFuntionHander() {
        this.slideRight();
    }
    slideLeftFuntionHander() {
        this.slideLeft();
    }
}