function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(imageDaEstrada);
  mostrarAtor();
  mostrarCar();
  movimentCar();
  resetCarros ();
  movimentAtor();
  
  verificaColisao();
    marcarPonto();
  incluirPontos();

}



