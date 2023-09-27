const { readLinksFile } = require("../lib/fileValidations");

// mock del console.log
global.console = { log: jest.fn() };

describe("readLinksFile", () => {
  it("regresa un arrays de links ", async () => {
    const pathToValidate =
      "C:/Users/maric/Desktop/laboratoria/DEV010-md-links/ejemploLinks.md";
    const links = await readLinksFile(pathToValidate);
    expect(links.length).toBeGreaterThan(0);
  });
  it("regresa un error", async () => {
    try {
      const pathToValidate =
        "C:/Users/maric/Desktop/laboratoria/DEV010-md-links/ejemploNoExiste.md";
      await readLinksFile(pathToValidate);
    } catch (error) {
      expect(error).toBeInstanceOf(Error);
    }
  });
});
