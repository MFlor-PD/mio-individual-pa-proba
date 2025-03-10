/*
1. En el archivo JavaScript, agrega eventos de clic que permitan al usuario elegir su jugada y comparen el resultado. v
2. Genera una jugada aleatoria para el ordenador. v
3. Compara la elección del usuario con la elección del ordenador y muestra el resultado en el área de resultados. v
4. Actualiza el contador de puntos para el usuario y el ordenador según el resultado. v
5. Muestra el resultado en el HTML utilizando `textContent` o `innerHTML`en el div `resultados` v

## Consejos

1. Revisa que es el dataset para acceder al valor de jugada de cada botón ?
2. Puedes usar un foreach en cada uno de los botónes v
3. Usa Math.ramdom() para generar aleatoriedad v
4. Adapta el HTML y CSS si lo ves necesario v

## La estructura podría ser la siguiente:

- Opciones en un array v
- Variables puntos usuario v
- Variables puntos ordenador v
- Capturar los botones para usarlos (plantea usar un forEach) y hacer evento click v
- Capturar resultados v
- Capturar contador-usuario v
- Capturar contador-ordenador v
- Crear una función obtenerResultado v
- Crear una función mostrarResultado v
- Crear una función actualizarPuntuacion v
*/

//PRESENTAR TODOS LOS ELEMENTOS HTML Y VARIABLES QUE PUEDO LLEGAR A NECESITAR PARA VISUALIZAR LAS FUNCIONES

// 1- TRAERME LOS ELEMENTOS DEL HTML
let contadorUsuario = document.getElementById('contador-usuario');
let contadorOrdenador = document.getElementById('contador-ordenador');
let jugadaUsuario = 0;
let jugadaOrdenador = 0;
const botonesJugada = document.querySelectorAll('.boton-jugada');
let resultados = document.getElementById('resultados');

// 2- ASIGNAR VARIABLES
let puntosUsuario = 0;
let puntosOrdenador = 0;

// 3- ARRAY DE JUGADAS, por las dudas.
const jugadas = ['piedra', 'papel', 'tijera'];

// 4- EVENTO CLICK para empezar a jugar
botonesJugada.forEach(button => {
button.addEventListener('click', function() {
const jugadaUsuario = this.dataset.jugada;
const jugadaOrdenador = jugadas[Math.floor(Math.random() * jugadas.length)];
const resultado = obtenerResultado(jugadaUsuario, jugadaOrdenador);
mostrarResultado(resultado, jugadaUsuario, jugadaOrdenador);
actualizarPuntuacion(resultado);
});

});

// 5- FUNCIONES

function obtenerResultado(jugadaUsuario, jugadaOrdenador) {
if (jugadaUsuario === jugadaOrdenador) { return 'Empate'; 
} else if (
(jugadaUsuario === 'piedra' && jugadaOrdenador === 'tijera') ||
(jugadaUsuario === 'papel' && jugadaOrdenador === 'piedra') ||
(jugadaUsuario === 'tijera' && jugadaOrdenador === 'papel')
) {
return 'Ganaste';
} else {
return 'Perdiste';
}      
}
function mostrarResultado(resultado, jugadaUsuario, jugadaOrdenador) {
resultados.innerHTML = `
Tu jugada: ${jugadaUsuario}.<br>        
Ordenador jugó: ${jugadaOrdenador}.<br>
Resultado: ${resultado}.`;
}

function actualizarPuntuacion(resultado) {
if (resultado === 'Ganaste') {
puntosUsuario++;
contadorUsuario.textContent = `Tus puntos: ${puntosUsuario}`;
}
if (resultado === 'Perdiste') {
puntosOrdenador++;
contadorOrdenador.textContent = `Ordenador puntos: ${puntosOrdenador}`;
}
}
