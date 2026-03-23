// Función principal para obtener y mostrar la hora del sistema
function actualizarHoraSistema() {
    const elementoReloj = document.getElementById('reloj');
    const ahora = new Date();
    
    // Convertimos la hora a un formato legible (HH:MM:SS)
    const horaFormateada = ahora.toLocaleTimeString();
    
    // Insertamos la hora en el HTML
    elementoReloj.textContent = horaFormateada;
}

// Configuramos el temporizador para que ejecute la función cada 1000 milisegundos (1 segundo)
setInterval(actualizarHoraSistema, 1000);

// Llamamos a la función una vez al inicio para que no aparezca en 00:00:00 el primer segundo
actualizarHoraSistema();

// REGISTRO DEL SERVICE WORKER
// Verificamos si el navegador es compatible con Service Workers
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then(registro => {
                console.log('Service Worker registrado con éxito en:', registro.scope);
            })
            .catch(error => {
                console.error('Fallo al registrar el Service Worker:', error);
            });
    });
}
