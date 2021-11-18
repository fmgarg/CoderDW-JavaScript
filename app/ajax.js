
const URLGET   = "https://jsonplaceholder.typicode.com/posts"

const formulario = {email: "fmgarg@gmail.com"};

$("#enviar").prepend('<button id="btn1" class="btn btn-block btn-black rm-border">Enviar</button>');

$("#btn1").click((e) => {
    e.preventDefault(); 
    $.post(URLGET, formulario ,(respuesta, estado) => {
        if(estado === "success"){
            alert('Te suscribiste correctamente');
        } else{
            alert('error')
        }  
    });
})

