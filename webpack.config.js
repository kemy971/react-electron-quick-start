module.exports = {
    entry: "./src/index.jsx",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },
    watch: true,
    devtool: "source-map",

    resolve: {
        extensions: [".js", ".jsx"]
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: [
                    "babel-loader"
                ],
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use:[
                    "style-loader",
                    "css-loader",
                    "sass-loader"
                ]
            }
        ]
    }
}