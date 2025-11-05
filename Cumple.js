// 5. ¡IMPORTANTE! PON LA EDAD QUE CUMPLE TU AMIGA AQUÍ
const EDAD_FINAL = 22; 

// -----------------------------------------------
// No necesitas editar nada debajo de esta línea
// -----------------------------------------------

const elementoEdad = document.getElementById('edad');
let edadActual = 1;
let giros = 0;
const velocidadGiro = 40; // En milisegundos (más bajo = más rápido)

function girarEdad() {
    elementoEdad.textContent = edadActual;
    edadActual++;

    if (giros < 3) {
        // Simula 3 giros rápidos hasta 50
        if (edadActual > 50) {
            edadActual = 1;
            giros++;
        }
    } else {
        // En la última vuelta, va hacia la edad final
        if (edadActual <= EDAD_FINAL) {
            // Sigue contando...
        } else {
            // ¡Se detiene!
            elementoEdad.textContent = EDAD_FINAL;
            clearInterval(intervaloGiro); // Detiene la función
            
            // Hace que el número final resalte
            elementoEdad.style.transform = 'translate(-50%, -50%) scale(1.3)';
            elementoEdad.style.transition = 'transform 0.3s ease';
        }
    }
}

// Inicia el giro cuando la página se carga
const intervaloGiro = setInterval(girarEdad, velocidadGiro);