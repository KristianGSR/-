const EDAD_FINAL = 22; 
const elementoEdad = document.getElementById('edad');

let edadActual = 1;
let giros = 0;
const velocidadGiro = 40; 

// Colores para el confeti (Amarillo, Rosa fuerte, Azul, Verde, Naranja)
const coloresConfeti = ['#ffeb3b', '#d81b60', '#2196f3', '#4caf50', '#ff9800'];

function girarEdad() {
    elementoEdad.textContent = edadActual;
    edadActual++;

    if (giros < 3) {
        if (edadActual > 50) {
            edadActual = 1;
            giros++;
        }
    } else {
        if (edadActual > EDAD_FINAL) {
            elementoEdad.textContent = EDAD_FINAL;
            clearInterval(intervaloGiro);
            
            // Efectos visuales finales en el número
            elementoEdad.style.color = "#d81b60";
            // Un poco más grande el golpe final
            elementoEdad.style.transform = 'translate(-50%, -50%) scale(1.6)'; 
            elementoEdad.style.transition = 'all 0.4s ease';
            
            // ¡LANZAR CONFETI FESTIVO!
            lanzarConfeti();
        }
    }
}

function lanzarConfeti() {
    // Creamos 100 papelitos para que se vea tupido
    for (let i = 0; i < 100; i++) {
        const confeti = document.createElement('div');
        confeti.classList.add('confeti-lluvia');
        
        // Asignar color aleatorio de nuestra lista
        confeti.style.backgroundColor = coloresConfeti[Math.floor(Math.random() * coloresConfeti.length)];
        
        // Posición horizontal aleatoria
        confeti.style.left = Math.random() * 100 + 'vw';
        
        // Tamaños variados (unos más rectangulares que otros)
        confeti.style.width = Math.random() * 12 + 5 + 'px';
        confeti.style.height = Math.random() * 8 + 5 + 'px';
        
        // Velocidad de caída variada (entre 2 y 4 segundos, caen más rápido que los corazones)
        confeti.style.animationDuration = Math.random() * 2 + 2 + 's';
        
        // Retraso aleatorio para que no caigan en bloque
        confeti.style.animationDelay = Math.random() * 1.5 + 's';
        
        document.body.appendChild(confeti);
        
        // Limpiar el código después de que caen
        setTimeout(() => {
            confeti.remove();
        }, 5000);
    }
}

const intervaloGiro = setInterval(girarEdad, velocidadGiro);
