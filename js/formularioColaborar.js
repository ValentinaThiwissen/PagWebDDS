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
            <div class = "nueva-colaboracion">
            <h2>Donacion monetaria</h2>
            <p>Elegi el monto que quieras donar</p>
            <select id="montoDonacion" required>
                <option value="1">1.000.000</option>
                <option value="2">2.000.000</option>
                <option value="3">5.000.000</option>
                <option value="4">10.000.000.000</option>
                <option value="5">20.000.000.000</option>
                <option value="6">30.000.000.000</option>
            </select>
             <div class="imagen-tarjeta">
             <img src="../assets/img/tarjeta.jpg" alt="Tarjeta" class="imagen-tarjeta">
           </div>
            <p>Elegi el medio de pago</p>
            <select id="montoDonacion" required>
                <option value="1">Credito</option>
                <option value="2">Debito</option>
                <option value="3">Mercado Pago</option>
            </select>
            <textarea id="numeroTarjeta" placeholder="Numero de tarjeta "></textarea>
            <textarea id="numeroTarjeta" placeholder="DNI "></textarea>

               <button type="submit">DONAR</button>
        </div>

        `;
            } else if (selectedValue === 'ofrecerProductos') {
                newForm = `
               <div class="nueva-colaboracion">
             <h2>Ofrecer productos y/o servicios</h2>
            <p>Ingrese el rubro en el que desea publicar productos:</p>
            <div>
                <select id="rubroSelect">
                    <option value="Tecnologia">Tecnología</option>
                    <option value="alimentacion">Alimentación</option>
                    <option value="ropa">Ropa</option>
                    <option value="librerias">Librería</option>
                    <option value="otros">Otros</option>
                </select>
            </div>
           
            <textarea id="marca" placeholder="Marca "></textarea>
           
            <textarea id="heladera" placeholder="Modelo (si tiene) "></textarea>
            <div>
                <input type="file" name="fotoProducto" id="fotoProducto">
            </div>
            <button class="boton" onclick="publicarProducto()">Publicar</button>
        </div>
        
            `;

            } else if (selectedValue === 'encargoHeladera') {
                newForm = `
            <div class="nueva-colaboracion">
          <h2>Encargo de heladera</h2>
           <p>¿Desea que el sistema le recomienda puntos donde colocar la heladera? </p>
         <select id="montoDonacion" required>
                <option value="0">SI</option>
                <option value="1">NO</option>
         </select>

         <textarea id="nombreHeladera" placeholder="Ingrese el nombre de la heladera que quiere encargarse "></textarea>
         <textarea id="direccionheladera" placeholder="Direccion"></textarea>
         </div>
     
         `;
            }
            container.innerHTML = newForm;

        });

    });
});
