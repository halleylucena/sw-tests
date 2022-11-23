const { dependencies } = require('./package.json')

module.exports = {
  name: 'host',
  remotes: {
    remote: 'remote@https://ionic-components.vercel.app/remoteEntry.js',
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
  },
}