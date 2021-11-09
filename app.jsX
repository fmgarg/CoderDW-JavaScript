//array de productos

class Producto {

  constructor (ID, nombre, precio) {
    this.ID = ID
    this.nombre = nombre.toLowerCase ()
    this.precio = precio

  }
}
// lista de productos. Cuando hacemos create se gruardan en el array productos

// const productos =[]; reemplazo el const x let cuando busco la lista de productos del storage Local

//let productos =[];

// productos es lo que esta en el storage o || va a ser un array vacio []
let productos = JSON.parse(localStorage.getItem ('productos')) || []

//metodo que retorna la lista de productos del local storage y con Json.parse () lo convierte de nuevo en objeto array

const getAll = () =>{

//  productos = JSON.parse(localStorage.getItem ('productos'))

  console.log (typeof productos)

  return productos;
};

//metodo para agregar un producto a la lista y guardarlo en localStorage y convertir el objeto array en un string

const create = (producto) => {

  productos.push (producto)

  localStorage.setItem ('productos', JSON.stringify  (productos))
}

//creando productos. metodo create

const producto1 = new Producto ('1','MytvStick','80');

const producto2 = new Producto ('2','pendrive','20');

const producto3 = new Producto ('3','notebook','1000');

//agregando productos a la lista. ejecutando el metodo create.

/*
create(producto1);
create(producto2);
create(producto3);
*/

//iteracion de creación de elementos productos en el DOM de merchandise.html pero depende del metodo create para funcionar
/*
for (const producto of productos) {
  let contenedor = document.createElement("div");
  contenedor.innerHTML = `<h3> ID: ${producto.ID}</h3>
                          <p>  Producto: ${producto.nombre}</p>
                          <b> $ ${producto.precio}</b>`;
  document.body.appendChild(contenedor);
}
*/

//metodo para obtener elementos del DOM

const listaProductos = document.getElementById('lista-productos')

const formProductos = document.getElementById('form-productos')
const inputNombreProducto = document.getElementById('input-nombre-producto')
const inputPrecioProducto = document.getElementById('input-precio-producto')

//console.log (listaProductos)

//escuchar el evento submit del form para agregar productos

formProductos.addEventListener( 'submit', (event) =>{
  // event.preventDefault ()
  // console.log (event)
  // console.log ("aca tengo que agregar el producto")

  const nombreProducto = inputNombreProducto.value 
  const precioProducto = inputPrecioProducto.value
//nueva instancia de la clase producto
  const producto = new Producto (nombre, precio)
  create (producto) 
})
        


//metodo para agregar productos a la lista de productos html

for (let producto of productos){

  console.log (producto)
 //crea el elemento li
  let itemProducto = document.createElement('li')
 //le agrega el nombre del producto
  itemProducto.textContent = producto.nombre
  //metodo para agregar hijos
  listaProductos.appendChild(itemProducto)
}


//metodo para hallar un producto

const findOne = (nombre) => {

  nombre = nombre.toLowerCase()

  const producto = productos.find( producto => producto.nombre === nombre);

  if (!nombre) {

    throw new Error (`no existe ${nombre}`)
  }

  return producto
}

/*metodo para hallar un producto

const findOne = (nombre) => {...}*/



/*metodo para borrar un producto

const remove = (nombre) => {

  const producto = findOne (nombre)
  const index = productos.indexOf (producto)
  productos.splice (index, 1)
}
*/

/*metodo para modificar un producto (revisar error nombre is not definet)

const update = (nombre, precio)
const producto = findOne (nombre)
producto.precio = precio
*/

//buscar un producto

//console.log (findOne ('pendrive'));


//alert ("estos son los productos seleccionados: "+"pendrive"+", "+"notebook"+", "+"MytvStick"+" por un valor de usd1100");

//for (let index = 0; index < Producto.length; index++){

//alert ("estos son los productos seleccionados"+": "+Producto.toString());

//};





//devuelve los valores por la consola. print. tambien ejecuta el metodo y los trae del storage

console.log(getAll())

/*const pagoCuotas = (numeroDeCuotas, importe) => {

  switch (Number(numeroDeCuotas)) {
      case 1:
           console.log(importe);
          break;
      case 3: case 6:
      
          for (let i = 1; i <= numeroDeCuotas; i++) {
              alert("cuota n°------------" + i + " de: " + importe * 1.2 / numeroDeCuotas)   
          }
          break;
      case 9: case 12:
          for (let i = 1; i <= numeroDeCuotas; i++) {
              alert("cuota n°------------" + i + " de: "+ importe * 1.35  / numeroDeCuotas)
          }
          
          break;
      default:
          console.log("Por favor, ingrese 1, 3, 6, 9 o 12 cuotas");
          break;
  }
}

let cuotas = parseInt(prompt("Por favor, ingrese 1, 3, 6, 9 o 12 cuotas"));

pagoCuotas(cuotas, 1100)

*/

