const { validatePath, validateExtension } = require("./lib/pathValidations");
const { validateFileExists, readLinksFile } = require("./lib/fileValidations");
const { isDirectory } = require("./lib/directoryValidations");


// Declaramos la funcion principal
const mdLinks = (pathToValidate, validate = false) => // ruta del archivo y parametro validate
  // se utiliza para crear una nueva instancia de una promesa tambien representa una operación asincrónica
  new Promise((resolve, reject) => {
    // Usamos validatePath para ver si la ruta es relativa o absoluta
    pathToValidate = validatePath(pathToValidate);

    // Verificamos si el archivo de la ruta existe en la computadora
    validateFileExists(pathToValidate);

    // Validamos si es archivo o carpeta ---- PENDIENTE
    if (isDirectory(pathToValidate)){
      console.log("la ruta es una carpeta")
    }

    //Verificamos la extension del archivo
    if (!validateExtension(pathToValidate)) {
      reject(new Error("El archivo no es compatible"));
    }
    // Empezamos a leer el archivo
    readLinksFile(pathToValidate, validate)
      .then((links) => resolve(links))
      .catch((error) => reject(error));
  });

// Invocamos la funcion principal mdLinks
mdLinks("./ejemploLinks.md", true)
  // .then: se utiliza para manejar el resultado exitoso de una promesa y ejecutar una función que toma links como parámetro.
  .then((links) => {
    console.log(links);
  })
  // .catch: se utiliza para gestionar el rechazo de una promesa y ejecutar una función que toma error como parámetro.
  .catch((error) => {
    console.log(error);
  });


module.exports = mdLinks;
