const { validatePath } = require("../lib/pathValidations");

// mock del console.log
global.console = { log: jest.fn() };

describe("validatePath", () => {
  it("validatePath es absoluta", () => {
    const path =
      "C:/Users/maric/Desktop/laboratoria/DEV010-md-links/ejemploLinks.md";
    const response = validatePath(path);
    expect(response).toBe(
      "C:/Users/maric/Desktop/laboratoria/DEV010-md-links/ejemploLinks.md"
    );
  });

  it("validatePath es relativa", () => {
    const path = "../ejemploLinks.md";
    const response = validatePath(path);
    expect(response).toBe("C:\\Users\\maric\\Desktop\\laboratoria\\ejemploLinks.md");
  });
});
