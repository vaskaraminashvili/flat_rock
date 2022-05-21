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
const webpackConfig = require('./webpack.config');
mix.js('resources/js/app.js', 'public/js')
  .copy('resources/admin_assets/', 'public/admin_assets/')
  .copy('resources/css/bootstrap_theme.min.css', 'public/css/')
  .extract()
  .webpackConfig(webpackConfig)
  .vue(3)
  .postCss('resources/css/app.css', 'public/css', [
    //
  ])
  .version();
