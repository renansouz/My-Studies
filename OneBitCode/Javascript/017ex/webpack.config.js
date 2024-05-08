module.exports = {
  entry: {
    index: './src/index.js'
  },
  output: {
    filename: '[name].min.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader'
        
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};