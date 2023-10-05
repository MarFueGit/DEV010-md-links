const axios = require("axios");
const { validateLinks } = require("../../lib/linksValidations");

jest.mock("axios");

// mock del console.log
global.console = { log: jest.fn() };

describe("validateLinks", () => {
  it("debe retornar error al validar los links", async () => {
     // Configurar el mock de Axios para simular un error
    axios.get.mockRejectedValue({ status: 500 });
    const links = [
      {
        href: "https://www.youtube.commmm/",
        text: "Ejemplo Link 1",
        file: "C:\\Users\\maric\\Desktop\\laboratoria\\DEV010-md-links\\ejemploLinks.md",
      },
      {
        href: "https://jsonplaceholder.typicode.com/",
        text: "Ejemplo Link 2",
        file: "C:\\Users\\maric\\Desktop\\laboratoria\\DEV010-md-links\\ejemploLinks.md",
      },
      {
        href: "https://images.pexels.com/photos/982300/pexels-photo-982300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        text: "Un gato",
        file: "C:\\Users\\maric\\Desktop\\laboratoria\\DEV010-md-links\\ejemploLinks.md",
      },
    ];

    const pathToValidate =
      "C:/Users/maric/Desktop/laboratoria/DEV010-md-links/ejemploLinks.md";
    // 1. Paso.Invocar a la funciona a testear y guardar el resultado en una variable
    // ahora pasare las dos variables a la funcion validateLinks y agregare await, porque es una promesa
    const response = await validateLinks(links, pathToValidate);
    // Ahora hay que agregar el expect
    expect(response.length).toBeGreaterThan(0);
  });
});
