const path = require('path');

module.exports = {
  watch: true,
  entry: {
    main: './resources/assets/js/main.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public/js')
  },
  module: {
    rules: [
    	{
    		test: /\.js$/, exclude: /node_modules/, 
		    use: [
		      {
		        loader: 'babel-loader',
		        options: {
		          presets: ['react']
		        }
		      }
		    ] 
		},
    {
        test: /\.sass$/,
        use: [
            "style-loader", // creates style nodes from JS strings
            "css-loader", // translates CSS into CommonJS
            "sass-loader" // compiles Sass to CSS
        ]
    }
    ]
  }
};