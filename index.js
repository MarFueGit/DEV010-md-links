const { mdLinks } = require("./lib/mdLinks");
mdLinks("./README.md")
module.exports = () => mdLinks;
