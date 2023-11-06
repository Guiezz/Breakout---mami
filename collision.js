function colisao() {
  //colisao player e parede
  if (player.x <= 0) {
    player.x = 0;
  }
  if (player.x >= canvasWidth - player.w) {
    player.x = canvasWidth - player.w;
  }
  // colisao bola e parede
  if (ball.x <= 0 || ball.x >= canvasWidth) {
    ball.speedX *= -1;
  }
  if (ball.y <= 0 || ball.y >= canvasHeight) {
    ball.speedY *= -1;
  }
// colisao player e bola
  if (
    ball.x >= player.x &&
    ball.x <= player.x + player.w &&
    ball.y >= player.y &&
    ball.y <= player.y + player.h
  ) {
    if (ball.speedY > 0) {
      ball.speedY *= -1;
    }
  }
  // colisao chao (- 1 vida)
  
  if(ball.y >= canvasHeight){
    life--;
    ball.x = canvasWidth / 2;
    ball.y = canvasHeight / 2;
  }

  
  

  // colisao tijolos 

  for (let i = 0; i < total; i++) {
    //baixo
    if (
      ball.y <= bricks[i].y + bricks[i].h / 2 &&
      ball.y > bricks[i].y &&
      ball.x > bricks[i].x - bricks[i].w / 2 &&
      ball.x < bricks[i].x + bricks[i].w / 2 &&
      bricks[i].hit == false
    ) {
      ball.speedY *= -1;
      bricks[i].hit = true;
    }
    // topo
    if (
      ball.y >= bricks[i].y - bricks[i].h / 2 &&
      ball.y < bricks[i].y &&
      ball.x > bricks[i].x - bricks[i].w / 2 &&
      ball.x < bricks[i].x + bricks[i].w / 2 &&
      bricks[i].hit == false
    ) {
      ball.speedY *= -1;
      bricks[i].hit = true;
    }
    // esquerda
    if (
      ball.x >= bricks[i].x - bricks[i].w / 2 &&
      ball.x <= bricks[i].x + bricks[i].w / 2 &&
      ball.y >= bricks[i].y &&
      ball.y <= bricks[i].y + bricks[i].h &&
      bricks[i].hit == false
    ) {
      ball.speedX *= -1;
      bricks[i].hit = true;
    }
    // direita
    if (
      ball.x <= bricks[i].x - bricks[i].w / 2 &&
      ball.x >= bricks[i].x + bricks[i].w / 2 &&
      ball.y >= bricks[i].y &&
      ball.y <= bricks[i].y + bricks[i].h &&
      bricks[i].hit == false
    ) {
      ball.speedX *= -1;
      bricks[i].hit = true;
    }
  }
}
