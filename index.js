const { mdLinks } = require("./lib/mdLinks");
mdLinks("./ejemploLinks.md")
  .then((links) => {
    console.log(links);
  })
  .catch((error) => {
    console.log(error);
  });
module.exports = () => mdLinks;
