// main.js - Lógica del Visor de Imágenes

// Variables globales
let imagenes = [];
let indiceActual = 0;
const visor = document.getElementById('visorImagen');
const imgGrande = document.getElementById('imgGrande');

document.addEventListener("DOMContentLoaded", () => {
    // 1. Detectamos TODAS las imágenes de los carruseles
    const todasLasImagenes = document.querySelectorAll('.carousel-item img');

    todasLasImagenes.forEach((img) => {
        img.addEventListener('click', function() {
            
            // 2. Buscamos al "padre" (el carrusel específico)
            const contenedorPadre = this.closest('.carousel-inner');
            
            // 3. Cargamos SOLO las imágenes de ese carrusel
            const nodosDelProducto = contenedorPadre.querySelectorAll('img');
            imagenes = Array.from(nodosDelProducto);

            // 4. Calculamos el índice
            indiceActual = imagenes.indexOf(this);

            mostrarImagen();
            visor.style.display = "flex";
        });
    });
});

function mostrarImagen() {
    imgGrande.src = imagenes[indiceActual].src;
}

function cambiarImagen(direccion, event) {
    if(event) event.stopPropagation();
    
    indiceActual += direccion;

    if (indiceActual >= imagenes.length) {
        indiceActual = 0;
    }
    if (indiceActual < 0) {
        indiceActual = imagenes.length - 1;
    }

    mostrarImagen();
}

function cerrarVisor(event) {
    if (!event || event.target === visor || event.target.classList.contains('cerrar-visor')) {
        visor.style.display = "none";
    }
}