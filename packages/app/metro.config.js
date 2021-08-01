/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

const path = require('path');

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  resolver: {
    extraNodeModules: new Proxy(
      {},
      {
        get: (target, name) => {
          return path.join(__dirname, `node_modules/${name}`);
        },
      },
    ),
  },
  watchFolders: [
    path.resolve(__dirname, '../'),
    path.resolve(__dirname, '../../node_modules'),
  ],
};

// const path = require('path');

// module.exports = {
//   transformer: {
//     getTransformOptions: async () => ({
//       transform: {experimentalImportSupport: false, inlineRequires: false},
//     }),
//   },
//   watchFolders: [path.resolve(__dirname, '../../node_modules')],
// };


// node_modules
// ../../node_modules
// /home/taher/mymonorepo/packages/app/node_modules/react-native-paper