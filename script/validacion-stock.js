// Simulación de base de datos de productos
const productos = {
  'P001': { nombre: 'Laptop', stock: 5 },
  'P002': { nombre: 'Mouse', stock: 0 },
  'P003': { nombre: 'Teclado', stock: 3 }
};

// Función para validar stock usando promesas
function validarStock(productoId, cantidad) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const producto = productos[productoId];
      
      if (!producto) {
        reject(new Error(`Producto ${productoId} no encontrado`));
        return;
      }
      
      if (producto.stock >= cantidad) {
        resolve({
          valido: true,
          producto: producto.nombre,
          stockDisponible: producto.stock
        });
      } else {
        reject(new Error(`Stock insuficiente. Disponible: ${producto.stock}, Solicitado: ${cantidad}`));
      }
    }, 1000);
  });
}

// Función para realizar la venta
function realizarVenta(productoId, cantidad) {
  return validarStock(productoId, cantidad)
    .then(resultado => {
      productos[productoId].stock -= cantidad;
      return {
        mensaje: `Venta realizada: ${cantidad} ${resultado.producto}(s)`,
        stockRestante: productos[productoId].stock
      };
    });
}

// Ejemplo de uso
realizarVenta('P001', 2)
  .then(resultado => console.log('✅', resultado))
  .catch(error => console.log('❌', error.message));

realizarVenta('P002', 1)
  .then(resultado => console.log('✅', resultado))
  .catch(error => console.log('❌', error.message));