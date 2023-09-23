const path = require("path"); // libreria para manipular rutas y directorios
const fs = require("fs/promises"); // libreria para manipular archivos en la computadora
const marked = require("marked"); // Libreria para convertir markdows a HTML
const jsdom = require("jsdom"); // Libreria para simular el DOM del navegador en node.js
const { JSDOM } = jsdom;

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
      if (error) {
        // Si devuelve error no existe
        reject(new Error("El archivo indicado no existe"));
      }
    });
    // Verificamos la extension del archivo
    const extArchivo = path.extname(pathToValidate);
    console.log("la extension del archivo es:", extArchivo);
    const valideExtensions = [
      ".md",
      ".mkd",
      ".mdwn",
      ".mdown",
      ".mdtxt",
      ".mdtext",
      ".markdown",
      ".text",
    ];
    if (!valideExtensions.includes(extArchivo)) {
      reject(new Error("El archivo no es valido"));
    }
    // Empezamos a leer el archivo
    fs.readFile(pathToValidate, { encoding: "utf8" })
      .then((data) => {
        console.log(data);
        // Convertimos el archivo markdown a HTML
        const html = marked.parse(data);
        console.log(html);
        // Creamos un DOM para manipular el HTML que convertimos
        const dom = new JSDOM(html);
        // obtenemos todos los href del dom y los convertimos en un array
        const nodes = Array.from(dom.window.document.querySelectorAll("a"));
        console.log("Etiquetas href encontradas", nodes);
        // Recorremos el array de href y armamos los links a retornar
        const links = nodes.map((link) =>{
          return {
            href:link.href,
            text:link.textContent,
            file:pathToValidate

          }
        })
        // resolvemos el array de links
        resolve(links)
      })
      .catch((error) => {
        console.log(error);
        reject(new Error("Hubo un problema al leer el archivo"));
      });
  });

module.exports = {
  mdLinks,
};
