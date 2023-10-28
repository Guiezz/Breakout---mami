let player = {
  x: canvasWidth / 2 - 50,
  y: canvasHeight - 20,
  w: 50,
  h: 5,

  play: function () {
    if (keyIsDown(LEFT_ARROW)) {
      this.x -= 5;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.x += 5;
    }
  },
};

