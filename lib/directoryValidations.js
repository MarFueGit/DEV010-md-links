const { readdirSync, statSync} = require("fs");

const readDirectory = (pathToValidate) => {
  try {
    let files = readdirSync(pathToValidate);   // se utiliza readdirSync para leer el contenido del directorio
    console.log("Archivos en el directorio:", files); //luego se muestra una lista de los archivos en la consola
    return files;  //  La función devuelve la lista de archivos leídos.
  } catch (error) {
    console.error("Error al leer el directorio:", error);
  }
};

/*
 Esta función también recibe un parametro pathToValidate y utiliza statSync para obtener información
 sobre la ruta proporcionada. Luego, verifica si la ruta es una carpeta o no y muestra un mensaje
  en la consola en consecuencia. La función devuelve true si la ruta es una carpeta y false si no lo es.
*/
const isDirectory = (pathToValidate) => {
  const data = statSync(pathToValidate);
  if (data.isDirectory()) {
    console.log("Es una carpeta");
    return true;
  }else{
// Es un archivo
    return false;
  }

};

module.exports = {
  readDirectory,
  isDirectory,
};

//----------------------------------EN RESUMEN-------------------------------------------------------------------------

// este código proporciona dos funciones que pueden ser utilizadas para leer un directorio
// y verificar si un camino dado es un directorio o no en una aplicación de Node.js. Estas funciones pueden
//ser importadas y utilizadas en otros archivos de JavaScript.

