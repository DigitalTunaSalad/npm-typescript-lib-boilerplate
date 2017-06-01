var webpackConfig = require("./webpack.test");
var environment = (process.env.NODE_ENV || "development").trim();

module.exports = function (config) {
  var _config = {
    basePath: "",

    frameworks: ["jasmine"],

    files: [           
            "./test/**/*spec.ts"            
        ],

        preprocessors: {
            "./test/**/*spec.ts": ["webpack"]
        },

    webpack: webpackConfig,

    webpackMiddleware: {
      stats: "errors-only"
    },

    webpackServer: {
      noInfo: true
    },

    reporters: ["progress"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO
  };

  config.set(_config);
};