let currentPoints = 0;
let life = 3;

function points(){
    for(let i = 0; i < total; i++){
      if(bricks[i].hit){
        currentPoints++;
      }
    }
    text("Pontos: " + currentPoints, 10, 20)

    if(currentPoints == lin * col){
      alert("Você ganhou!")
      noLoop()
    }
  }

function lifePoints(){
    text("Vidas: " + life, 10, 40)
    
    if(life == 0){
        alert("Você perdeu!")
        noLoop()
    }
    }