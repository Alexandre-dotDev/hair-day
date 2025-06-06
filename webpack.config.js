// Constante que import o path, que será utilizado para tratar os caminhos de diversos sistemas operacionais.
const path = require("path");
// Importação do plugin
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");

/*
  Cria um modulo de exportação para expor os diretórios src e dist.
*/
module.exports = {
  target: "web",
  mode: "development",

  /*
   É recomendando usar o path, pois ele irá tratar as particularidades de caminhos de acordo com o sistema operacional.
  */
  entry: path.resolve(__dirname, "src", "main.js"), //Entrada - dados que serão empacotados pelo webpack a partir da pasta src e do arquivo main.js.

  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  }, //Saída - cria a pasta dist com um arquivo empacotados que se chamará main.js.

  /*
    Rodar um servidor de desenvolvimento com hot reload (recarga automática ao salvar arquivos).
  */
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 3000, //Indica a porta
    open: true, //Abre uma aba automaticamente no browser quando conectado
    liveReload: true, //Atualiza automaticamente a cada alteração, sem a necessidade de desconectar com o servidor.
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "index.html"),
      favicon: path.resolve("src", "assets", "scissors.svg"),
    }),

    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src", "assets"),
          to: path.resolve(__dirname, "dist", "src", "assets"),
        },
      ],
    }),
  ],

  module: {
    rules: [
      {
        test: /\.css$/, //Informa que todo .css deve ser utilizando style-loader e css-loader.
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/, //Informa que todo .js deve ser compilado pelo babel-loader usando o preset-env.
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
