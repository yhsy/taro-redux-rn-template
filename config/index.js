// 引入nodejs的path模块
const path = require('path');

// NOTE 在 sass 中通过别名（@ 或 ~）引用需要指定路径
const sassImporter = (url) =>{
  if (url[0] === '~' && url[1] !== '/') {
    return {
      file: path.resolve(__dirname, '..', 'node_modules', url.substr(1))
    }
  }

  const reg = /^@styles\/(.*)/
  return {
    file: reg.test(url) ? path.resolve(__dirname, '..', 'src/styles', url.match(reg)[1]) : url
  }
}

const config = {
  projectName: 'taro-mall',
  date: '2019-12-19',
  designWidth: 750,
  deviceRatio: {
    '640': 2.34 / 2,
    '750': 1,
    '828': 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: {
    babel: {
      sourceMap: true,
      presets: [
        ['env', {
          modules: false
        }]
      ],
      plugins: [
        'transform-decorators-legacy',
        'transform-class-properties',
        'transform-object-rest-spread'
      ],

    },
    sass: {
      importer: sassImporter
    }
  },
  defineConstants: {
  },
  // 别名配置
  alias: {
    // 页面目录
    '@pages': path.resolve(__dirname, '..', 'src/pages'),
    // 状态目录
    '@store': path.resolve(__dirname, '..', 'src/store'),
    // Models目录
    '@models': path.resolve(__dirname, '..', 'src/models'),
    // 资源目录
    '@assets': path.resolve(__dirname, '..', 'src/assets'),
    // 工具函数目录
    '@utils': path.resolve(__dirname, '..', 'src/utils'),
    // 样式目录
    '@styles': path.resolve(__dirname, '..', 'src/styles'),
    // 组件目录
    // '@components': path.resolve(__dirname, '..', 'src/components'),
  },
  weapp: {
    module: {
      postcss: {
        autoprefixer: {
          enable: true,
          config: {
            browsers: [
              'last 3 versions',
              'Android >= 4.1',
              'ios >= 8'
            ]
          }
        },
        pxtransform: {
          enable: true,
          config: {

          }
        },
        url: {
          enable: true,
          config: {
            limit: 10240 // 设定转换尺寸上限
          }
        },
        cssModules: {
          enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
          config: {
            namingPattern: 'module', // 转换模式，取值为 global/module
            generateScopedName: '[name]__[local]___[hash:base64:5]'
          }
        }
      }
    }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    module: {
      postcss: {
        autoprefixer: {
          enable: true,
          config: {
            browsers: [
              'last 3 versions',
              'Android >= 4.1',
              'ios >= 8'
            ]
          }
        },
        cssModules: {
          enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
          config: {
            namingPattern: 'module', // 转换模式，取值为 global/module
            generateScopedName: '[name]__[local]___[hash:base64:5]'
          }
        }
      }
    }
  },
  rn: {
    appJson: {
      // NOTE taro-native-shell 中默认用的是 taroDemo
      name: 'taroDemo'
    }
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
