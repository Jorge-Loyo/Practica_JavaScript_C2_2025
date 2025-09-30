const frutas = ["manzana", "banana", "naranja"];

frutas.push("uva");

console.log(`El largo de la lista de frutas es: ${frutas.length}`);

frutas.forEach((fruta, indice) => {
  console.log(`Índice: ${indice}, Fruta: ${fruta}`);
  if (fruta === "uva") {
    frutas[indice] = 1;
    console.log(`La fruta en el índice ${indice} ha sido cambiada a 1.`);
  }
});
console.log(`El largo de la lista de frutas es: ${frutas.length}`);
frutas.forEach((fruta, indice) => {
  console.log(`Índice: ${indice}, Fruta: ${fruta}`);
});

let arrayVacio = [];

let arrayNumeros = new Array(5,3,1,2,4,6,7);
console.log("--------------------------------------------------");
console.log("Map");
console.log("--------------------------------------------------");
console.log("numeros: " + arrayNumeros);
let arrayNumerosMap10 = arrayNumeros.map(element => element + 10);
console.log("arrayNumerosMap10: " + arrayNumerosMap10);
arrayNumeros = arrayNumeros.map(element => element.toString());
console.log(typeof arrayNumeros[1]);
console.log(typeof arrayNumerosMap10[1]);

console.log("--------------------------------------------------");
console.log("Filter");
console.log("--------------------------------------------------");
console.log("numeros: " + arrayNumeros);
let arrayNumerosFilter = arrayNumeros.filter(element => element > 4 && element < 7);
console.log("arrayNumerosFilter: " + arrayNumerosFilter);
//elemento ternario
let posicion = arrayNumerosFilter.indexOf("9");
console.log(posicion != -1 ? `El elemento 9 se encuentra en la posición ${posicion}` : "El elemento 9 no se encuentra en el array");
