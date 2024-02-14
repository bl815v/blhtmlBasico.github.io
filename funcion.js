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
            parametrosUrl += '&nombre' + (j + 1) + '=' + encodeURIComponent(datos[j].nombre);
            parametrosUrl += '&Porcentaje' + (j + 1) + '=' + encodeURIComponent(datos[j].porcentaje);
        }
    }

    window.location.href = 'boton.html?' + parametrosUrl.slice(1);

}


document.addEventListener('DOMContentLoaded', obtenerDatos);


function obtenerDatos() {
    var parametrosUrl = new URLSearchParams(window.location.search);
    for (var i = 1; i <= 5; i++) {
        var nombre = parametrosUrl.get('nombre' + i);
        var porcentaje = parametrosUrl.get('Porcentaje' + i);
        document.getElementById('nombre' + i).textContent = nombre || '';
        document.getElementById('Porcentaje' + i).textContent = (porcentaje || '') + '%';
    }
}