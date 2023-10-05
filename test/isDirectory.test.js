const { isDirectory } = require("../lib/directoryValidations");

// mock del console.log
global.console = { log: jest.fn(), error: jest.fn() };

describe("isDirectory", () => {
  // En el it se pone lo que vas a testear
  it("Regresa true cuando le paso una carpeta", () => {
    const pathToValidate =
      "C:/Users/maric/Desktop/laboratoria/DEV010-md-links/ejemplos";
    const directory = isDirectory(pathToValidate);
    expect(directory).toBe(true);
  });
  it("Regresa false cuando le paso un archivo", () => {
    const pathToValidate =
      "C:/Users/maric/Desktop/laboratoria/DEV010-md-links/ejemploLinks.md";
    const directory = isDirectory(pathToValidate);
    expect(directory).toBe(false);
  });
});
