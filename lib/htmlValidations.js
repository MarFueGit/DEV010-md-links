const marked = require("marked"); // Libreria para convertir markdows a HTML

const convertToHtml = (data) => {
  // usamos marked para convertir markdown a HTML
  const html = marked.parse(data);
  console.log("HTML => ", html);
  return html;
};

module.exports = {
  convertToHtml,
};
