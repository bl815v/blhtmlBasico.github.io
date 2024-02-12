function guardarDatos(){
    var nombre = document.getElementById("nombre1").value
    localStorage.setItem('nombre', nombre);
    localStorage.setItem('porcentaje', porcentaje);
    window.location.href = 'boton.html';
}

function obtenerDatos(){
    var nombre = localStorage.getItem('nombre');
    var porcentaje = localStorage.getItem('porcentaje');

    document.getElementById('nombreGuardado').textContent = nombre;
    document.getElementById('porcentajeGuardado').textContent = porcentaje;
}