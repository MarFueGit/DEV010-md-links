const fs = require("fs/promises"); // libreria para manipular archivos en la computadora

const validateFileExists = (pathToValidate) => {
  // Verificamos si el archivo de la ruta existe en la computadora
  /*
    se utiliza para verificar si existe un archivo o directorio en la ubicación especificada por pathToValidate.
    */
  fs.access(pathToValidate, fs.constants.F_OK, (error) => {
    if (error) {
      // Si devuelve error no existe
      throw new Error("El archivo no existe");
    }
  });
  return true
};

module.exports = {
  validateFileExists,
};
