const fs = require("fs/promises"); // libreria para manipular archivos en la computadora
const { convertToHtml } = require("./htmlValidations");
const { getHrefLinks } = require("./domValidations");
const { validateLinks } = require("./linksValidations");

const validateFileExists = (pathToValidate) =>
  new Promise((resolve, reject) => {
    // Verificamos si el archivo de la ruta existe en la computadora
    /*
    se utiliza para verificar si existe un archivo o directorio en la ubicación especificada por pathToValidate.
    */
    fs.access(pathToValidate, fs.constants.F_OK)
      .then((exists) => resolve(true)) // si el archivo existe retorna true
      .catch((err) => reject(new Error("El archivo/ruta no existe")));
  });

// Extrae los links del archivo
const readLinksFile = (pathToValidate, validate) =>
  new Promise((resolve, reject) => {
    // usamos readFile para leer el archivo
    fs.readFile(pathToValidate, { encoding: "utf8" })
      .then((data) => {
        console.log("Data del archivo: ", data);
        // Convertimos el archivo markdown a HTML
        const html = convertToHtml(data);
        // Creamos un DOM para manipular el HTML que convertimos
        const linksToValidate = getHrefLinks(html, pathToValidate);
        // si validate es true retornamos validatelinks y si no retornamos linksToValidate.
        if (validate) {
          validateLinks(linksToValidate, pathToValidate)
            .then((links) => resolve(links))
            .catch((error) => reject(error));
        } else {
          // resolvemos el array de links
          resolve(linksToValidate);
        }
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
