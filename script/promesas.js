let hayCrema = false;

const miFuncionExecutor = (resolve, reject) => {
  setTimeout(() => {
    if (hayCrema) {
      resolve(`¡Sí! Compré la crema.`);
    } else {
      reject(`No compré la crema.`);
    }
  }, 5000);
};

const miPromesaComprarCrema = new Promise(miFuncionExecutor);

const manejarPromesaCumplida = (mensajeDeExito) => {
  console.log("Promesa cumplida. " + mensajeDeExito);
};

const manejarPromesaRechazada = (mensajeDeError) => {
  console.log("Promesa rechazada. " + mensajeDeError);
};

console.log(miPromesaComprarCrema);

miPromesaComprarCrema
  .then(manejarPromesaCumplida)
  .catch(manejarPromesaRechazada)
  .finally(() => {
    console.log("Seguir cocinando......");
  });

const intervalID = setInterval(() => {
  console.log("Esperando la crema...");
}, 1000);
