const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/src/main.js', 'public/js').vue()
    .css('resources/js/src/assets/styles/index.css', 'public/css')
    .options({
        postCss: [
            require('tailwindcss'),
            require('autoprefixer'),
        ]
    })
    .webpackConfig(require('./webpack.config'));
