'use strict';

module.exports = function (environment) {
  let ENV = {
    modulePrefix: 'ember-path',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false,
      },
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
  };

  // ENV['ember-notifyme']={
  //   closeIconHTML: '<i class="fa fa-times"></i>',
  //   messages:{
  //     success: {
  //       timeout: 8000,
  //       icon: '<span class="fa-stack fa-sm"><i class="fa fa-circle-thin fa-stack-2x"></i>  <i class="fa fa-check fa-stack-1x"></i></span>'
  //     },
  //     error: {
  //       sticky: true,
  //       icon: '<span class="fa-stack fa-sm"><i class="fa fa-circle-thin fa-stack-2x"></i>  <i class="fa fa-exclamation fa-stack-1x"></i></span>'
  //     },
  //     info: {
  //       timeout: 8000,
  //       icon: '<span class="fa-stack fa-sm"><i class="fa fa-circle-thin fa-stack-2x"></i>  <i class="fa fa-info fa-stack-1x"></i></span>'
  //     },
  //   }
  // }

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
