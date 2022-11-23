const { ModuleFederationPlugin } = require("webpack").container
const WorkboxPlugin = require("workbox-webpack-plugin")

const webpackConfigPath = "react-scripts/config/webpack.config"
const webpackConfig = require(webpackConfigPath)

const override = (config) => {
    config.plugins.push(new ModuleFederationPlugin(require("../../modulefederation.config.js")))

    config.output.publicPath = "auto"

    return config
}

require.cache[require.resolve(webpackConfigPath)].exports = (env) => override(webpackConfig(env))

// module.exports = {
//     plugins: [
//         new WorkboxPlugin.GenerateSW({
//             // these options encourage the ServiceWorkers to get in there fast
//             // and not allow any straggling "old" SWs to hang around
//             clientsClaim: true,
//             skipWaiting: true,
//         }),
//     ],
// }

module.exports = require(webpackConfigPath)
