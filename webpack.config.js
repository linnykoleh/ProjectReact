/**
 * Created by dp-ptcstd-34 on 9/29/2016.
 */

const path = require('path');

const PATHS = {
    app: "./js/gridComponentNew",                    /* точка входа чтобы транспилировать */
    build: path.join(__dirname, 'build')        /* будет билдиться в папку build npm runn*/
};

module.exports = {
    entry: {
        app: PATHS.app
    },
    output: {
        path: PATHS.build,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            },{
                test: /\.css$/,
                loaders: ['style', 'css']
            },
            { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
        ]
    },
    watch: true
};
