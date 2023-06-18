let imageDaEstrada;
let imageDoAtor;
let imageDoCarro1;
let imageDoCarro2;
let imageDoCarro3;
let imageDoCarro4;
let imageDoCarro5;
let imageDoCarro6;

let somTrilha;
let trilha = 0;
let somPontos;
let somColidiu;

function preload(){
 imageDaEstrada = loadImage("assets/images/fundo.png");
  imageDoAtor = loadImage("assets/images/player.png");
  imageDoCarro1 = loadImage("assets/images/carro1.png");
  imageDoCarro2 = loadImage("assets/images/carro2.png");
  imageDoCarro3 = loadImage("assets/images/carro3.png");
  imageDoCarro4 = loadImage("assets/images/carro4.png");
  imageDoCarro5 = loadImage("assets/images/carro5.png");
  imageDoCarro6 = loadImage("assets/images/carro6.png");
  imagemDosCarros = [imageDoCarro1, imageDoCarro2, imageDoCarro3,imageDoCarro4, imageDoCarro5, imageDoCarro6];
  
  somTrilha = loadSound("assets/sounds/trilha.mp3");
  somPontos = loadSound("assets/sounds/pontos.wav");
  somColidiu = loadSound("assets/sounds/colidiu.mp3");
  
  pixel = loadFont("assets/images/fonte.ttf");
}