let jogando = false;

let ball = {
  x: player.x + player.w / 2,
  y: player.y - 10,
  r: 10,

  speedX: 5,
  speedY: 5,

  play: function () {
    if (jogando == false) {
      ball.x = player.x + player.w / 2 - 5;
      ball.y = player.y - 8;
    }

    if(keyIsDown(32)){
      jogando = true;
    }
    
    if (jogando == true) {
      ball.x += this.speedX;
      ball.y -= this.speedY;
    }
  },
};
