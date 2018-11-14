/** import local dependencies */
import Router from './util/Router';
import common from './routes/common';

/**
 * Populate Router instance with DOM routes
 * @type {Router} routes - An instance of our router
 */
const routes = new Router({
  common,
});

/** Load Events */
jQuery(document).ready(() => routes.loadEvents());
