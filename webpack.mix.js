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

const assets = 'assets';
const dist = 'dist';

mix.setPublicPath(dist);

// Sass
mix.sass(`${assets}/styles/admin/admin.scss`, `${dist}/styles/admin.css`)
   .sass(`${assets}/styles/login/login.scss`, `${dist}/styles/login.css`)
   .sass(`${assets}/styles/wp-classes.scss`, `${dist}/styles/wp-classes.css`);

// Javascript
mix.js(`${assets}/scripts/main.js`, `${dist}/scripts`);

// Autoload
mix.autoload({
  jquery: ['$', 'window.jQuery']
});

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
  mix.version()
    .then(() => {
      const manifest = File.find(`${dist}/mix-manifest.json`);
      const json = JSON.parse(manifest.read());
      Object.keys(json).forEach(key => {
        const hashed = json[key];
        delete json[key];
        json[key.replace(/^\/+/g, '')] = hashed.replace(/^\/+/g, '');
      });
      manifest.write(JSON.stringify(json, null, 2));
    });
}
