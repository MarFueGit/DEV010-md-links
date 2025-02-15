const fs = require("fs/promises");
const { validateFileExists } = require("../lib/fileValidations");

// mock del console.log
global.console = { log: jest.fn() };

describe("filevalidations", () => {
  it("validateFileExists retorna true", async () => {
    const pathToValidate =
      "C:/Users/maric/Desktop/laboratoria/DEV010-md-links/ejemploLinks.md";
    const exist = await validateFileExists(pathToValidate);
    expect(exist).toBe(true);
  });

  it("validateFileExists retorna error porque no existe", async () => {
    try {
      const pathToValidate =
        "C:/Users/maric/Desktop/laboratoria/DEV010-md-links/ejemploNoExiste.md";

      await validateFileExists(pathToValidate);
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });
});
