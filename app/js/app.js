'use strict';

/* App Module */

var app = angular.module('app', [
	'directives',
    'controllers',
    'ngRoute'
]);

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'partials/home.html'
            }).
            when('/success', {
            	templateUrl: 'partials/success.html'
            }).
            when('/failure', {
            	templateUrl: 'partials/failure.html'
            });
    }]);
