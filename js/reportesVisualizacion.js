//ejemplo para que muestre como se veria
const viandasPorColaborador = [
    { nombre: 'Heladera Medrano', cantidadViandas :'5',fecha: '2024-08-12', hora: '15:54' },
    { nombre: 'Heladera de las Girls', cantidadViandas :'5', fecha: '2024-08-12', hora: '14:41' },
    { nombre: 'Heladera Nati', cantidadViadas :'5', fecha: '2024-08-12', hora: '00:00' }
];
const fallasPorHeladera = [
    { nombre: 'Heladera Medrano',CantidadFallas:'5' ,   fecha: '2024-08-12', hora: '15:54' },
    { nombre: 'Heladera de las Girls',CantidadFallas:'6' , fecha: '2024-08-12', hora: '14:41' },
    { nombre: 'Heladera Nati',CantidadFallas:'10', fecha: '2024-08-12', hora: '00:00' }
];

function agregarViandasPorColaborador() {
    const tbody = document.querySelector("#alertaTable tbody");
    tbody.innerHTML = ''; 

    alertas.forEach(alerta => {
        const row = document.createElement('tr');

        Object.values(alerta).forEach(value => {
            const cell = document.createElement('td');
            cell.textContent = value;
            row.appendChild(cell);
        });

        tbody.appendChild(row);
    });
}
function agregarFallasPorHeladera() {
    const tbody = document.querySelector("#alertaTable tbody");
    tbody.innerHTML = ''; 

    alertas.forEach(alerta => {
        const row = document.createElement('tr');

        Object.values(alerta).forEach(value => {
            const cell = document.createElement('td');
            cell.textContent = value;
            row.appendChild(cell);
        });

        tbody.appendChild(row);
    });
}


// Renderizar listado al cargar la página
document.addEventListener('DOMContentLoaded', agregarAlertas);