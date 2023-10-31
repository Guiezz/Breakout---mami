let lin = 8;
let col = 7;
let total = lin * col;


class brick {
  constructor(x, y, w, h, color) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.color = color;
    this.hit = false;
  }
  brick(vx, vy, vw, vh) {
    this.x = vx;
    this.y = vy;
    this.w = vw;
    this.h = vh;
    hit = false;
  }
  display() {
    fill(this.color);
    rectMode(CENTER);
    rect(this.x, this.y, this.w, this.h);
  }
}

let bricks = [];

function bricksArray() {
  for (let i = 0; i < lin; i++) {
    for (let j = 0; j < col; j++) {
      bricks.push(
        new brick(
          i * (50 + 15) + 70,
          j * (20 + 5) + 25,
          50,
          20,
          color(random(255), random(255), random(255))
        )
      );
    }
  }
}

function drawBricks() {
  let newBricks = [];
  for (let i = 0; i < total; i++) {
    if (!bricks[i].hit) {
      bricks[i].display();
      newBricks.push(bricks[i]);
    }
  }
  bricks = newBricks;
  total = bricks.length; // Atualiza o número total de tijolos

  // Se o número total de tijolos for zero, o jogador ganha
  if(total == 0){
    alert("Você ganhou!");
    document.location.reload();
  }
}
