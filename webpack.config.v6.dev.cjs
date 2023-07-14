const path = require('path');

module.exports = {
  mode: 'production',
  entry: './test/dev.ts',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [{
          loader: 'raw-loader',
        }],
        include: path.resolve(__dirname, './test/'),
        exclude: /node_modules/,
      },
      {
        test: /\.html$/i,
        use: [{
          loader: 'raw-loader',
        }],
        include: path.resolve(__dirname, './test/'),
        exclude: /node_modules/,
      },
      {
        test: /\.ts$/i,
        use: {
          loader: 'ts-loader',
          options: {
            configFile: "tsconfig.json"
          }
        },
        include: path.resolve(__dirname, './test/'),
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.html', '.css'],
  },
  output: {
    path: path.resolve(__dirname, 'test'),
    filename: 'dev.js',
    library: {
      type: 'commonjs-static',
    },
  },
};
