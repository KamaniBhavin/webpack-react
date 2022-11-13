const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = () => {
    return {
        entry: "/src/index.tsx",
        mode: "development",
        devtool: "cheap-module-source-map",
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: "ts-loader",
                    exclude: /node_modules/
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: "[name].html",
                template: "./src/static/template.html"
            })
        ],
        optimization: {
            splitChunks: {
                chunks: "all"
            }
        }
    }
}