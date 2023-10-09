const mdLinks = require("../");
jest.setTimeout(30000);

// mock del console.log
global.console = { log: jest.fn(), error: jest.fn() };

describe("mdLinks", () => {
  it("Retorna los links del archivo sin validar", async () => {
    const pathToValidate =
      "C:/Users/maric/Desktop/laboratoria/DEV010-md-links/ejemploLinks.md";
    const links = await mdLinks(pathToValidate, false);
    expect(links).not.toBeUndefined();
  });

  it("Retorna los links del archivo validados", async () => {
    const pathToValidate =
      "C:/Users/maric/Desktop/laboratoria/DEV010-md-links/ejemploLinks.md";
    const files = await mdLinks(pathToValidate, true);
    expect(files).not.toBeUndefined();
  });

  it("Retorna los links de la carpeta sin validar", async () => {
    const pathToValidate =
      "C:/Users/maric/Desktop/laboratoria/DEV010-md-links/ejemplos";
    const links = await mdLinks(pathToValidate, false);
    expect(links).not.toBeUndefined();
  });
  it("Retorna los links de la carpeta validados", async () => {
    const pathToValidate =
      "C:/Users/maric/Desktop/laboratoria/DEV010-md-links/ejemplos";
    const files = await mdLinks(pathToValidate, true);
    expect(files).not.toBeUndefined();
  });

  it("Retorna error al pasarle una carpeta que no existe", async () => {
    const pathToValidate =
      "C:/Users/maric/Desktop/laboratoria/DEV010-md-links/ejemplos2";
    try {
      await mdLinks(pathToValidate, true);
    } catch (error) {
      expect(error.message).not.toBeUndefined();
    }
  });
});
