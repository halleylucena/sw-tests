const { dependencies } = require("./package.json")

let baseUrl = "base@http://localhost:3003/remoteEntry.js"
if (process.env.NODE_ENV === "production") {
    baseUrl = "https://ionic-base.vercel.app/remoteEntry.js"
}

module.exports = {
    name: "host",
    remotes: {
        base: baseUrl,
    },
    shared: {
        ...dependencies,
        react: {
            singleton: true,
            requiredVersion: dependencies["react"],
            eager: true,
        },
        "react-dom": {
            singleton: true,
            requiredVersion: dependencies["react-dom"],
            eager: true,
        },
        "react-query": {
            singleton: true,
            requiredVersion: dependencies["react-query"],
            eager: true,
        },
    },
}
