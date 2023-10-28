let ball = {

    x: canvasWidth / 2,
    y: canvasHeight / 2,
    r: 10,

    speedX : 5,
    speedY : 5,

    play: function () {
        this.x += this.speedX;
        this.y += this.speedY;
    }

}