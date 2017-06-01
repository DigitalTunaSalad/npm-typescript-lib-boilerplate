const path = require("path");
module.exports = {
    devtool: "inline-source-map",
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: "awesome-typescript-loader",
                exclude: /node_modules/,
                options: {
                    declaration: false
                }
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"]
    }
}