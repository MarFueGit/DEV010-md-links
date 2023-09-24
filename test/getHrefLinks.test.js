const { getHrefLinks } = require("../lib/domValidations");

// mock del console.log
global.console = { log: jest.fn() };

describe("domValidations", () => {
  it("getHrefLinks ", () => {
    const html = `<a href="/">Este es un ejemplo</a>`;
    const pathToValidate =
      "C:/Users/maric/Desktop/laboratoria/DEV010-md-links/ejemploLinks.md";
    const links = getHrefLinks(html, pathToValidate);
    expect(links.length).toBe(1);
  });
});
