document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Previene el envío normal del formulario

  // Muestra el modal de confirmación
  let modal = document.getElementById("modalConfirmacion");
  modal.style.display = "flex";

  // Limpia los campos del formulario
  document.getElementById("contactForm").reset();
});

// Cierra el modal cuando se hace clic en la "X"
document.querySelector(".close").addEventListener("click", function() {
  let modal = document.getElementById("modalConfirmacion");
  modal.style.display = "none";
});

// Cierra el modal cuando se hace clic fuera del contenido del modal
window.addEventListener("click", function(event) {
  let modal = document.getElementById("modalConfirmacion");
  if (event.target === modal) {
      modal.style.display = "none";
  }
});

