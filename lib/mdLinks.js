const path = require("path");
const mdLinks = (pathToValidate) => {
  if (path.isAbsolute(pathToValidate)) {
    console.log("la ruta es absoluta");
  } else {
    console.log("la ruta es relativa");
  }
};

module.exports = {
  mdLinks,
};
