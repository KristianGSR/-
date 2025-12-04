const EDAD_FINAL = 22; 

const elementoEdad = document.getElementById('edad');
let edadActual = 1;
let giros = 0;
const velocidadGiro = 40; 

function girarEdad() {
    elementoEdad.textContent = edadActual;
    edadActual++;

    if (giros < 3) {
        if (edadActual > 50) {
            edadActual = 1;
            giros++;
        }
    } else {
        if (edadActual <= EDAD_FINAL) {
            // Sigue contando
        } else {
            elementoEdad.textContent = EDAD_FINAL;
            clearInterval(intervaloGiro);
            
            elementoEdad.style.transform = 'translate(-50%, -50%) scale(1.3)';
            elementoEdad.style.transition = 'transform 0.3s ease';
        }
    }
}

const intervaloGiro = setInterval(girarEdad, velocidadGiro);
