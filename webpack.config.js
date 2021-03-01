
const path = require("path");
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    devServer: {
        historyApiFallback: true,
        contentBase: path.resolve(__dirname),
        open: true,
        compress: true,
        hot: true,
        port: 8080,
        historyApiFallback: {
            index: 'index.html'
        }
  
    },
    plugins: [
        // ...
        // применять изменения только при горячей перезагрузке
        new webpack.HotModuleReplacementPlugin(),
    ],
   entry: {
       app: './index.jsx',
   },
   context: path.resolve(__dirname, "static_src"),
   output: {
       path: path.resolve(__dirname, "static", "build"),
       filename: 'app.js',
   },

   


   module: {
    rules: [
        {
            test: /\.(js|jsx)$/,
            include: path.resolve(__dirname, "static_src"),
            loader: 'babel-loader',
            exclude: /node_modules/,
            options: {
              presets: ['@babel/env', '@babel/react'],
              plugins: [
                [
                    "@babel/plugin-proposal-class-properties",
                    {
                        "loose": true
                    }
                ]
            ]

            },



        },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        },
    ],
},

    resolve: {
        modules: [`${__dirname}/static_src`, 'node_modules'],
        extensions: ['.js', '.jsx'],
    },

    

   
};
