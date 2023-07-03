const path = require('path');

module.exports = {
  mode: 'production',
  entry: './src/user-routine.ts',
  module: {
    rules: [
      {
        use: {
          loader: 'ts-loader',
          options: {
            configFile: "tsconfig.json"
          }
        },
        exclude: /node_modules/,
      },
      {
        test: /\.html$/i,
        use: [{
          loader: 'raw-loader',
        }]
      },
      {
        test: /\.css$/i,
        use: [{
          loader: 'raw-loader',
        }]
      },
    ],
  },
  resolve: {
    extensions: ['.ts'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'user-routine-v6.min.js',
    library: {
      type: 'commonjs-static',
    },
  },
};
