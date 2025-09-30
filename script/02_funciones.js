// Definir las variables y funciones antes de usarlas
function sumar(numero) {
    return numero + numero; // o la operación que necesites
}

let numero = 5; // definir la variable numero
let resultado = sumar(numero);
console.log(`El resultado es: ${resultado}`);

//callbacks
function saludar(param1){
    console.log('Hola ' + param1);
}

let nombre = 'Juan';
saludar(nombre);

function procesarSaludo(param2, callback){
    console.log(`Preparando saludo... recibio como argumento a ${param2} 
        y a la funcion saludar como callback, pues bien, saludemos a ${param2} utilizando el callback`);
    // Llamar al callback
    callback(param2);
}
procesarSaludo(nombre, saludar);

console.log('------------------');

// Ejercicio 2

let numero1 = 2;

function potenciar(num1){
    numero1 = num1 ** 2;
    return numero1;
}

function operar(num2, num3, callback){
    let numero2 = num3 ** 3;

    setTimeout(callback, 3000, numero2);

    console.log(`numero1 vale ${numero1} y numero2 vale ${numero2}, ahora se ejecutara el callback en 3 segundos, el
        resultado de potenciar numero1 es ${numero1 + numero2}`);

    setTimeout(() => {
        console.log(`numero1 vale ${numero1} y numero2 vale ${numero2} y ya se ejecuto el callback, el callback,
            entonces el resultado es ${numero1 + numero2}`);
    },5000);
}

operar(5,3,potenciar)