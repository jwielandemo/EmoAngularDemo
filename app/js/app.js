'use strict';

/* App Module */

var app = angular.module('app', [
    'controllers',
    'ngRoute'
]);

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'partials/home.html'
            });
    }]);
