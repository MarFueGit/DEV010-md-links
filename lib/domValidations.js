const jsdom = require("jsdom"); // Libreria para simular el DOM del navegador en node.js
const { JSDOM } = jsdom; // Importa la clase JSDOM del módulo jsdom y la asigna a la variable JSDOM

// la función getHrefLinks que recibe 2 parametros
const getHrefLinks = (html, pathToValidate) => {
  // Creamos una instancia del DOM
  const dom = new JSDOM(html);
  // obtenemos todos los href del dom y los convertimos en un array
  const nodes = Array.from(dom.window.document.querySelectorAll("a"));
  console.log("Etiquetas href encontradas: ", nodes);
  // Recorremos el array de href y armamos los links a retornar
  const links = nodes.map((link) => {
    return {
      href: link.href,
      text: link.textContent,
      file: pathToValidate,
    };
  });

  return links;
};

module.exports = {
  getHrefLinks,
};
