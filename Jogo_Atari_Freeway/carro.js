// código do carro
let xCar = [600, 600, 600, -73, -73, 73]
let yCar = [40, 96, 148, 210, 260, 316];
let velocidadeDosCarros = [7.5, 5.5, 4.5, 4, 6.5, 3.5]
let comprimentoDoCarro = 70;
let alturaDoCarro = 41;


function mostrarCar(){
  for(let i = 0; i < imagemDosCarros.length; i++){
  image(imagemDosCarros[i], xCar[i], yCar[i], comprimentoDoCarro, alturaDoCarro );
  }
}

function movimentCar(){
  for(let i = 0; i < imagemDosCarros.length; i++){  
   xCar[i] -= velocidadeDosCarros[i];
  }
}


function resetCarros () {
  for (let i = 0; i < imagemDosCarros.length; i++) {
    if (confereCarros1(xCar[i])) {
      xCar[i] = 600;
    }
    if (confereCarros2(xCar[i])) {
      xCar[i] = -73;
    }
  }
}

function confereCarros1 (xCar) {
  return xCar < -73;
}

function confereCarros2 (xCar2) {
  return xCar2 > 600;
}
