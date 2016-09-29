/**
 * Created by dp-ptcstd-34 on 9/29/2016.
 */

const path = require('path');

const PATHS = {
    app: "./js/app",                       /* точка входа чтобы транспилировать */
    build: path.join(__dirname, 'build')   /* будет билдиться в папку build npm runn*/
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
                    presets: ['es2015','react'] /* es2015 - чтобы работать с js2015 синтаксиом*/
                                                /* react - чтобы работать с react синтаксиом*/
                }
            }
        ]
    },
    watch: true

};
