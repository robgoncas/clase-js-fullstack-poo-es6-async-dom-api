
//Definir una clase Auto
//Ejemplo Automotora
class Auto{
  constructor(marca, modelo, anno, precio, stock){
    this.marca = marca;
    this.modelo = modelo;
    this.anno = anno;
    this.precio = precio;
    this.stock = stock;
  }
  venderAuto(){
    this.stock = this.stock-1;
  }
  retornarAuto(){
    this.stock = this.stock+1
  }
  obtenerAntiguedadAuto(){
    return new Date().getFullYear()-this.anno
  }
}

//Instancia un Objeto
const nuevoObjetoAuto = new Auto("Toyota","CR-V",2025,15990000,20)
//Utilizar Objeto
//Utilizar el atributo de un objeto
const verDetallesAuto = () => {
  console.log("------- Detalles del Auto -------")
  console.log(`Marca: ${nuevoObjetoAuto.marca}`);
  console.log(`Modelo: ${nuevoObjetoAuto.modelo}`);
  console.log(`Año: ${nuevoObjetoAuto.anno}`);
  console.log(`Precio: ${nuevoObjetoAuto.precio}`);
  console.log(`Stock: ${nuevoObjetoAuto.stock}`);
}

//Utilizar un método de este objeto

const venderAuto = () => {
  nuevoObjetoAuto.venderAuto();
  console.log("Auto vendido, stock actualizado");
  console.log(`Stock actual: ${nuevoObjetoAuto.stock}`);
};


