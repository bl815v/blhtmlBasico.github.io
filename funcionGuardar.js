function guardarDatos() {
    var datos = [];
    for (var i = 1; i <= 5; i++) {
        var nombre = document.getElementById("nombre" + i).value;
        var porcentaje = document.getElementById("Porcentaje" + i).value;
        datos.push({ nombre: nombre, porcentaje: porcentaje });
    }

    var parametrosUrl = '';
    for (var j = 0; j < datos.length; j++) {
        if (datos[j].nombre && datos[j].porcentaje) {
            parametrosUrl += '&nomb' + (j + 1) + '=' + encodeURIComponent(datos[j].nombre);
            parametrosUrl += '&porc' + (j + 1) + '=' + encodeURIComponent(datos[j].porcentaje);
        }
    }

    window.location.href = 'boton.html?' + parametrosUrl.slice(1);

}

document.addEventListener("DOMContentLoaded", function() {
    const boton1 = document.getElementById("guardar");
    boton1.addEventListener("click", guardarDatos);
});