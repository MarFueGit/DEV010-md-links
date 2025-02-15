const { joinFilesPath } = require('../lib/pathValidations')

// Mock console.log
global.console = { log: jest.fn(), error: jest.fn() };

describe('joinFilesPath', () => {
it('Retorna los archivos unidos con su ruta ', () => {
const files = ['ejemplo1.md', 'ejemplo2.md']
const pathToValidate =  "C:/Users/maric/Desktop/laboratoria/DEV010-md-links/ejemplos";
const filesRead = joinFilesPath(files, pathToValidate);
expect(filesRead.length).toBe(2)
});
});
