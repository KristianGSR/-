const EDAD_FINAL = 22; 
const elementoEdad = document.getElementById('edad');

let edadActual = 1;
let giros = 0;
const velocidadGiro = 40; 

const coloresConfeti = ['#ffeb3b', '#d81b60', '#2196f3', '#4caf50', '#ff9800', '#e91e63'];

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
            
            elementoEdad.style.color = "#d81b60";
            elementoEdad.style.transform = 'translate(-50%, -50%) scale(1.6)'; 
            elementoEdad.style.transition = 'all 0.4s ease';
            
            lanzarConfeti();
        }
    }
}

function lanzarConfeti() {
    // AHORA LANZAMOS 300 PAPELITOS
    for (let i = 0; i < 300; i++) {
        const confeti = document.createElement('div');
        confeti.classList.add('confeti-lluvia');
        
        confeti.style.backgroundColor = coloresConfeti[Math.floor(Math.random() * coloresConfeti.length)];
        confeti.style.left = Math.random() * 100 + 'vw';
        
        // Tamaños más variados para que unos parezcan más lejos que otros
        const tamaño = Math.random() * 10 + 5;
        confeti.style.width = tamaño + 'px';
        confeti.style.height = (tamaño * 0.6) + 'px';
        
        // DURACIÓN MÁS LARGA: Entre 4 y 7 segundos para que caigan lento
        confeti.style.animationDuration = Math.random() * 3 + 4 + 's';
        
        // RETRASO MÁS LARGO: Para que la lluvia dure más tiempo cayendo (hasta 3 segundos de retraso)
        confeti.style.animationDelay = Math.random() * 3 + 's';
        
        document.body.appendChild(confeti);
        
        // Los borramos después de 10 segundos para dar tiempo a que todos terminen
        setTimeout(() => {
            confeti.remove();
        }, 10000);
    }
}

const intervaloGiro = setInterval(girarEdad, velocidadGiro);
