const CompressionPlugin = require("compression-webpack-plugin");

module.exports = {
    assetsDir: 'asset',
    runtimeCompiler: true,
    productionSourceMap: false,

    transpileDependencies: [
        'vuetify'
    ],

    configureWebpack: {
        output: {
            chunkFilename: process.env.NODE_ENV === "production" ? "asset/js/[chunkhash:8].js" : "asset/js/[id].js"
        },
    },

    chainWebpack: (config) => {

        config.plugins.delete("prefetch").delete("preload");

        if (process.env.NODE_ENV === "production") {

            config.plugin("CompressionPlugin").use(CompressionPlugin);

            config.plugin('extract-css').tap((opts) => {
                opts[0].chunkFilename = process.env.NODE_ENV === "production" ? "asset/css/[chunkhash:8].css" : "asset/js/[id].css"
                return opts;
            });

            config.optimization.minimize(true);
            config.optimization.minimizer("terser").tap((args) => {
                const opts = args[0];

                opts.terserOptions.compress = {
                    ...opts.terserOptions.compress,
                    properties: true,
                };

                return args;
            });
        }
    },
}
