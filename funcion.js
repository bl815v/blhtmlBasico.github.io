function guardarDatos(){
    var nombre = document.getElementById("nombre1").value
    localStorage.setItem('nombre', nombre);
    window.location.href = 'boton.html';
    document.getElementById('nombreGuardado').textContent = nombre;

}

function obtenerDatos(){
    var nombre = localStorage.getItem('nombre');

    document.getElementById('nombreGuardado').textContent = nombre;
}