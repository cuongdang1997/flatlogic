var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./config/webpack.dev');

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    contentBase: "/dist/" //index.html
}).listen(3000, 'localhost', function (err, result) {    
    if (err) {
        return console.log(err);
    }
    console.log('Listening on port 3000');
});