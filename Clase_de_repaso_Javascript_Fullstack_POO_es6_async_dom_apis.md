# Clase de Repaso Fullstack JavaScript Node Express.js

---

# Objetivos Generales

1. Comprender y aplicar los fundamentos de la Programación Orientada a Objetos en JavaScript.
2. Utilizar características modernas de ES6+ para resolver problemas.
3. Manipular el DOM e implementar eventos.
4. Aplicar programación asíncrona correctamente.
5. Consumir APIs externas e integrar datos en aplicaciones.

---

# 1. Programación Orientada a Objetos (POO)

## Objetivo
Comprender cómo modelar problemas mediante objetos en JavaScript.

## Conceptos y Definiciones
- Clase: Plantilla/Template que define atributos y métodos.
- Instancia: Resultado de la creación de un objeto a partir de una clase.
- Objeto: Instancia concreta de una clase.
- Propiedad: Dato asociado a un objeto.
- Método: Función definida dentro de un objeto.

```js

//Definir una clase Auto
//Ejemplo Automotora
class Auto(){
  #proveedor
  constructor(marca, modelo, anno, precio, stock, proveedor){
    this.#proveedor = proveedor
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

  getProveedor(){
    return this.#proveedor
  }
}
//Instancia un Objeto
const nuevoObjetoAuto = new Auto("Toyota","CR-V",2025,15990000,20, "Totoya JPN")
//Utilizar Objeto
const verDetallesAuto() =>{
  console.log("------- Detalles del Auto -------")
  console.log(`Marca: ${nuevoObjetoAuto.marca}`);
  console.log(`Modelo: ${nuevoObjetoAuto.modelo}`);
  console.log(`Año: ${nuevoObjetoAuto.anno}`);
  console.log(`Precio: ${nuevoObjetoAuto.precio}`);
  console.log(`Stock: ${nuevoObjetoAuto.stock}`);

  console.log(`Proveedor: ${nuevoObjetoAuto.getProveedor()}`);

}

//Utilizar el atributo de un objeto

//Utilizar un m[etodo de este objeto




```


## Pilares de la POO

* Encapsulamiento: Permite restringir el acceso directo a los datos internos y controlarlos mediante métodos.

```js
class CuentaBancaria {
  #saldo;

  constructor(saldoInicial) {
    this.#saldo = saldoInicial;
  }

  depositar(monto) {
    if (monto > 0) {
      this.#saldo += monto;
    }
  }

  obtenerSaldo() {
    return this.#saldo;
  }
}

const cuenta = new CuentaBancaria(100);
cuenta.depositar(50);
console.log(cuenta.obtenerSaldo());
```

* Herencia: Permite que una clase derive de otra reutilizando atributos y comportamientos.

```js
class Usuario {
  constructor(nombre) {
    this.nombre = nombre;
  }

  saludar() {
    return `Hola, soy ${this.nombre}`;
  }
}

class Admin extends Usuario {
  eliminarUsuario() {
    return `Usuario eliminado por ${this.nombre}`;
  }
}

const admin = new Admin("Roberto");
console.log(admin.saludar());
console.log(admin.eliminarUsuario());
```

* Polimorfismo: Permite que un mismo método tenga diferentes comportamientos según la clase que lo implemente.

```js
class Animal {
  hacerSonido() {
    return "Sonido genérico";
  }
}

class Perro extends Animal {
  hacerSonido() {
    return "Ladrido";
  }
}

class Gato extends Animal {
  hacerSonido() {
    return "Maullido";
  }
}

const animales = [new Perro(), new Gato()];
animales.forEach(a => console.log(a.hacerSonido()));

class Producto{
  calcularIva(precio){
    return this.precio*0.19;
  }
}

class Mayorista extends Producto{
  calcularIva(precio){
    return this.precio*0.23;
  }
}

class Contenedor extends Producto{
  calcularIva(precio){
    return this.precio*0.05;
  }
}





```

* Abstracción: Permite representar solo los aspectos relevantes de una entidad, ocultando la complejidad interna. El usuario del objeto interactúa con métodos simples sin conocer la lógica interna.

```js
class Carrito {
  constructor() {
    //detalle interno (oculto conceptualmente)
    this.productos = []; 
  }

  agregarProducto(nombre, precio) {
    //el usuario no maneja estructuras internas directamente
    this.productos.push({ nombre, precio });
  }

  calcularTotal() {
    // lógica interna que el usuario no necesita conocer
    return this.productos.reduce((acc, producto) => {
      return acc + producto.precio;
    }, 0);
  }
}

const carrito = new Carrito();

// uso simple (interfaz pública)
carrito.agregarProducto("Mouse", 20);
carrito.agregarProducto("Teclado", 30);

// el usuario solo pide el resultado, sin saber cómo se calcula
console.log(carrito.calcularTotal());

```

## Ejemplo adicional: Clases

```js
class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
}

class Carrito {
  constructor() {
    this.productos = [];
  }

  agregar(producto) {
    this.productos.push(producto);
  }

  total() {
    return this.productos.reduce((acc, p) => acc + p.precio, 0);
  }
}

const carrito = new Carrito();
carrito.agregar(new Producto("Laptop", 1000));
carrito.agregar(new Producto("Mouse", 50));
console.log(carrito.total());
```


# 2. JSON

## Objetivo
Comprender el formato de intercambio de datos entre sistemas.

## Definiciones
- JSON: Formato de texto para representar datos estructurados.
- Parse: Conversión de JSON a objeto JavaScript.
- Stringify: Conversión de objeto JavaScript a JSON.

