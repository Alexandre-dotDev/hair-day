const path = require("path");

module.exports = {
  target: "web",
  mode: "development",

  // É recomendando usar o path, pois ele irá tratar as particularidades de caminhos de acordo com o sistema operacional.
  entry: path.resolve(__dirname, "src", "main.js"),
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
};
