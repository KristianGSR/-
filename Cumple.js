const EDAD_FINAL = 22; 
const elementoEdad = document.getElementById('edad');

let edadActual = 1;
let giros = 0;
const velocidadGiro = 40; 

function girarEdad() {
    elementoEdad.textContent = edadActual;
    edadActual++;

    // Da 3 vueltas rápidas hasta el 50 antes de frenar en la edad real
    if (giros < 3) {
        if (edadActual > 50) {
            edadActual = 1;
            giros++;
        }
    } else {
        if (edadActual > EDAD_FINAL) {
            elementoEdad.textContent = EDAD_FINAL;
            clearInterval(intervaloGiro);
            
            // Efecto final de resaltado
            elementoEdad.style.color = "#d32f2f";
            elementoEdad.style.transform = 'translate(-50%, -50%) scale(1.4)';
            elementoEdad.style.transition = 'all 0.4s ease';
            
            console.log("¡Feliz Cumpleaños Angy!");
        }
    }
}

const intervaloGiro = setInterval(girarEdad, velocidadGiro);
