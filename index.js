const {
  validatePath,
  validateExtension,
  joinFilesPath,
} = require("./lib/pathValidations");
const { validateFileExists, readLinksFile } = require("./lib/fileValidations");
const { isDirectory, readDirectory } = require("./lib/directoryValidations");

// Declaramos la funcion principal
const mdLinks = (
  pathToValidate,
  validate = false // ruta del archivo y parametro validate
) =>
  // se utiliza para crear una nueva instancia de una promesa tambien representa una operación asincrónica
  new Promise((resolve, reject) => {
    // 1. Usamos validatePath para ver si la ruta es relativa o absoluta
    pathToValidate = validatePath(pathToValidate);

    // 2. Verificamos si el archivo de la ruta existe en la computadora
    validateFileExists(pathToValidate)
      .then(() => {
        // 3. Validamos si es archivo o carpeta
        if (isDirectory(pathToValidate)) {
          //4. si la ruta es una carpeta validamos todos los archivos de la carpeta.
          console.log("la ruta es una carpeta");
          const files = readDirectory(pathToValidate);
          // 5. unimos el nombre de los archivos con su ruta
          const filesRead = joinFilesPath(files, pathToValidate);
          // 6. Quitamos los archivos que no sean .md
          const filesMd = filesRead.filter((file) => validateExtension(file));
          // 7. Hacemos un array de promesas utilizando .map(),para que se haga la extraccion de links
          // por cada archivo de la carpeta
          const filesPromises = filesMd.map(
            (file) =>
              new Promise((resolve, reject) => {
                readLinksFile(file, validate)
                  .then((links) => resolve(links))
                  .catch((error) => reject(error));
              })
          );
          console.log("files promises:", filesPromises);
          // 8. Usamos Promise.all para resolver todas las promesas
          Promise.all(filesPromises)
            .then((links) => {
              resolve(links); // se ejecuta cuando todas las promesas en filesPromises se han resuelto correctamente.
            })
            .catch((error) =>
              reject( // se ejecuta cuando alguna de las promesas en filesPromises es rechazada
                new Error("Hubo un error al leer los archivos de la carpeta")
              )
            );
        } else {
          // 9. si la ruta es un archivo solo leemos el archivo
          //Verificamos la extension del archivo
          if (!validateExtension(pathToValidate)) {
            reject(new Error("El archivo no es compatible"));
          }
          //10.  Empezamos a leer los links del archivo
          readLinksFile(pathToValidate, validate)
            .then((links) => resolve(links))
            .catch((error) => reject(error));
        }
      })
      .catch((error) => reject(error));
  });

// ---------------------------------------------------------------------------------------------------------

//Invocamos la funcion principal mdLinks
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
