function saludar() {
    return "Hola, mundo!";
}

saludar();
console.log(saludar());

//funciones
//no recibe - no retorna

function imprimirMensaje() {
    console.log("Este es un mensaje de la función imprimirMensaje.");
}
imprimirMensaje();

// no recibe - retorna
function obtenerNumero() {
    let Numero = 42;
    return Numero;
}

console.log(typeof obtenerNumero, ` ${obtenerNumero()} otras mas ${obtenerNumero()}`);

// recibe - no retorna
function mostrarMensaje(mensaje) {
    console.log(mensaje);
}
mostrarMensaje("Este es un mensaje de la función mostrarMensaje.");
 //  recibe - retorna
function obtenerMensaje() {
    return "Este es un mensaje de la función obtenerMensaje.";
}
