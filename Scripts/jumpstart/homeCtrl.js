/// <reference path="../angular.js" />
var myApp = angular.module("MyApp", []).config([
    '$routeProvider', function ($routeProvider) {
        $routeProvider.
            when('/demo1', { templateUrl: 'Demo1/demo.html' }).
            when('/demo2', { templateUrl: 'Demo2/demo.html', controller: calcCtrl }).
            when('/demo3', { templateUrl: 'Demo3/demo.html', controller: BookLibCtrl }).
            when('/demo4', { templateUrl: 'Demo4/demo.html', controller: BookLibCtrl }).
            when('/demo5', { templateUrl: 'Demo5/demo.html', controller: calcCtrl }).
            otherwise({ redirectTo: '/demo1' })

    }]);



function HomeCtrl($scope) {
    $scope.show = false;
    $scope.display = function () {
        $scope.show = $scope.show ? false : true;
    };
}