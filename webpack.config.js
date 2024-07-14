const path =  require ( 'path' );
const HtmlWebpackPlugin =  require ( 'html-webpack-plugin' );

module.exports = {
    entry:  './src/index.js' ,//punto entrada
    output: {
        path: path.resolve(__dirname,  'dist' ),//punto salida
        filename: 'main.js'
    },

    resolve: {
        extensions: [ '.js' ],
    },

    module: {
        rules: [
            {
                test:  /\.js$/ ,
                exclude:  /node_modules/ ,
                use: {
                    loader:  'babel-loader' ,
                }
            }
        ]
    },

    Plugins: [
        new HtmlWebpackPlugin({
            inject:  true ,
            template:  './public/index.html' ,
            filename:  './index.html' 
        })
    ]
};


