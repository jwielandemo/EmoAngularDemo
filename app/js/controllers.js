'use strict';

var controllers = angular.module('controllers', []);

controllers.controller('HomeController', ['$scope',
    function($scope) {
        $scope.text = 'Empty page!';
    }]);
