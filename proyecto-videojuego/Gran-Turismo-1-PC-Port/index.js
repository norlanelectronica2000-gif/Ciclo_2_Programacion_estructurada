const menuPrincipal = document.getElementById('menu-principal');
const menuConfiguracion = document.getElementById('menu-configuracion');
const pantallaJuego = document.getElementById('pantalla-juego');

const btnIniciar = document.getElementById('btn-iniciar');
const btnConfig = document.getElementById('btn-config');
const btnVolver = document.getElementById('btn-volver');
const btnSalirJuego = document.getElementById('btn-salir-juego');

const musica = document.getElementById('musicaFondo');

function iniciarMusica() {
    if (musica && musica.paused) {
        musica.volume = 0.4; 
        musica.play().then(() => {
            console.log("Música reproduciéndose correctamente");
        }).catch(error => {
            console.log("Esperando interacción del usuario para reproducir audio...");
        });
    }
}

window.addEventListener('load', () => {
    iniciarMusica();
});

document.addEventListener('click', () => {
    iniciarMusica();
}, { once: true });

btnIniciar.addEventListener('click', () => {
    menuPrincipal.classList.remove('activa');
    pantallaJuego.classList.add('activa');
});

btnConfig.addEventListener('click', () => {
    menuPrincipal.classList.remove('activa');
    menuConfiguracion.classList.add('activa');
});

btnVolver.addEventListener('click', () => {
    menuConfiguracion.classList.remove('activa');
    menuPrincipal.classList.add('activa');
});

btnSalirJuego.addEventListener('click', () => {
    pantallaJuego.classList.remove('activa');
    menuPrincipal.classList.add('activa');
});

function cambiarPestana(seccion, evento) {
    const secVideo = document.getElementById('seccion-video');
    const secControles = document.getElementById('seccion-controles');
    const botonesPestana = document.querySelectorAll('.btn-pestana');

    botonesPestana.forEach(btn => btn.classList.remove('activa'));

    if (seccion === 'video') {
        secVideo.classList.add('activa');
        secVideo.classList.remove('oculta');
        secControles.classList.remove('activa');
        secControles.classList.add('oculta');
        evento.target.classList.add('activa');
    } else {
        secControles.classList.add('activa');
        secControles.classList.remove('oculta');
        secVideo.classList.remove('activa');
        secVideo.classList.add('oculta');
        evento.target.classList.add('activa');
    }
}

function reasignarTecla(elementoBtn) {
    elementoBtn.textContent = "...";
    
    const capturarTecla = (e) => {
        e.preventDefault();
        elementoBtn.textContent = e.key === " " ? "Espacio" : e.key.toUpperCase();
        window.removeEventListener('keydown', capturarTecla);
    };

    window.addEventListener('keydown', capturarTecla);
}