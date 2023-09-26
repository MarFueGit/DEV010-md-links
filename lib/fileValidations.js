const fs = require("fs/promises"); // libreria para manipular archivos en la computadora
const { convertToHtml } = require("./htmlValidations");
const { getHrefLinks } = require("./domValidations");

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
  return true;
};
const readLinksFile = (pathToValidate) =>
  new Promise((resolve, reject) => {
    fs.readFile(pathToValidate, { encoding: "utf8" })
      .then((data) => {
        console.log("Data del archivo: ", data);
        // Convertimos el archivo markdown a HTML
        const html = convertToHtml(data);
        // Creamos un DOM para manipular el HTML que convertimos
        const links = getHrefLinks(html, pathToValidate);
        // resolvemos el array de links
        resolve(links);
      })
      .catch((error) => {
        console.log(error);
        reject(new Error("Hubo un problema al leer el archivo"));
      });
  });

module.exports = {
  validateFileExists,
  readLinksFile,
};
