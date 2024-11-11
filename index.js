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

document.addEventListener("DOMContentLoaded", function () {
  // Selecciona todos los enlaces del menú lateral
  const menuLinks = document.querySelectorAll('#offcanvasMenu .nav-link');

  menuLinks.forEach(link => {
      link.addEventListener("click", function (event) {
          // Previene el comportamiento predeterminado del ancla
          event.preventDefault();
          
          // Obtén la instancia del offcanvas
          const offcanvas = bootstrap.Offcanvas.getInstance(document.getElementById("offcanvasMenu"));
          
          // Cierra el menú
          offcanvas.hide();

          // Espera a que el menú termine de cerrarse para hacer el scroll
          offcanvas._element.addEventListener("hidden.bs.offcanvas", function () {
              // Realiza el scroll hacia la sección deseada
              const targetId = link.getAttribute("href");
              document.querySelector(targetId).scrollIntoView({ behavior: "smooth" });
          }, { once: true }); // Se ejecuta solo una vez para cada clic
      });
  });
});

/*FLECHA DE SCROLL*/
document.addEventListener("DOMContentLoaded", function () {
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");
  let lastScrollTop = 0; // Variable para guardar la posición de desplazamiento anterior

  // Muestra la flecha cuando el usuario hace scroll hacia arriba y la oculta cuando hace scroll hacia abajo
  window.addEventListener("scroll", function () {
      // Verifica si la posición de desplazamiento es hacia arriba
      if (window.scrollY < lastScrollTop && window.scrollY > 200) {
          // Si el desplazamiento es hacia arriba y más de 200px hacia abajo
          scrollToTopBtn.style.display = "block"; // Mostrar la flecha
      } else {
          // Si el desplazamiento es hacia abajo o no ha superado los 200px
          scrollToTopBtn.style.display = "none"; // Ocultar la flecha
      }
      lastScrollTop = window.scrollY <= 0 ? 0 : window.scrollY; // Actualiza la última posición de scroll
  });

  // Agrega un evento de clic a la flecha
  scrollToTopBtn.addEventListener("click", function () {
      window.scrollTo({
          top: 0, // Desplazarse a la parte superior
          behavior: "smooth" // Transición suave
      });
  });
});



