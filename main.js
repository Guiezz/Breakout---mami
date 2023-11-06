//Jogo breakout em p5js - 2023
// Autor: Guilherme Bessa

// Variáveis do jogo
let canvasWidth = 600;
let canvasHeight = 400;

let imgPlayer, imgBall;

function preload(){
  imgPlayer = loadImage('assets/plataforma.png')
  imgBall = loadImage('assets/bolinha.png')
}

function setup() {
  noStroke()
  createCanvas(canvasWidth, canvasHeight);
  bricksArray()

}


function draw() {
  background(125);

  drawBricks()
  colisao();
  player.play();
  fill(255)
  rectMode(CORNER)
  image(imgPlayer,player.x, player.y, player.w, player.h);
  fill(255)
  image(imgBall,ball.x, ball.y, ball.r, ball.r);
  ball.play();
  points()
  lifePoints()
}
