// ---------- CONTADOR ----------
// ---------- CONTADOR ----------
const fechaBoda = new Date("2025-11-23T18:00:00").getTime();

function actualizarContador() {
    const ahora = new Date().getTime();
    const diferencia = fechaBoda - ahora;

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    document.getElementById("dias").innerText = dias.toString().padStart(2, '0');
    document.getElementById("horas").innerText = horas.toString().padStart(2, '0');
    document.getElementById("minutos").innerText = minutos.toString().padStart(2, '0');
    document.getElementById("segundos").innerText = segundos.toString().padStart(2, '0');

    if (diferencia < 0) {
        clearInterval(intervalo);
        document.querySelector(".contador .tiempo").innerHTML = "<p>¡La boda ha comenzado!</p>";
    }
}

const intervalo = setInterval(actualizarContador, 1000);

// ---------- MÚSICA ----------
const audio = new Audio('musica/James Blunt - You re Beautiful (Official Music Video) 4K (256 KBps).mp3'); // reemplaza con tu archivo
audio.loop = true;

const botonMusica = document.createElement('button');
botonMusica.innerHTML = "▶";
botonMusica.style.position = "fixed";
botonMusica.style.bottom = "20px";
botonMusica.style.left = "20px";
botonMusica.style.width = "60px";
botonMusica.style.height = "60px";
botonMusica.style.borderRadius = "50%";
botonMusica.style.border = "2px solid #ffffff";
botonMusica.style.background = "#b19e88"; // dorado suave
botonMusica.style.color = "#ffffff";
botonMusica.style.fontSize = "1.5rem";
botonMusica.style.cursor = "pointer";
botonMusica.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
botonMusica.style.transition = "transform 0.3s, box-shadow 0.3s";
botonMusica.style.zIndex = "1000";
document.body.appendChild(botonMusica);

let reproduciendo = false;

botonMusica.addEventListener('click', () => {
    if (!reproduciendo) {
        audio.play();
        reproduciendo = true;
        botonMusica.innerHTML = "⏸"; // cambia a pausa
    } else {
        audio.pause();
        reproduciendo = false;
        botonMusica.innerHTML = "▶"; // cambia a play
    }
});

// Reproducir música al tocar cualquier parte del body (móviles)
document.body.addEventListener('click', () => {
    if (!reproduciendo) {
        audio.play();
        reproduciendo = true;
        botonMusica.style.transform = "scale(1.1)";
        botonMusica.style.boxShadow = "0 0 20px rgba(177,158,136,0.8)";
    }
}, { once: true });