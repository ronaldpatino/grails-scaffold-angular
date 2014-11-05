'use strict';

angular.module('angularDemoApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap'
])
  .config(function (\$stateProvider, \$urlRouterProvider, \$locationProvider) {
    \$urlRouterProvider
      .otherwise('${appUrl}/spa/main/');

    \$locationProvider.html5Mode(true);
  });