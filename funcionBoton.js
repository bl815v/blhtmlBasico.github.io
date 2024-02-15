function obtenerDatos() {
    var parametrosUrl = new URLSearchParams(window.location.search);
    for (var i = 1; i <= 5; i++) {
        var nombre = parametrosUrl.get('nomb' + i);
        var porcentaje = parametrosUrl.get('Porc' + i);
        document.getElementById('nombre' + i).textContent = nombre || '';
        document.getElementById('Porcentaje' + i).textContent = (porcentaje || '') + '%';
    }
}

document.addEventListener('DOMContentLoaded', obtenerDatos);