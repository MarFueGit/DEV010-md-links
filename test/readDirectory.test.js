const { readDirectory } = require("../lib/directoryValidations");

// mock del console.log
global.console = { log: jest.fn(), error: jest.fn() };

describe("readDirectory", () => {
  // En el it se pone lo que vas a testear
  it("Regresa todos los archivos de una carpeta", () => {
    //1. El primer paso es declarar los argumentos que le vayas a pasar a tu funcion
    // ¿que datos recibe readDirectory?
    // pon la ruta completa, asi como en las otras
    const pathToValidate =
      "C:/Users/maric/Desktop/laboratoria/DEV010-md-links/ejemplos";
    const files = readDirectory(pathToValidate);
    expect(files.length).toBe(6);
  });
  it("Regresa error cuando la carpeta no existe", () => {
    const pathToValidate =
      "C:/Users/maric/Desktop/laboratoria/DEV010-md-links/mary";
    const files = readDirectory(pathToValidate);
    expect(files).toBe(undefined);
  });
});
