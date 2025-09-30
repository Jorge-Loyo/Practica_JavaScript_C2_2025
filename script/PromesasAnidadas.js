function validarStock(producto) {
  console.log(`Validando stock para ${producto}...`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (producto === "dvd") {
        resolve();
      } else {
        reject(`No hay stock disponible para ${producto}`);
      }
    }, 2000);
  });
}
function ejecutarVenta(StockValidado) {
  console.log(`Ejecutando venta para ${StockValidado}...`);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (StockValidado === "dvd") {
        resolve();
      } else {
        reject(`No se pudo vender ${StockValidado}`);
      }
    }, 2000);
  });
}
validarStock("dvd")
  .then((StockValidado) => ejecutarVenta(StockValidado))
  .then(() => console.log("Venta realizada con éxito"))
  .catch((error) => console.error(error))
  .finally(() => console.log("Proceso de venta finalizado"));
// Si se cambia "dvd" por otro producto, se verá el manejo del error
