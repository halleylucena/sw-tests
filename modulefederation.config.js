const { dependencies } = require('./package.json')

module.exports = {
  name: 'host',
  remotes: {
    base: 'base@http://localhost:3003/remoteEntry.js'
  },
  shared: {
    ...dependencies,
    react: {
      singleton: true,
      requiredVersion: dependencies['react'],
      eager: true,
    },
    'react-dom': {
      singleton: true,
      requiredVersion: dependencies['react-dom'],
      eager: true,
    },
    'react-query': {
      singleton: true,
      requiredVersion: dependencies['react-query'],
      eager: true,
    },
  },
}