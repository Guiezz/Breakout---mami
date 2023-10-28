//Jogo breakout em p5js - 2023
// Autor: Guilherme Bessa

// Variáveis do jogo
let canvasWidth = 600;
let canvasHeight = 400;
function setup() {
  createCanvas(canvasWidth, canvasHeight);
  bricksArray()
}


function draw() {
  background(220);
  drawBricks()
  colisao();
  player.play();
  fill(255)
  rectMode(CORNER)
  rect(player.x, player.y, player.w, player.h);
  fill(255)
  ellipse(ball.x, ball.y, ball.r, ball.r);
  ball.play();

}
