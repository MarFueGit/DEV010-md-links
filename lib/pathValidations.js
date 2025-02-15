const path = require("path"); // libreria para manipular rutas y directorios

const validatePath = (pathToValidate) => {
  let newPath = pathToValidate; // variable para guardar la nueva ruta del archivo
  // El operador !: se utiliza para negar una expresión
  // Usamos path.isAbsolute para ver si la ruta es relativa o absoluta
  if (!path.isAbsolute(pathToValidate)) {
    console.log("la ruta es relativa");
    //Convertimos la ruta a absoluta
    newPath = path.resolve(pathToValidate);
    console.log("ruta convertida:", newPath);
  }
  return newPath;// retorna la ruta ya convertida
};

const validateExtension = (pathToValidate) => {
  // Verificamos la extension del archivo
  const extArchivo = path.extname(pathToValidate);// Extrae la extension del archivo
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
  //El método includes()se utiliza para verificar si un elemento está presente en una matriz.
  // En este caso, se está verificando si extArchivo está incluido en valideExtensions.
  return valideExtensions.includes(extArchivo); // retornamos true o false
};
// unimos el nombre de los archivos con su ruta
const joinFilesPath = (files, pathToValidate) =>{
  const filesRead = files.map((file) =>
  path.join(pathToValidate, file)
);
console.log("archivos", filesRead);
return filesRead
}

module.exports = {
  validatePath,
  validateExtension,
  joinFilesPath,
};
