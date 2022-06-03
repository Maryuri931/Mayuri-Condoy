

function comprobar() {
    let usuario = document.getElementById('usuario').value;
    let contraseña = document.getElementById('contraseña').value;
    if (usuario == 'Mayuri' && contraseña == '12345') {
        window.location.replace("mar.html");
    } else if (usuario == 'Mayuri') {
        alert('Contraseña Incorrecta');
    } else if (contraseña == '12345') {
        alert('Usuario Incorrecto');
    } else {
        alert('Datos Incorrecto');
    }
}