const path = require("path");
const outname = "lib";
const inname = "lib"; 
const dist = path.resolve(__dirname, "../dist");
const src = path.resolve(__dirname, "../app");

function DtsBundlePlugin() { }
DtsBundlePlugin.prototype.apply = function (compiler) {
    compiler.plugin("done", function () {
        const dts = require("dts-bundle");

        dts.bundle({
            name: outname,
            main: path.resolve(src, inname + ".d.ts"),
            out: path.resolve(dist, outname + ".d.ts"),
            removeSource: true,
            outputAsModuleFolder: true // to use npm in-package typings
        });
    });
};

module.exports = {
    entry: path.resolve(src, inname + ".ts"),
    output: {
        filename: outname + ".js",
        path: dist
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: "ts-loader",
                exclude: /node_modules/,
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    plugins: [
        new DtsBundlePlugin()
    ]
}