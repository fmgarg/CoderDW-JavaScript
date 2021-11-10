const URL = 'https://fakestoreapi.com/products'

fetch (URL) 

    .then (response => response.json ())

    .then ( data => {

    for (const article of data) {

        let count = 1

        $('#contenedor-lista-productos').append(
            `
                <div class="card">
                    <img class="card-img-top" src="${article.image}" alt="se esperaba una imagen" />
                    <div class="card-body p-4">
                            <div class="text-center">
                                <h3 class="fw-bolder"> ${article.title}</h3>
                                <div class="star d-flex justify-content-center small text-warning mb-2">
                                    <div class="bi-star-fill"></div>
                                    <div class="text-center"> <h5> Valoracion ${article.rating.rate} </h5></div>
                                    <div class="bi-star-fill"></div>
                                </div>
                                    <h4>PRECIO: $ ${article.price}.-</h4>
                                    <h5>(Stock disponible ${article.rating.count} unidades)</h5>
                                    <h6>Elija la cantidad que desea adquirir:</h6>
                                    <select id="select-count-${article.id}">
                                            <option value = "1">1</option>
                                            <option value = "2">2</option>
                                            <option value = "3">3</option>
                                    </select>
                            </div>
                            <!--<div>
                                <h6>Descripcion:</h6>
                                <p class="text-justify">${article.description}</p>
                            </div>--> 
                    </div>
                    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div class="text-center">
                                <button id="btn-add-${article.id}" class="btn btn-outline-dark mt-auto">agregar</button>
                        </div>
                    </div>
                </div>
            `
            )

            $(`#select-count-${article.id}`).change(( event ) => {

                count = +event.target.value
            })


            $(`#btn-add-${article.id}`).on('click', () => {

                //console.log (`Agregar ${count} de ${JSON.stringify(article)}`)

               const itemCarrito = new ItemCarrito(count, article)

               // console.log( itemCarrito )

                addItemCarrito( itemCarrito )
            })
      
        }

        const carrito = JSON.parse(localStorage.getItem('carrito')) || []

        class ItemCarrito {

            constructor (cantidad, item) {
                
                this.cantidad = cantidad
                
                this.item = item

            }
        }
    
        const addItemCarrito = (item) => {

            const itemCarrito = carrito.find( el => el.item === item['item'])
            
            if (!itemCarrito) {
                
                carrito.push (item)

                console.log( carrito)

            } else {
            
            itemCarrito ['cantidad'] = itemCarrito

            console.log (itemCarrito)

            }
            
            localStorage.setItem('carrito', JSON.stringify(carrito))

            
        }

        const renderCarrito = () => {

            for (let el of carrito) {

                $('#contenedor-carrito').append (
                `
                
                <div> $(el.item.nombre) - Cantidad: $(el.item.cantidad)</div>

                `
                )
            }
        }
        
        renderCarrito ()
    
    })

    
