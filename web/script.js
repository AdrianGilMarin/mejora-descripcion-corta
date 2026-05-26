
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