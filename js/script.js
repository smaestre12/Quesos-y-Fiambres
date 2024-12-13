document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('contactoForm');

    if (formulario) {
        formulario.addEventListener('submit', function (event) {
            event.preventDefault();

            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const mensaje = document.getElementById('mensaje').value;

            if (!nombre || !email || !mensaje) {
                alert('Por favor, completa todos los campos.');
                return;
            }

            console.log(`Nombre: ${nombre}, Email: ${email}, Mensaje: ${mensaje}`);
            alert('¡Gracias por contactarnos!');
            formulario.reset();
        });
    } else {
        console.error('No se encontró el formulario con id="contactoForm".');
    }
});
