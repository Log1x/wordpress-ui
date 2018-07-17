const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

const assets = `assets`;
const dist = 'dist';

mix.setPublicPath(dist);
mix.setResourceRoot('../');

// Sass
mix.sass(`${assets}/styles/admin/admin.scss`, `${dist}/styles/admin.css`)
   .sass(`${assets}/styles/login/login.scss`, `${dist}/styles/login.css`)
   .sass(`${assets}/styles/wp-classes.scss`, `${dist}/styles/wp-classes.css`);

// Options
mix.options({
  processCssUrls: false,
});

// Source maps when not in production.
if (!mix.inProduction()) {
  mix.sourceMaps();
}

// Hash and version files in production.
if (mix.inProduction()) {
  mix.version();
}
