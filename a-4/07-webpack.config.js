const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/07-index.ts',
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: '07-index.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          'ts-loader'
        ]
      }
    ]
  }
};
