/// <reference path="../angular.js" />
var myApp = angular.module("MyApp", []).config([
    '$routeProvider', function ($routeProvider) {

        $routeProvider.when('/srcHtml', {templateUrl:'src/html.html'})


    }]);



function HomeCtrl($scope) {
    $scope.show = false;
    $scope.display = function () {
        $scope.show = $scope.show ? false : true;
    };
}