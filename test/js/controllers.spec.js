describe('Controllers', function() {
	beforeEach(module('controllers'));

	var scope, homectrl;
	beforeEach(inject(function($controller, $rootScope) {
		scope = $rootScope.$new();
		homectrl = $controller('HomeController', {$scope:scope});
	}));

	describe("Fields not empty", function() {
		it('When I fill out email, then fields should not be empty', function() {
			expect(scope.fieldsNotEmpty).toBe(false);
			scope.email = "hello";
			scope.validateEmail();
			expect(scope.fieldsNotEmpty).toBe(true);
		});

		it('When I fell out password, then fields should not be empty', function() {
			expect(scope.fieldsNotEmpty).toBe(false);
			scope.password = "hello";
			scope.validatePassword();
			expect(scope.fieldsNotEmpty).toBe(true);
		});

		it("When I fill out both, then fields should not be empty", function() {
			expect(scope.fieldsNotEmpty).toBe(false);
			scope.password = "hello";
			scope.validatePassword();
			scope.email = "hello";
			scope.validateEmail();
			expect(scope.fieldsNotEmpty).toBe(true);
		});
	});

	describe('Email validation', function() {
		it('"" should be invalid', function() {
			expect(scope.emailValid).toBe(false);
			scope.validateEmail();
			expect(scope.emailValid).toBe(false);
		});
		it('should have more than 6 characters', function() {
			expect(scope.emailValid).toBeFalsy();
			scope.email = "A@B.co";
			scope.validateEmail();
			expect(scope.emailValid).toBeFalsy();
			scope.email = "ao@be.co";
			scope.validateEmail();
			expect(scope.emailValid).toBeTruthy();
		});
		it('should have an @ and . symbol', function() {
			scope.email = "hello.hi";
			scope.validateEmail();
			expect(scope.emailValid).toBeFalsy();
			scope.email = "bye@hello"
			scope.validateEmail();
			expect(scope.emailValid).toBeFalsy();
			scope.email = "bye@hello.com"
			scope.validateEmail();
			expect(scope.emailValid).toBeTruthy();
		});
	});

	describe('Password validation', function() {
		it("Should be at least 6 characters", function() {
			scope.password = "F";
			scope.validatePassword();
			expect(scope.passwordValid).toBeFalsy();
			scope.password = "Sevens";
			scope.validatePassword();
			expect(scope.passwordValid).toBeTruthy();
		});
	});
});