'use strict';

var controllers = angular.module('controllers', []);
var emailRegExp = new RegExp(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/);

controllers.controller('HomeController', [
	'$scope',
	'$location',
    function($scope, $location) {
        $scope.text = 'Empty page!';
        $scope.fieldsNotEmpty=false;
		$scope.emailValid = false;
		$scope.passwordValid = false;

		// Initialize values
		$scope.email = "";
		$scope.password = "";

		$scope.validatePassword = function() {
			this.passwordValid = this.password.length > 5;
			$scope.fieldsNotEmpty = this.email.length + this.password.length > 0;
		}

		$scope.validateEmail = function() {
			this.emailValid = this.email.length > 6 && this.email.match(emailRegExp);
			$scope.fieldsNotEmpty = this.email.length + this.password.length > 0;
		}

		$scope.go = function() {
			if(this.emailValid && this.passwordValid) {
				$location.path("/success");
			} else {
				$location.path("/failure");
			}
		}
    }]
);

controllers.controller('SuccessController', [
	'$scope',
	function($scope) {
		$scope.text = "Success Ctrl";
	}]
);

controllers.controller('FailureController', [
	'$scope',
	function($scope) {
		$scope.text = "Failure Ctrl";
	}]
);