# WordPress UI

Here lives a modernized approach to the WordPress Admin UI. It is extremely opinionated, but what I find much better than WordPress defaults. It also includes styling for ACF, SEO Framework, WordPress SEO, and various other plugins. If you have seen various screenshots I have floating around, specifically of my ACF tabs/theme options– this is it.

The SCSS is admittedly not the prettiest to read/look at. Styling the backend of WordPress is a disaster– but that isn't to say there aren't redundent styles or that it couldn't of been done more efficiently, I simply just do not have the willpower to test every little change and over-optimize everything.

This was originally closed source, but I figured I might as well open it up in case anyone wants to contribute.

All colors used are variables and can be found in `assets/styles/config` – simply just set your own variables before importing as you would any other SCSS project.

## Dependencies

* [Node.js]
* [Yarn]

## Installation 

```sh
$ yarn add wordpress-ui
```

## Example Usage 

### CSS

```scss
// Configuration
@import '../config/functions';
@import '../config/mixins';
@import '../config/variables';

// Admin styles
@import '~wordpress-ui/admin';

// Login styles
@import '~wordpress-ui/login';

// WordPress classes
@import '~wordpress-ui/wp-classes';
@import '~wordpress-ui/admin-bar';
```

### Javascript

```js
/** import local components */
import datetime from 'wordpress-ui/assets/scripts/components/datetime';

export default {
  init() {
    datetime.init();
  },

  finalize() {},
};
```

## Development 

```sh
$ git clone https://github.com/log1x/wordpress-ui && cd wordpress-ui 
$ yarn install && yarn run build
```

## License

WordPress UI is provided under the [MIT License](https://github.com/log1x/wordpress-ui/blob/master/LICENSE).


[Yarn]: <https://yarnpkg.com/>
[Node.js]: <https://nodejs.org/>
