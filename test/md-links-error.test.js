const mdLinks = require("../");

// mock del console.log
global.console = { log: jest.fn(), error: jest.fn() };

jest.mock("../lib/fileValidations", () => ({
  readLinksFile: () =>
    new Promise((reject) => {
      return reject(new Error("No se pudieron validar"));
    }),
  validateFileExists: () =>
    new Promise((resolve) => {
      return resolve(true);
    }),
}));

describe("mdLinks", () => {
  it("retorna error al querer validar los links de la carpeta", async () => {
    const pathToValidate =
      "C:/Users/maric/Desktop/laboratoria/DEV010-md-links/ejemplos";
    try {
     await mdLinks(pathToValidate, true);
    } catch (error) {
      expect(error.message).not.toBeUndefined();
    }
  });
});
