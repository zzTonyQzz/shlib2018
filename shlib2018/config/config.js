// 该文件主要用来配置构建开发环境和生产环境差异化的参数

const _path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// vue-loader基本配置
const baseVueLoaderConf = {
  // 引入postcss插件
  postcss: {
    config: {
      path: _path.resolve("../")
    }
  },
  // 转为require调用, 让webpack处理目标资源
  transformToRequire: {
    video: "src",
    source: "src",
    img: "src",
    image: "xlink:href"
  }
};

// vue-loader开发环境配置
const devVueLoaderConf = Object.assign({}, baseVueLoaderConf, {
  // loaders
  loaders: {
    css: ['vue-style-loader', 'css-loader'],
    less: ['vue-style-loader', 'css-loader', 'postcss-loader', 'less-loader']
  },
  cssSourceMap: true
});

// vue-loader生产环境配置
const buildVueLoaderConf = Object.assign({}, baseVueLoaderConf, {
  // loaders
  loaders: ExtractTextPlugin.extract({
    use: ['css-loader', 'postcss-loader', 'less-loader'],
    fallback: 'vue-style-loader'
  }),
  cssSourceMap: false
});

// 开发 / 生产环境 配置参数
module.exports = {
  dev: {
    publicPath: "/",
    devtoolType: "cheap-module-eval-source-map",
    vueloaderConf: devVueLoaderConf,
    // host: "10.40.254.183",
    host: "0.0.0.0",
    port: "2018",
    proxyTable: {
      '/apis': {
        target: "https://ws01.library.sh.cn/mservices",
        // target: "http://116.228.89.136:8082/mservices",
        pathRewrite: {
          '^/apis': '/'
        },
    		changeOrigin: true,
        secure: false
    	},
        '/doubanapis':{
            target: "https://api.douban.com/v2",
            // target: "http://116.228.89.136:8082/mservices",
            pathRewrite: {
                '^/doubanapis': '/'
            },
            changeOrigin: true
        }
    }
  },
  build: {
    publicPath: "/",  // 路径
    devtoolType: "source-map",
    vueloaderConf: buildVueLoaderConf,
    staticPath: "static"
  }
};