const { convertToHtml } = require("../lib/htmlValidations");

// mock del console.log
global.console = { log: jest.fn() };

describe("htmlValidations", () => {
  it("convertToHtml ", () => {
    // Markdown de ejemplo para el test
    const data = `#### Ejemplo`;
    const html = convertToHtml(data);
    expect(html).not.toBeUndefined();
  });
});
