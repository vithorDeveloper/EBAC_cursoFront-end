
// Usando Classe
class Carro{
  constructor(modelo, cor, preco){
    this.modelo = modelo;
    this.cor = cor;
    this.preco = preco;
  }
}

class CarroZeroKm extends Carro {
  constructor(modelo, cor, preco, zeroKm){
    super(modelo, cor, preco)
      this.zeroKm = zeroKm
  }
}

class CarroUsado extends Carro {
  constructor(modelo, cor, preco, usado){
    super(modelo, cor, preco)
    this.usado = usado
  }
}



const volvo = new CarroZeroKm("VC60", "preto", 170000, true)
const rangeRover = new CarroZeroKm("Velar", "prata", 150000, true)
const nissan = new CarroUsado("Kicks", "branco", 70000, true)

console.log(volvo, rangeRover, nissan)


// Usando Função construtora
function Moto (modelo, cor, preco){
  this.modelo = modelo
  this.cor = cor
  this.preco = preco
}

function MotoZeroKm (modelo, cor, preco, zeroKm){
  Moto.call(this, modelo, cor, preco)
  this.zeroKm = zeroKm
}

function MotoUsada (modelo, cor, preco, usada){
  Moto.call(this, modelo, cor, preco)
  this.usada = usada
}

const honda = new MotoZeroKm("Titan 160", "vermelha", 18000, true)
const yamaha = new MotoUsada("Fazer 150", "Azul", 11000, true)
const shineray = new MotoZeroKm("SHE-S", "preta", 10000, true)

console.log(honda, yamaha, shineray)