# WordPress UI

Here lives a modernized approach to the WordPress Admin UI.

## Dependencies

* [Node.js]
* [Yarn]

## Installation 

```sh
$ yarn add git+ssh://git@github.com/log1x/wordpress-ui.git
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

Closed Source. Do not redistribute.


[Yarn]: <https://yarnpkg.com/>
[Node.js]: <https://nodejs.org/>
