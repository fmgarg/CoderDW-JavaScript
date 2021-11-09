//array de productos

class Producto {

  constructor (ID, nombre, precio, descripcion, stock, imagen) {
    this.ID = ID
    this.nombre = nombre.toLowerCase ()
    this.precio = precio
    this.descripcion = descripcion
    this.stock = stock
    this.imagen = imagen

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

 /* const producto1 = new Producto ('1','MytvStick','80');

  const producto2 = new Producto ('2','pendrive','20');

  const producto3 = new Producto ('3','notebook','1000');
*/

//agregando productos a la lista. ejecutando el metodo create.
/*
create(producto1);
create(producto2);
create(producto3);
*/

//metodo para obtener elementos del DOM

const listaProductos = document.getElementById('lista-productos')

const formProductos = document.getElementById('form-productos')
const inputIdProducto = document.getElementById('input-id-producto')
const inputNombreProducto = document.getElementById('input-nombre-producto')
const inputPrecioProducto = document.getElementById('input-precio-producto')

const inputDescripcionProducto = document.getElementById('input-descripcion-producto')
const inputStockProducto = document.getElementById('input-stock-producto')
const inputImagenProducto = document.getElementById('input-imagen-producto')
//iteracion de creación de elementos productos en el DOM de merchandise.html

for (const producto of productos) {
  let itemProducto = document.createElement("div");
  itemProducto.innerHTML = `
                                <div class="card h-100">
                                      <img class="card-img-top" src="../imagenes/${producto.imagen}" alt="se esperaba una imagen" />
                                            <div class="card-body p-4">
                                                  <div class="text-center">
                                                      <h5 class="fw-bolder"> ${producto.nombre} (ID:${producto.ID}) </h5>
                                                      <div class="star d-flex justify-content-center small text-warning mb-2">
                                                            <div class="bi-star-fill"></div>
                                                            <div class="bi-star-fill"></div>
                                                            <div class="bi-star-fill"></div>
                                                            <div class="bi-star-fill"></div>
                                                            <div class="bi-star-fill"></div>
                                                      </div>
                                                      $ ${producto.precio}.-
                                                      (Stock disponible ${producto.stock} unidades)
                                                  </div>
                                                  <div>
                                                                <p>${producto.descripcion}</p>
                                                  </div>
                                            </div>
                                            <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                                <div class="text-center"><a class="btn btn-outline-dark mt-auto" href="#">comprar</a></div>
                                            </div>
                                </div>
                            `;
  document.body.appendChild(itemProducto);
}

//metodo para agregar productos a la lista de productos html
/*
for (let producto of productos){

  console.log (producto)
 //crea el elemento li
  let itemProducto = document.createElement('li')
 //le agrega el nombre del producto
  itemProducto.textContent = producto.nombre
  //metodo para agregar hijos
  listaProductos.appendChild(itemProducto)
}
*/

//console.log (listaProductos)

//escuchar el evento submit del form para agregar productos

formProductos.addEventListener( 'submit', (event) =>{
  // event.preventDefault ()
  // console.log (event)
  // console.log ("aca tengo que agregar el producto")
  
  const ID = inputIdProducto.value
  const nombre = inputNombreProducto.value 
  const precio = inputPrecioProducto.value
  

//nueva instancia de la clase producto
  const producto = new Producto (ID, nombre, precio)
  create (producto) 
})



//devuelve los valores por la consola. print. tambien ejecuta el metodo y los trae del storage.

console.log(getAll())

//evento submit
const btn1 = document.getElementById ('btnSubmit')

console.log (btn1)

btn1.addEventListener ('click', ()=> {
  alert('Tu producto se publico correctamente')
})

//metodo para hallar un producto
/*
const findOne = (nombre) => {

  nombre = nombre.toLowerCase()

  const producto = productos.find( producto => producto.nombre === nombre);

  if (!nombre) {

    throw new Error (`no existe ${nombre}`)
  }

  return producto
}
*/
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


