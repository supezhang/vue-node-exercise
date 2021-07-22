const path = require("path");

module.exports ={
    entry:"./src/main.js",
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"bundle.js",
        // 打包后路径（ex:background-url）
        publicPath:'dist/'
    },
    module: {
        rules: [
          {
            test: /\.css$/,
            use: ['style-loader','css-loader']
          },
          {
            test: /\.less$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader"
            }, {
                loader: "less-loader", options: {
                    strictMath: true,
                    noIeCompat: true
                }
            }]
          },
          {
            test: /\.(png|jpg|gif)$/,
            use: [
              {
                loader: 'url-loader',
                options: {
                  // 图片大小显示，超过limit 安装file-loader
                  limit: 8196,
                  // 指定打包 后的图片路径
                  name:'img/[name].[hash:8].[ext]'
                }                
              }
            ]
          },
          {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['es2015']
              }
            }
          }
        ]
      }
}