//ME FALTA el foreach y el math.random.
const btnJugada = document.querySelectorAll('.btn-jugada');
const opciones = ['piedra', 'papel', 'tijeras'];
let puntosUsuario = ;
let puntosOrdenador = ;
let jugadaUsuario = ;
let jugadaOrdenador = ;
btnJugada.addeventListener('click', function() {
let jugadaOrdenador = opciones[Math.floor(Math.random() * opciones.length)];
if (jugadaUsuario === jugadaOrdenador) {
    console.log('Empate');
    else if (jugadaUsuario === 'piedra' && jugadaOrdenador === 'tijeras' || jugadaUsuario === 'papel' && jugadaOrdenador === 'piedra' || jugadaUsuario === 'tijeras' && jugadaOrdenador === 'papel') {
        console.log('Ganaste');
        puntosUsuario++;
    } else {
        console.log('Perdiste');
        puntosOrdenador++;
    }
}
//const resultado = document.querySelector('.resultado');

/*// Obtener referencias a los elementos del DOM
const piedraBtn = document.getElementById('piedra');
const papelBtn = document.getElementById('papel');
const tijerasBtn = document.getElementById('tijeras');
const resultadoDiv = document.getElementById('resultado');

// Función para generar la jugada de la computadora
function jugadaComputadora() {
    const opciones = ['piedra', 'papel', 'tijeras'];
    const indiceAleatorio = Math.floor(Math.random() * opciones.length);
    return opciones[indiceAleatorio];
}

// Función para determinar el ganador
function determinarGanador(jugadaUsuario, jugadaComputadora) {
    if (jugadaUsuario === jugadaComputadora) {
        return 'Empate';
    } else if (
        (jugadaUsuario === 'piedra' && jugadaComputadora === 'tijeras') ||
        (jugadaUsuario === 'papel' && jugadaComputadora === 'piedra') ||
        (jugadaUsuario === 'tijeras' && jugadaComputadora === 'papel')
    ) {
        return 'Ganaste';
    } else {
        return 'Perdiste';
    }
}

// Función para manejar el evento de clic
function manejarClick(jugadaUsuario) {
    const jugadaComp = jugadaComputadora();
    const resultado = determinarGanador(jugadaUsuario, jugadaComp);
    resultadoDiv.textContent = `Tu jugada: ${jugadaUsuario} - Jugada de la computadora: ${jugadaComp} - Resultado: ${resultado}`;
}

// Agregar eventos de clic a los botones
piedraBtn.addEventListener('click', () => manejarClick('piedra'));
papelBtn.addEventListener('click', () => manejarClick('papel'));
tijerasBtn.addEventListener('click', () => manejarClick('tijeras'));