const   path = require("path");
const  htmlWebpackPlugin = require("html-webpack-plugin")
const  WebpackShellPlugin = require("webpack-shell-plugin-next")

module.exports = {
    mode: "development",
    entry: {
       main:'./src/main.js',
    },
    devtool: "inline-source-map",
    devServer: {
        static: path.resolve(__dirname, "dist"),
        hot: true,
    },
    output: {
        filename: "[name].bundler.js",
        path: path.resolve(__dirname, "dist"),
        clean:true
    },
    plugins: [
        new htmlWebpackPlugin({
            title: "jsx_demo",
            template:"./src/index.html"
            
        }),
        new WebpackShellPlugin({
    onBuildStart:{
        scripts: ["node ./ownLib/prepare.js"],
        blocking: true,
        parallel: false
      }, 
    onBuildEnd:{
        scripts: ['echo "Webpack End"'],
        blocking: false,
        parallel: true
      }
        })
    ]

}