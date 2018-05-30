const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/08-index.ts',
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: '08-index.js'
  },
  module: {
    rules: [
      {
        test: /\.(gif|png|svg)$/,
        use: [
          'url-loader'
        ]
      },
      {
        test: /\.jpg$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          {loader: 'style-loader'},
          {loader: 'css-loader'},
        ],
      },
      {
        test: /\.tsx?$/,
        use: [
          'ts-loader'
        ]
      }
    ]
  }
};
