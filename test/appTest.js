(function(angular){
    'use strict';
    describe('myController', function () {
        var scope;
        var myController;

        beforeEach(module("myApp"));

        beforeEach(inject(function($controller, $rootScope){
            scope = $rootScope.$new();
            myController = $controller('myController',{
                $scope : scope
            });
        }));

        // Test for message 1
        it('should print message Hello World', function() {
            expect(scope.message).toEqual('Hello World');
        });

        it('should print message Hello World', function() {
            expect(scope.message).toEqual('HelloWorld');
        });

        // Test for message 2
        it('should print message Hello World', function() {
            expect(scope.message1).toEqual('This is a simple Angular app for code coverage POC');
        });

        // Test for dummy method
        it('should print message Hello World', function() {
            scope.dummymethod();
            expect(scope.indicator).toBeTruthy();
        });

    });

})(window.angular);
