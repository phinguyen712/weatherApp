module.exports = {
  entry: './app/app.jsx',
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    root: __dirname,
    alias: {
      Main: 'app/components/main.jsx',
      Nav: 'app/components/nav.jsx',
      Weather: 'app/components/weather.jsx',
      WeatherForm: 'app/components/weatherForm.jsx',
      WeatherMessage: 'app/components/weatherMessage.jsx',
      About: 'app/components/about.jsx',
      Examples: 'app/components/examples.jsx',
      OpenWeather:'app/api/openWeather.jsx'
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devtool:"inline-source-map"
};
