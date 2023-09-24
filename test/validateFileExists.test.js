const fs = require("fs/promises");
const { validateFileExists } = require("../lib/fileValidations");

// mock del console.log
global.console = { log: jest.fn() };

describe("filevalidations", () => {
  it("validateFileExists retorna true", () => {
    const pathToValidate =
      "C:/Users/maric/Desktop/laboratoria/DEV010-md-links/ejemploLinks.md";
    const exist = validateFileExists(pathToValidate);
    expect(exist).toBe(true);
  });

  // it("validateFileExists retorna error porque no existe", () => {
  //   const pathToValidate =
  //     "C:/Users/maric/Desktop/laboratoria/DEV010-md-links/ejemploNoExiste.md";

  //   const exist = validateFileExists(pathToValidate);
  //   expect(exist).toBe(true);
  // });
});
