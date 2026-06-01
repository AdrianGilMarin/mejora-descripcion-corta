
const LATITUD = 37.89155;   
const LONGITUD = -4.77275;  
const NOMBRE_INSTITUTO = "IES Trassierra - Mi Instituto";  

// Inicializar el mapa en el div con id 'mapa'

const map = L.map('mapa').setView([LATITUD, LONGITUD], 15);

// Añadir capa de teselas (tiles) de OpenStreetMap
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    maxZoom: 19
}).addTo(map);

// Añadir marcador (chincheta) en las coordenadas del instituto
L.marker([LATITUD, LONGITUD])
    .addTo(map)
    .bindPopup(` <strong>${NOMBRE_INSTITUTO}</strong><br> Nuestro centro educativo`)
    .openPopup();  // Abre el popup automáticamente al cargar

function actualizarHora() {
     // Crear objeto con la fecha y hora actual
    let ahora = new Date();

     // Obtener día, mes, año
    let dia = ahora.getDate();
    let mes = ahora.getMonth() + 1; 
    let año = ahora.getFullYear();

      // Obtener hora, minuto, segundo
    let horas = ahora.getHours();
    let minutos = ahora.getMinutes();
    let segundos = ahora.getSeconds();

    // Añadir cero si es menor a 10
    if (horas < 10) horas = "0" + horas;
    if (minutos < 10) minutos = "0" + minutos;
    if (segundos < 10) segundos = "0" + segundos;

     // Nombres de los días y meses (para la fecha bonita)
    let dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
    let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    
    let nombreDia = dias[ahora.getDay()];
    let nombreMes = meses[ahora.getMonth()];

     // Formatear la fecha bonita: "Lunes ** de Mayo de 2026"
    let fechaBonita = nombreDia + " " + dia + " de " + nombreMes + " de " + año;
    
    // Formatear la hora: "14:35:22"
    let horaBonita = horas + ":" + minutos + ":" + segundos;
}
    // Página Modo Oscuro
    const boton = document.getElementById("modoOscuro");

    boton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    });
setInterval(actualizarHora, 1000);