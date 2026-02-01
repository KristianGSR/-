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
        if (edadActual > EDAD_FINAL) {
            elementoEdad.textContent = EDAD_FINAL;
            clearInterval(intervaloGiro);
            
            // Efectos visuales finales
            elementoEdad.style.color = "#d81b60";
            elementoEdad.style.transform = 'translate(-50%, -50%) scale(1.4)';
            elementoEdad.style.transition = 'all 0.4s ease';
            
            // ¡LANZAR LLUVIA DE CORAZONES!
            lanzarCorazones();
        }
    }
}

function lanzarCorazones() {
    // Creamos 50 corazones
    for (let i = 0; i < 50; i++) {
        const corazon = document.createElement('div');
        corazon.classList.add('corazon-lluvia');
        corazon.textContent = '❤️'; // Puedes usar '💖' o '💗' también
        
        // Posición horizontal aleatoria
        corazon.style.left = Math.random() * 100 + 'vw';
        
        // Tamaño aleatorio
        corazon.style.fontSize = Math.random() * 20 + 15 + 'px';
        
        // Velocidad de caída aleatoria (entre 3 y 5 segundos)
        corazon.style.animationDuration = Math.random() * 2 + 3 + 's';
        
        // Retraso aleatorio para que no caigan todos al mismo tiempo
        corazon.style.animationDelay = Math.random() * 2 + 's';
        
        document.body.appendChild(corazon);
        
        // Borrar el corazón del código después de que termine la animación para no saturar
        setTimeout(() => {
            corazon.remove();
        }, 6000);
    }
}

const intervaloGiro = setInterval(girarEdad, velocidadGiro);
