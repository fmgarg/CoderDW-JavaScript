const URL = 'https://fakestoreapi.com/products'

fetch (URL) 

    .then (response => response.json ())

    .then ( data => {

    for (const article of data) {

        $('#lista-productos').prepend(`

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
                            </div>
                            <!--<div>
                                <h6>Descripcion:</h6>
                                <p class="text-justify">${article.description}</p>
                            </div>-->
                    </div>
                    <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
                        <div class="text-center">
                                <a class="btn btn-outline-dark mt-auto" href="#">comprar</a>
                        </div>
                    </div>
                </div>
        `)
    }
    })