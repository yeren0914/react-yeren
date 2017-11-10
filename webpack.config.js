/**
 * Created by yejingyang on 2017/11/8.
 */

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    devServer:{
        disableHostCheck: true
    },
    entry: './src/app',
    output:{
        path: __dirname+'/build',
        filename:'js/build.js'
    },
    module: {
        rules: [
            {
                test:/\.jsx?$/,
                loader:"babel-loader",
                exclude:/node_modules/,
                query:{
                    plugins:['transform-runtime'],
                    presets:['es2015','react','stage-0']
                }
            },{
                test: /\.js/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    plugins: ['transform-runtime'],
                    presets: ['es2015', 'react', 'stage-2']
                }
            }, {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test:/\.scss$/,
                loader:"style-loader!css-loader!sass-loader"
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            title:'',
            hash:true,
            baseUr:'/',
            template: path.resolve(__dirname,'src/index.html')
        })
    ]


}





