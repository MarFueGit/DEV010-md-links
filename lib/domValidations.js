const jsdom = require("jsdom"); // Libreria para simular el DOM del navegador en node.js
const { JSDOM } = jsdom;

const getHrefLinks = (html, pathToValidate) => {
  const dom = new JSDOM(html);
  // obtenemos todos los href del dom y los convertimos en un array
  // Array.from es un método que se utiliza para convertir un objeto iterable en un array.
  const nodes = Array.from(dom.window.document.querySelectorAll("a"));
  console.log("Etiquetas href encontradas: ", nodes);
  // Recorremos el array de href y armamos los links a retornar
  // map es un método que se llama en un array y crea un nuevo array con los resultados
  //de aplicar una función a cada elemento del array original.
  //En este caso, la función de mapeo (link) => { ... }
  //se aplica a cada elemento link del array nodes.
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
