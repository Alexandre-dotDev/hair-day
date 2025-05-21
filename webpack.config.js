const path = require("path");

module.exports = {
  target: "web",
  mode: "development",

  /*
   É recomendando usar o path, pois ele irá tratar as particularidades de caminhos de acordo com o sistema operacional.
  */
  entry: path.resolve(__dirname, "src", "main.js"),
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },

  /*
    Cria a conecão com servido local na porta 3000, utilizando o webpack serve. A sintax precisar ser iagual a da documentção, o codigo abaixo é extraido do site do webpack.
  */
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 3000, //Indica a porta
    open: true, //Abre uma aba automaticamente no browser quando conectado
    liveReload: true, //Atualiza automaticamente a cada alteração, sem a necessidade de desconectar com o servidor.
  },
};
