const { validatePath, validateExtension } = require("./lib/pathValidations");
const { validateFileExists } = require("./lib/fileValidations");

const fs = require("fs/promises"); // libreria para manipular archivos en la computadora
const { convertToHtml } = require("./lib/htmlValidations");
const { getHrefLinks } = require("./lib/domValidations");

const mdLinks = (pathToValidate) =>
  // se utiliza para crear una nueva instancia de una promesa tambien representa una operación asincrónica
  new Promise((resolve, reject) => {
    // Usamos validatePath para ver si la ruta es relativa o absoluta
    pathToValidate = validatePath(pathToValidate);

    // Verificamos si el archivo de la ruta existe en la computadora
    validateFileExists(pathToValidate);

    if (!validateExtension(pathToValidate)) {
      reject(new Error("El archivo no es compatible"));
    }
    // Empezamos a leer el archivo
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

// // pruebas de mdLinks
// mdLinks("./ejemploLinks.md")
//   // .then: se utiliza para manejar el resultado exitoso de una promesa y ejecutar una función que toma links como parámetro.
//   .then((links) => {
//     console.log(links);
//   })
//   // .catch: se utiliza para gestionar el rechazo de una promesa y ejecutar una función que toma error como parámetro.
//   .catch((error) => {
//     console.log(error);
//   });

module.exports = mdLinks;
