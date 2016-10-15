'use strict';

/**
 * @ngdoc function
 * @name bbApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bbApp
 */
angular.module('bbApp')
  .controller('MainCtrl', function ($scope) {

  	$scope.myval = "This is default text ";

  	 $scope.$watch('myval', function(newVlaue, oldValue) {
  	 	var text = newVlaue.replace(/<\/?[^>]+(>|$)/g, "");
  	 	if(text.length > 100){
  	 		var msg= "Length cant be greater than 100";
  	 		alert(msg);
  	 	}
    });

  });
