//array de productos

class Producto {

  constructor (ID, nombre, precio) {
    this.ID = ID
    this.nombre = nombre.toLowerCase ()
    this.precio = precio

  }
}
// lista de productos

const productos =[];

//metodo que retorna la lista de productos

const getAll = () =>{

  return productos;
};

//metodo para agregar un producto a la lista

const create = (producto) => {

  productos.push (producto)
}

//creando productos

const producto1 = new Producto ('1','MytvStick','80');

const producto2 = new Producto ('2','pendrive','20');

const producto3 = new Producto ('3','notebook','1000');

//agregando productos a la lista

create(producto1);
create(producto2);
create(producto3);

//creación de elementos productos en el DOM de merchandise.html

for (const producto of productos) {
  let contenedor = document.createElement("div");
  contenedor.innerHTML = `<h3> ID: ${producto.ID}</h3>
                          <p>  Producto: ${producto.nombre}</p>
                          <b> $ ${producto.precio}</b>`;
  document.body.appendChild(contenedor);
}



//metodo para allar un producto

const findOne = (nombre) => {

  nombre = nombre.toLowerCase()

  const producto = productos.find( producto => producto.nombre === nombre);

  if (!nombre) {

    throw new Error (`no existe ${nombre}`)
  }

  return producto
}

//buscar un producto

//console.log (findOne ('pendrive'));


//alert ("estos son los productos seleccionados: "+"pendrive"+", "+"notebook"+", "+"MytvStick"+" por un valor de usd1100");

//for (let index = 0; index < Producto.length; index++){

//alert ("estos son los productos seleccionados"+": "+Producto.toString());

//};





//print

//console.log(getAll())

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

