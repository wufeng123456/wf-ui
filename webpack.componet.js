const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')

const glob = require('glob'); //node自带的模块用于遍历
const list = {};
async function makeList(dirPath, list) {
  const files = glob.sync(`${dirPath}/**/index.js`); //console.log(files):'UI/packages/button/index.js'.'...'
  for (let file of files) {
    const component = file.split(/[/.]/)[2]; //取到组件name
    list[component] = `./${file}`; //添加到list对象
  }
}
makeList('ui/packages', list);

module.exports = {
  mode: 'development',
  entry: list,
  output: {
    filename: '[name].umd.js',
    path: path.resolve(__dirname, './dist'),
    library: 'wfui',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.js', '.vue', '.json']
  },
  module: {
    rules: [
      {
        test: /.vue$/,
        use: [
          {
            loader: 'vue-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}