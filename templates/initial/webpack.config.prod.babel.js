import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import HtmlwebpackPlugin from 'html-webpack-plugin';
import MappingPlugin from 'webpack-mapping-plugin';
import precss from 'precss';
import autoprefixer from 'autoprefixer';

// multiple extract instances
const extractSCSS = new ExtractTextPlugin({filename: 'css/[name].[chunkhash].css', allChunks: true});
const extractCSS = new ExtractTextPlugin({filename: 'css/[name].bootstrap.[chunkhash].css', allChunks: true});

const webpackConfig = {
  devtool: 'hidden-source-map',

  entry: {
    index: [
      './client/index.js',
    ],
    vendor: [
      'react',
      'react-dom',
    ]
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].[chunkhash].js',
    publicPath: './',
  },

  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss'],
    modules: [
      'client',
      'node_modules',
    ],
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },

      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2)$/,
        loader: 'url',
        query: {
          name: '[hash].[ext]',
          limit: 10000, // 10kb
        }
      },
      {
        test: /\.css$/,
        loader: extractCSS.extract({
          fallbackLoader: 'style-loader',
          loader: 'css-loader?modules&localIdentName=[name]_[local]_[hash:base64:5]!postcss-loader?pack=cleaner'
        }),
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: extractSCSS.extract({
          fallbackLoader: 'style-loader',
          loader: 'css-loader?modules&localIdentName=[name]_[local]_[hash:base64:5]!postcss-loader?pack=cleaner!sass-loader'
        })
      }, {
        test: /\.json$/,
        loader: 'json-loader',
      },
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: '[name].[chunkhash].js',
    }),
    extractSCSS,
    extractCSS,
    new MappingPlugin({
      basePath: '/',
    }),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false,
      }
    }),
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss () {
          return {
            defaults: [precss, autoprefixer],
            cleaner: [autoprefixer({
              browsers: ['Chrome >= 35', 'Firefox >= 38', 'Edge >= 12',
                'Explorer >= 8', 'Android >= 4.3', 'iOS >=8', 'Safari >= 8']
            })]
          };
        },
      }
    })
  ],
};

//创建 HtmlWebpackPlugin 的实例
// https://www.npmjs.com/package/html-webpack-plugin
const entry = webpackConfig.entry;

// 为 HtmlwebpackPlugin 设置配置项，与 entry 键对应，根据需要设置其参数值
const htmlwebpackPluginConfig = {
  index: {
    title: 'Wern'
  }
};

for (const key in entry) {
  if (entry.hasOwnProperty(key) && key !== 'vendor') {
    webpackConfig.plugins.push(
      new HtmlwebpackPlugin({
        title: htmlwebpackPluginConfig[key].title,
        template: path.resolve(__dirname, 'client', 'templates', 'layout.html'),
        filename: `${key}.html`,
        //chunks这个参数告诉插件要引用entry里面的哪几个入口
        chunks: [key, 'vendor'],
        //要把script插入到标签里
        inject: 'body'
      })
    );
  }
}

export default webpackConfig;