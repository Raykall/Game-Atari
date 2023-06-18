// variaveis do Personagem
let yAtor = 366;
let xAtor = 100;
let colisão = false;
let meusPontos = 0;

function mostrarAtor() {
  image(imageDoAtor, xAtor, yAtor, 30, 40);
}

function movimentAtor(){
  if(keyIsDown(UP_ARROW)){
     yAtor -= 2;
  }
  if(keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
    yAtor += 3;
    }
  }
 /* if(keyIsDown(LEFT_ARROW)){
    xAtor -= 2;
  }
  if(keyIsDown(RIGHT_ARROW)){
    xAtor += 2;
  }*/ 
}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for(let i = 0; i < imagemDosCarros.length; i++){
    colisao = collideRectCircle(xCar[i], yCar[i], comprimentoDoCarro, alturaDoCarro, xAtor, yAtor, 15)
    if(colisao){
     somColidiu.play();
      voltaParaInicio();
    if(pontosAcimaDeZero()){
       meusPontos -= 1;
    }
    }
  }
}

function voltaParaInicio(){
  yAtor = 366
}

function incluirPontos(){
  textSize(30);
  fill(0, 11, 41);
  textFont(pixel);
  text(meusPontos, 176, 25);
}

function marcarPonto(){
  if (yAtor < 15){
    meusPontos += 1;
    somPontos.play();
    voltaParaInicio();
  }
}

function  pontosAcimaDeZero(){
  return meusPontos > 0;
}


function podeSeMover(){
    return yAtor < 366;
}