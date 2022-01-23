const formulario = document.querySelector('#enviar-datos');
// const btnMensaje = document.querySelector('#enviar');
const anchor = document.querySelectorAll("a");

// llamada a la función
addEventListener();

// funciones
function addEventListener() {

    formulario.addEventListener('submit', enviarDatos);
}

function enviarDatos(e) {
    e.preventDefault();

    animacionDatosEnviados();
}

function animacionDatosEnviados() {
    Swal.fire({
        title: '¡Muchas Gracias!',
        text: '¡Su mensaje ha sido enviado, a la brevedad uno de nuestros asesores entrará en contacto con usted!',
        icon: 'success',
        backdrop: true,
        confirmButtonText: 'Aceptar',
        confirmButtonColor: '#EF8094'
        // timer: 5000,
        // timerProgressBar: true
    });
}