## Ejemplo
```js
const usuariosJSON = `[
  {"id":1,"nombre":"Ana"},
  {"id":2,"nombre":"Luis"}
]`;

const usuarios = JSON.parse(usuariosJSON);
usuarios.forEach(u => console.log(u.nombre));

const nuevoJSON = JSON.stringify(usuarios);
```

---

# 3. JavaScript ES6+

## Objetivo
Aplicar nuevas características del lenguaje para mejorar la calidad del código.

## Definiciones
- let: Variable con alcance de bloque.
- const: Variable cuyo valor no puede ser reasignado.
- Arrow function: Forma simplificada de definir funciones.

## Ejemplo
```js
const productos = [
  { nombre: "Mouse", precio: 20 },
  { nombre: "Teclado", precio: 30 }
];

const nombres = productos.map(p => p.nombre);
console.log(nombres);
```

## Destructuring, Spread y Rest

### Definiciones
- Destructuring: Extracción de propiedades de objetos o elementos de arreglos.
- Spread: Expansión de elementos.
- Rest: Agrupación de múltiples elementos en una variable.

### Ejemplo
```js
//Desestructuring
const user = { nombre: "Ana", edad: 20 };
//Antes
const nombre = user.nombre;
console.log(nombre)

//Ahora
const { nombre, edad } = user;
console.log(nombre)
console.log(edad)


//Spread Operator (Expandir valores de un arreglo u objeto dentro de otra estructura de datos)
const numeros = [1,2,3];
const copia = [...numeros, 4];
const numerosDisponibles = [8,10,15]

const todosLosNumeros = [...numeros,...numerosDisponibles];

//Objetos con spread operator

const usuario1 = {
  nombre: "Juan",
  apellido: "Valdebenito",
  area: "TI",
  empresa: "ATI"
}

const usuario2 = {
  ...usuario1,
  nombre: "Roberto",
  apellido: "Gonzalez"
}

//Parametros REST
const sumar = (...nums) => nums.reduce((a,b)=>a+b,0);
console.log(sumar(1,2,3,4));


const sumar = (nums) => nums.reduce((a,b)=>a+b,0);
console.log(sumar([1,2,3,4]));
```

---

# 4. DOM y Eventos

## Objetivo
Manipular dinámicamente la estructura de un documento HTML.

## Definiciones
- DOM: Representación estructurada del documento HTML.
- Nodo: Cada elemento dentro del DOM.
- Evento: Acción detectada por el sistema.

## Ejemplo
```js
const btn = document.querySelector("#btn");
const lista = document.querySelector("#lista");

btn.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = "Nuevo elemento";
  lista.appendChild(li);
});
```

---

# 5. Programación Asíncrona

## Objetivo
Comprender y aplicar mecanismos de ejecución no bloqueante.
-- Leer archivos .json y no tener que esperar su termino
-- consultar una API y dejar el flujo principal de la ejecución de mi código
SIN CONGELAR EL FLUJO PRINCIPAL (EVENT LOOP)

## Definiciones
- Callback: Función pasada como argumento.
- Asincronía: Ejecución independiente del flujo principal.

## Ejemplo
```js
function obtenerDatos(callback) {
  setTimeout(() => {
    callback({ nombre: "Ana" });
  }, 1000);

}

obtenerDatos(data => console.log(data));
```

---

# 6. Promesas

## Definiciones
- Promise: Representa una operación que puede completarse en el futuro.
- then: Maneja el resultado exitoso.
- catch: Maneja errores.

## Ejemplo
```js
const promesa = new Promise((resolve, reject) => {
  setTimeout(() => resolve("Datos cargados"), 1000);
});

promesa
  .then(data => console.log(data))
  .catch(err => console.error(err));

function cargarDatos() {
  return new Promise((resolve, reject) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => {
        if (!res.ok) {
          reject("Error en la respuesta HTTP");
        }
        return res.json();
      })
      .then(data => resolve(data))
      .catch(error => reject(error));
  });
}

// Consumo de la promesa
cargarDatos()
  .then(data => console.log(data))
  .catch(error => console.error(error));




```

---

# 7. Async/Await

## Definiciones
- async: Declara una función asíncrona.
- await: Espera la resolución de una promesa.

## Ejemplo
```js
async function cargarDatos() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

cargarDatos();
```

---

# 8. Consumo de APIs

## Objetivo
Obtener y procesar datos desde servicios externos.

## Definiciones
- API: Interfaz de comunicación entre sistemas.
- Endpoint: Dirección de acceso a un recurso.
- Request: Solicitud enviada.
- Response: Respuesta recibida.

## Ejemplo XHR
```js
const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
xhr.onload = () => {
  const data = JSON.parse(xhr.response);
  console.log(data);
};
xhr.send();
```

## Ejemplo Fetch
```js
fetch("https://jsonplaceholder.typicode.com/users")
  .then(res => res.json())
  .then(data => console.log(data));
```

## Ejemplo Integrado
```js
async function mostrarUsuarios() {
  const contenedor = document.querySelector("#app");

  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const usuarios = await res.json();

    contenedor.innerHTML = usuarios
      .map(u => `<p>${u.name}</p>`)
      .join("");
  } catch (e) {
    contenedor.textContent = "Error al cargar datos";
  }
}

mostrarUsuarios();
```

---

# 9. Integración Final

```js
class App {
  constructor() {
    this.container = document.querySelector("#app");
  }

  async init() {
    const data = await this.getData();
    this.render(data);
  }

  async getData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    return res.json();
  }

  render(data) {
    this.container.innerHTML = data.map(u => `<p>${u.name}</p>`).join("");
  }
}

new App().init();
```

---
