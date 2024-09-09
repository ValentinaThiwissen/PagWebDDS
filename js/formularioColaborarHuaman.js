document.addEventListener('DOMContentLoaded', function () {
    const container = document.getElementById('dynamicFormContainer');

    // Obtener todas las imágenes en el grid
    const colaboraciones = document.querySelectorAll('.colaboracion');

    colaboraciones.forEach(function (colaboracion) {
        colaboracion.addEventListener('click', function () {
            const selectedValue = this.getAttribute('data-form');
            container.innerHTML = '';

            let newForm = '';
            if (selectedValue === 'donacionMonetaria') {
                newForm = `
                    <div class="nueva-colaboracion">
                        <h2>Donación Monetaria</h2>
                        <p>Elige el monto que quieras donar:</p>
                        <select id="montoDonacion" required>
                            <option value="1000000">1.000.000</option>
                            <option value="2000000">2.000.000</option>
                            <option value="5000000">5.000.000</option>
                            <option value="10000000">10.000.000</option>
                            <option value="20000000">20.000.000</option>
                            <option value="30000000">30.000.000</option>
                        </select>
                        <div class="imagen-tarjeta">
                            <img src="../assets/img/tarjeta.jpg" alt="Tarjeta" class="imagen-tarjeta">
                        </div>
                        <p>Elige el medio de pago:</p>
                        <select id="medioPago" required>
                            <option value="credito">Crédito</option>
                            <option value="debito">Débito</option>
                            <option value="mercadoPago">Mercado Pago</option>
                        </select>
                        <textarea id="numeroTarjeta" placeholder="Número de tarjeta" required></textarea>
                        <textarea id="dni" placeholder="DNI" required></textarea>
                        <button type="submit">DONAR</button>
                    </div>
                `;
            } else if (selectedValue === 'donacionVianda') {
                newForm = `
                    <div class="nueva-colaboracion">
                        <h2>Donación de Viandas</h2>
                        <p>Elige la cantidad de viandas a donar:</p>
                        <select id="cantDonacion" required>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="20">20</option>
                        </select>
                        <textarea id="comida" placeholder="Comida" required></textarea>
                        <p>Ingresa la fecha de caducidad:</p>
                        <input type="date" id="fechaCaducidad" required>
                        <p>Ingrese la fecha de donación (hoy):</p>
                        <input type="date" id="fechaDonacion" required>
                        <textarea id="calorias" placeholder="Calorías" required></textarea>
                        <textarea id="pesoViandas" placeholder="Peso de la vianda" required></textarea>
                        <textarea id="colaborador" placeholder="Nombre y apellido del colaborador" required></textarea>
                        <button type="submit">DONAR</button>
                    </div>
                `;
            } else if (selectedValue === 'registroPersonaVulnerable') {
                newForm = `
                    <div class="nueva-colaboracion">
                        <h2>Registro de Personas en Situación de Vulnerabilidad</h2>
                        <p>Ingrese los datos de la persona a registrar:</p>
                        <form action="" method="get" id="form-registro" class="formulario">
                            <textarea id="nombre" placeholder="Nombre" required></textarea>
                            <textarea id="direccion" placeholder="Dirección" required></textarea>
                             <p>Fecha de nacimiento</p>
                                   <div>
                                 <input type="date" name="nacimiento" id="nacimiento">
                                </div>
                     <p>Documento</p>
                                 <select name="tipoDocumento" id="tipoDocumento" required>
                                <option value="dni">DNI</option>
                                <option value="pasaporte">Pasaporte</option>
                                 <option value="cedula">Cedule</option>
                            </select>
                                <textarea id="nroDocumento" placeholder="Numero de documento"></textarea>
                             <p>¿Tiene menores a cargo?</p>
                            <select name="menoresACargo" id="menoresACargo" required>
                                <option value="si">Sí</option>
                                <option value="no">No</option>
                            </select>
                            
                                <textarea id="cantmenores" placeholder="Cantidad de menores"></textarea>
                            
                            <button type="submit">Registrarse</button>
                        </form>
                    </div>
                `;
            } else if (selectedValue === 'distribucionVianda') {
                newForm = `
                    <div class="nueva-colaboracion">
                        <h2>Distribución de Viandas</h2>
                        <p>Elige la cantidad de viandas a distribuir:</p>
                        <select id="cantDistribucion" required>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="5">5</option>
                            <option value="10">10</option>
                            <option value="20">20</option>
                        </select>
                        <textarea id="heladeraOrigen" placeholder="Heladera Origen" required></textarea>
                        <textarea id="heladeraDestino" placeholder="Heladera Destino" required></textarea>
                        <button type="submit">Distribuir</button>
                    </div>
                `;
            }

            container.innerHTML = newForm;
        });
    });
});
