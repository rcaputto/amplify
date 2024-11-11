// Inicializa EmailJS con tu User ID
emailjs.init("DvDpVLY-_ncD7Koz8");

// Captura el envío del formulario y maneja el modal de confirmación
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Previene el envío normal del formulario

    // Manda el formulario usando EmailJS
    emailjs.sendForm('service_an7bvpr', 'template_brjguev', this)
        .then(function(response) {
            console.log('Correo enviado con éxito!', response.status, response.text);

            // Muestra el modal de confirmación
            let modal = document.getElementById("modalConfirmacion");
            modal.style.display = "flex";

            // Limpia los campos del formulario
            document.getElementById("contactForm").reset();

            // Cierra el modal cuando se hace clic en la "X"
            document.querySelector(".close").addEventListener("click", function() {
                modal.style.display = "none";
            });

            // Cierra el modal cuando se hace clic fuera del contenido del modal
            window.addEventListener("click", function(event) {
                if (event.target === modal) {
                    modal.style.display = "none";
                }
            });
        }, function(error) {
            console.error('Ocurrió un error al enviar el correo:', error);
            alert("Ocurrió un error al enviar el mensaje. Por favor, intenta de nuevo.");
        });
});


