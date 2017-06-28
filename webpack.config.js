var path = require('path');
module.exports = {
    entry: "./src/index.jsx",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },
    watch: true,
    devtool: "source-map",

    resolve: {
        extensions: [".js", ".jsx"],
        alias: {
            Components: path.resolve(__dirname, 'src/components/'),
            Containers: path.resolve(__dirname, 'src/containers/'),
            Actions: path.resolve(__dirname, 'src/actions/'),
            Reducers: path.resolve(__dirname, 'src/reducres/'),
            Services: path.resolve(__dirname, 'src/services/'),
            Constants: path.resolve(__dirname, 'src/constants/'),
            Statics: path.resolve(__dirname, 'src/statics/'),
        }
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: [
                    "babel-loader"
                ],
                exclude: /node_modules/,
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