const { validateExtension } = require("../lib/pathValidations");

// mock del console.log
global.console = { log: jest.fn() };

describe("validateExtension", () => {
  it("extension valida", () => {
    const path =
      "C:/Users/maric/Desktop/laboratoria/DEV010-md-links/ejemploLinks.md";
    const isValid = validateExtension(path);
    expect(isValid).toBe(true);
  });

  it("extension invalida", () => {
    const path = "C:/Users/maric/Desktop/laboratoria/DEV010-md-links/thumb.png";
    const isValid = validateExtension(path);
    expect(isValid).toBe(false);
  });
});
