document.addEventListener("DOMContentLoaded", function() {
    class Heladera {
        constructor(nombre, latitud, longitud) {
            this.nombre = nombre;
            this.latitud = latitud;
            this.longitud = longitud;
        }
    }

    const heladeras = [
        new Heladera("Heladera Uno", -34.601, -58.450),
        new Heladera("Heladera Dos", -34.605, -58.455),
        new Heladera("Heladera Tres", -34.610, -58.460),
        new Heladera("Heladera Cuatro", -34.5625444, -58.4486462)
    ];

    let map = L.map('map').setView([-34.6, -58.45], 10);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    heladeras.forEach(heladera => {
        const marker = L.marker([heladera.latitud, heladera.longitud]).addTo(map);
        marker.bindPopup(`<b>${heladera.nombre}</b>`).openPopup();
    });
});
