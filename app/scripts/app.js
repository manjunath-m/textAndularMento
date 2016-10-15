'use strict';

/**
 * @ngdoc overview
 * @name bbApp
 * @description
 * # bbApp
 *
 * Main module of the application.
 */
var app = angular
  .module('bbApp', [
    'ngAnimate',
    'ngResource',
    'textAngular',
    'ui.router',
    'mentio'
  ]);

  app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  	$stateProvider.state('home', {
  		url : "/",
  		templateUrl : "views/main.html"

  	});
  });



