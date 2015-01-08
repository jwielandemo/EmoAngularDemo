'use strict';

var directives = angular.module('directives', []);

directives.directive('validated', function() {
  return {
  	restrict: "AEC",
    templateUrl: "partials/valid-directive.html",
    replace: true,
    transclude: true,
    scope: {
    	valid: "="
    }
  };
});