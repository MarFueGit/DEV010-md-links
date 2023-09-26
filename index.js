const { validatePath, validateExtension } = require("./lib/pathValidations");
const { validateFileExists, readLinksFile } = require("./lib/fileValidations");

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
   readLinksFile(pathToValidate)
   .then((links) => resolve(links))
   .catch((error) => reject(error))
  });

// pruebas de mdLinks
mdLinks("./ejemploLinks.md")
  // .then: se utiliza para manejar el resultado exitoso de una promesa y ejecutar una función que toma links como parámetro.
  .then((links) => {
    console.log(links);
  })
  // .catch: se utiliza para gestionar el rechazo de una promesa y ejecutar una función que toma error como parámetro.
  .catch((error) => {
    console.log(error);
  });

module.exports = mdLinks;
