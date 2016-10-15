'use strict';

/**
 * @ngdoc directive
 * @name bbApp.directive:bbeditor
 * @description
 * # bbeditor
 */
angular.module('bbApp')
  .directive('bbeditor', function () {
    var directiveDefinitionObject = {
      restrict: 'E',
      templateUrl: "views/textAngularWithMentio.html",
      require: '^ngModel',
      scope: {
        ngModel: '=',
      },
      controller: function($scope, $q, $http) {
        $scope.setup = function(element) {
          element.attr('mentio', 'mentio');
          element.attr('mentio-typed-term', 'typedTerm');
          element.attr('mentio-require-leading-space', 'true');
          element.attr('mentio-id', "'htmlContent'");
        };

        $scope.searchPeople = function(term) {
          var peopleList = [];
          return $http.get('customer.json').then(function(response) {
            angular.forEach(response.data, function(item) {
              if (item.name.toUpperCase().indexOf(term.toUpperCase()) >= 0) {
                peopleList.push(item);
              }
            });
            $scope.people = peopleList;
            return $q.when(peopleList);
          });
        };

     $scope.searchItems = function(term) {
          var itemList = [];
          return $http.get('product.json').then(function(response) {
            angular.forEach(response.data, function(item) {
              if (item.name.toUpperCase().indexOf(term.toUpperCase()) >= 0) {
                itemList.push(item);
              }
            });
            $scope.items = itemList;
            return $q.when(itemList);
          });
        };

        $scope.getPeopleText = function(item) {
          return '@[' + item.name + ']';
        };
         $scope.getItemText = function(item) {
          return '#[' + item.name + ']';
        };
      }
    };

    return directiveDefinitionObject;
  });
