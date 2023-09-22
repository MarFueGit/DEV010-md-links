const path = require("path"); // libreria para manipular rutas y directorios
const fs = require("fs/promises") // libreria para manipular archivos en la computadora

const mdLinks = (pathToValidate) =>
  new Promise((resolve, reject) => {
    // Usamos path.isAbsolute para ver si la ruta es relativa o absoluta
    if (path.isAbsolute(pathToValidate)) {
      console.log("la ruta es absoluta");
    } else {
      console.log("la ruta es relativa");
      //Convertimos la ruta a absoluta
      pathToValidate = path.resolve(pathToValidate);
      console.log("ruta convertida:", pathToValidate);
    }
    // Verificamos si el archivo de la ruta existe en la computadora
    fs.access(pathToValidate, fs.constants.F_OK, (error) => {
      if(error){
        // Si devuelve error no existe
        reject(new Error("El archivo indicado no existe"))
      }
    })

  });

module.exports = {
  mdLinks,
};
