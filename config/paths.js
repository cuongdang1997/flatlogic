const path = require('path');
var fs = require('fs');

// resolve the paths in the project
var appDirectory = fs.realpathSync(process.cwd());
function resolveApp(relativePath) {
  return path.resolve(appDirectory, relativePath);
}

// setup the paths that are used inside the webpack configs
module.exports = {
  index: resolveApp('src/index.jsx'),
  build: resolveApp('dist'),
  src: resolveApp('src')
}