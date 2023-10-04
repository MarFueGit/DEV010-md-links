const { readdirSync, stat, sta } = require("fs");

const readDirectory = (pathToValidate) => {
  try {
    let files = readdirSync(pathToValidate);
    console.log("Archivos en el directorio:", files);
  } catch (error) {
    console.error("Error al leer el directorio:", error);
  }
};

const isDirectory = (pathToValidate) => {
  stat(pathToValidate, (err, stats) => {
    if (err) {
      console.error("Error al obtener informacionde filesDirectory:", err);
      return new Error("Error al obtener informacionde filesDirectory:", err);
    }
    if (stats.isFile()) {
      console.log("Es un archivo.");
      return false;
    } else if (stats.isDirectory()) {
      console.log("Es una carpeta.");
      return true;
    } else {
      console.log("Es otro tipo de filesDirectory.");
      return false;
    }
  });
};

module.exports = {
  readDirectory,
  isDirectory,
};
