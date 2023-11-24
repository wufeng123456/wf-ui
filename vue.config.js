const path = require('path')
const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      entry: './example/main.js',
      template: './public/index.html',
      filename: 'index.html'
    }
  },
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        'ui': path.resolve(__dirname, 'ui')
      }
    },
    externals: {
      'WfUI': 'wfui'
    }
  }
})
