const AutoDynamicPlugin = require('auto-dynamic-routes');
const path = require('path');
const resolve = (dir) => path.join(__dirname, dir);


module.exports = {
  assetsDir: 'static',
  
  configureWebpack: config => {
    // 基本插件
    let pluginsBase = [
      new AutoDynamicPlugin({
        fileName: 'dynamicRouter.ts',
        inPath: path.resolve(__dirname, './src/views'),
        srcDir: 'views'
      })
    ];
    config.plugins = [...config.plugins, ...pluginsBase];
  },
};

