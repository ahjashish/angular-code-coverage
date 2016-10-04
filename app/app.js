angular.module('myApp', []).
controller('myController', function($scope){
	$scope.message = "Hello World";
	$scope.message1 = "This is a simple Angular app for code coverage POC";
	$scope.message2 = "This is a simple method";
	$scope.indicator = false;
	$scope.dummymethod = function () {
		$scope.indicator = true;
	}
});
