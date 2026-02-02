const EDAD_FINAL = 22; 
const elementoEdad = document.getElementById('edad');
let edadActual = 1;
let giros = 0;
const velocidadGiro = 40; 
const colores = ['#ffeb3b', '#d81b60', '#2196f3', '#4caf50', '#ff9800'];

// --- SEGURO ANTI-CACHÉ: Inyectamos el estilo directamente ---
const estiloConfeti = document.createElement('style');
estiloConfeti.innerHTML = `
    .confeti-seguro {
        position: fixed !important; 
        top: -20px;
        z-index: 9999;
        pointer-events: none;
        will-change: transform;
        animation: caerConfetiSeguro linear forwards;
    }
    @keyframes caerConfetiSeguro {
        0% { transform: translateY(0) rotate(0deg); opacity: 1; }
        100% { transform: translateY(110vh) rotate(720deg); opacity: 0; }
    }
`;
document.head.appendChild(estiloConfeti);

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
            
            // Efecto final en el número
            elementoEdad.style.transform = 'translate(-50%, -50%) scale(1.6)'; 
            elementoEdad.style.transition = 'all 0.4s ease';
            elementoEdad.style.color = "#d81b60";

            lanzarConfeti();
        }
    }
}

function lanzarConfeti() {
    // Bajamos a 100 para que el celular no cree esa "línea de error"
    for (let i = 0; i < 100; i++) {
        const confeti = document.createElement('div');
        confeti.classList.add('confeti-seguro');
        
        confeti.style.backgroundColor = colores[Math.floor(Math.random() * colores.length)];
        confeti.style.width = (Math.random() * 10 + 5) + 'px';
        confeti.style.height = (Math.random() * 8 + 5) + 'px';
        
        // Posición horizontal aleatoria
        confeti.style.left = Math.random() * 100 + 'vw';
        
        // Velocidad variada para que se vea natural
        confeti.style.animationDuration = (Math.random() * 3 + 3) + 's'; 
        confeti.style.animationDelay = (Math.random() * 2) + 's';

        document.body.appendChild(confeti);
        
        setTimeout(() => confeti.remove(), 8000);
    }
}

const intervaloGiro = setInterval(girarEdad, velocidadGiro);
