// AUTOR: PEDRO LUIS GARCIA MARTINEZ

// Script para activar animación al hacer scroll

  document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll('.animate-cascade');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target); // animar solo una vez
        }
      });
    }, {
      threshold: 0.2
    });

    elements.forEach(el => observer.observe(el));
  });

// Script para recargar
  // Ocultar loader después de 3 segundos al cargar la página
  window.addEventListener("load", function () {
    const loader = document.getElementById("loader");
    setTimeout(() => {
      loader.classList.add("hidden");
    }, 3000); // Puedes cambiar a 5000 o lo que desees
  });

  // Función para mostrar el loader manualmente
  function mostrarLoader() {
    const loader = document.getElementById("loader");
    loader.classList.remove("hidden");

    // Ocultar automáticamente después de 1 segundo
    setTimeout(() => {
      loader.classList.add("hidden");
    }, 1000);
  }



//Detectar titulo al paso por la sección
document.addEventListener("DOMContentLoaded", function () {
  const seccion = document.getElementById("info-moto");
  const titulo = document.getElementById("titulo-cascada");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        seccion.classList.add("visible");
        titulo.classList.remove("animate__fadeInDown"); // Reinicia animación
        void titulo.offsetWidth; // Trigger reflow
        titulo.classList.add("animate__fadeInDown");
      }
    });
  }, {
    threshold: 0.5,
  });

  observer.observe(seccion);
});
